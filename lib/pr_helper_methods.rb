class PrHelperMethods

    def initialize(session_data)
        @session_data = session_data
    end

    # ============================================================
    # Course Structure Initialization
    # ============================================================

    def create_course_structure(course_class, course_grade, course_lesson = nil)
        course_structure = {}

        if !course_lesson.nil?
            course_structure = Rails.cache.fetch("#{course_class}-#{course_grade}-#{course_lesson}", expires_in: 24.hours) do
                
                course_model = Course.new()
                course_structure = create_base_course_structure(course_class, "0#{course_grade}")

                current_lesson = course_model.get_by_type_and_name("#{course_class + course_grade + course_lesson}", Course.course_types[:lesson])

            
                lesson_metadata = JSON.parse(current_lesson[:metadata], { symbolize_names: true })

                lesson_structure = {
                    lesson_id: current_lesson[:id],
                    lesson_app: current_lesson[:name],
                    lesson_url: current_lesson[:url],
                    lesson_id_name: lesson_metadata[:id],
                    lesson_guide: lesson_metadata[:guide],
                    lesson_name: lesson_metadata[:lesson_name],
                    lesson_num: lesson_metadata[:lesson_num]
                }

                course_structure = course_structure.merge(lesson_structure)

                return course_structure
            end

        else
            course_structure = create_base_course_structure(course_class, "0#{course_grade}")
        end

        return course_structure
    end

    def create_base_course_structure(course_class, course_grade)
        course_structure = Rails.cache.fetch("#{course_class}0#{course_grade}", expires_in: 24.hours) do
            course_model = Course.new()
            current_class = Rails.cache.fetch("#{course_class}_class", expires_in: 12.hours) do
                course_model.get_by_type_and_name(course_class, Course.course_types[:class])
            end

            current_course = Rails.cache.fetch("#{course_class + course_grade}_course", expires_in: 12.hours) do
                course_model.get_by_type_and_name("#{course_class + course_grade}", Course.course_types[:course])
            end

            current_class_metadata = JSON.parse(current_class[:metadata], { symbolize_names: true })
            current_course_metadata = JSON.parse(current_course[:metadata], { symbolize_names: true })

            course_structure = {
                name: current_class_metadata[:name],
                class_name: current_class[:name],
                course_id: current_course[:id],
                course_name: current_course[:name],
                course_url: current_course[:url]
            }

            current_course_metadata.each{ |key, value| (key != :name) ? course_structure[key] = value : next }

            return course_structure
        end

        return course_structure
    end

    def make_menu_structure(course_class, course_grade_name)
        
        course = Rails.cache.fetch("#{@session_data[:user_token]}_course_0#{course_num}_0#{course_grade_name}", expires_in: 24.hours) do
            UserProgress.find_by(
                name: "#{course_class}_0#{course_grade_name}",
                pr_type: UserProgress.progress_types[:course]
            )
        end 

        result = JSON.parse(course[:metadata], { symbolize_names: true })
        return result
    end

    # ============================================================
    # **
    # ============================================================

    def init_course(course_class, course_grade, parent_id, is_lesson = false, options = {})
        
        course_num = Course.grades[course_grade.to_sym]
        cache_name = "#{course_class}_0#{course_num}"
        course = check_cache("#{@session_data[:user_token]}_course_#{cache_name}", 24.hours) do
            UserProgress.find_by(name: "#{course_class}_0#{Course.grades[course_grade.to_sym]}", user_id: @session_data[:user_id]) 
        end
        lessons = Course.where(pr_type: Course.course_types[:lesson], parent_id: parent_id)
        user_course_progress = Hash.new

        if course.nil?
            user_course_progress = initialize_user_data(course_class, course_num, lessons)
            return false unless user_course_progress
        else
            user_course_progress = JSON.parse(course[:metadata], { symbolize_names: true })
        end

        progress_model = UserProgress.new
        base_user_info = {user_id: @session_data[:user_id], current_grade: course_num}

        # Course
        unless query_course = Rails.cache.fetch("#{@session_data[:user_token]}_course_#{cache_name}") || course
            query_course = progress_model.init_data(base_user_info.merge({
                name: cache_name,
                current_grade: course_num,
                pr_type: UserProgress.progress_types[:course]
            }), lesson: is_lesson)

            return false unless query_course

            Rails.cache.write("#{@session_data[:user_token]}_course_#{cache_name}", query_course, expires_in: 24.hours)
        end

        query = nil

        # Guides
        query_keys = Array.new
        (0..3).each do |i|
            unless query = Rails.cache.fetch("#{@session_data[:user_token]}_guide_#{cache_name}_0#{i}")
                query = progress_model.init_data(base_user_info.merge({
                    name: "#{cache_name}_0#{i}",
                    pr_type: UserProgress.progress_types[:guide],
                    parent_id: query_course.id
                }), lesson: is_lesson)

                return false unless query

                Rails.cache.write("#{@session_data[:user_token]}_guide_#{cache_name}_0#{i}", query, expires_in: 24.hours)
            end

            query_keys << query.id
        end

        # Lessons
        lesson_key = 0
        lessons.each_with_index do |lesson, i|
            
            lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })
            unless query = Rails.cache.fetch("#{@session_data[:user_token]}_lesson_#{cache_name}_0#{lesson_metadata[:guide]}_0#{lesson_metadata[:lesson_num]}")
                
                enabled = false
                if lesson_metadata[:guide] <= @session_data[:guide] && lesson_metadata[:lesson_num].to_i <= @session_data[:lesson]
                    enabled = true
                end

                query = progress_model.init_data(base_user_info.merge({
                    name: "#{cache_name}_0#{lesson_metadata[:guide]}_0#{lesson_metadata[:lesson_num]}",
                    pr_type: UserProgress.progress_types[:lesson],
                    parent_id: query_keys[lesson_metadata[:guide]],
                    enabled: enabled,
                    current: false
                }), lesson: is_lesson)

                return false unless query

                Rails.cache.write("#{@session_data[:user_token]}_lesson_#{cache_name}_0#{lesson_metadata[:guide]}_0#{lesson_metadata[:lesson_num]}", query, expires_in: 24.hours)
            end

            lesson_key = query.id if lesson[:id] == options[:structure][:lesson_id] if is_lesson

        end

        # Lesson items
        if is_lesson && lesson_key != 0
            prog =  init_lesson_progress(
                current_progress: query_course,
                lesson_key: lesson_key,
                data: options[:structure]
            )

            return false unless prog

            user_course_progress = prog

        elsif lesson_key == 0
            return false
        end 

        return user_course_progress
    end

    def initialize_user_data(course_class, course_num, lessons)
        # TODO: add, update session token to user table

        # ==============================
        # Initialize course
        # ==============================
        user_course_progress = Rails.cache.fetch("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_num}", expires_in: 24.hours) do
            
            user_progress = { click_here: false, click_here_menu: false, progress: Array.new }
            # parent_id = Course.find_by(name: "#{course_class}0#{course_num}", pr_type: Course.course_types[:course]).id

            lessons.each do |lesson|
                
                lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })
                lesson_sym = lesson_metadata[:lesson_num].to_sym

                if user_progress[:progress][lesson_metadata[:guide]].nil?
                    user_progress[:progress][lesson_metadata[:guide]] = {}
                end

                user_progress[:progress][lesson_metadata[:guide]][lesson_sym] = {
                    id: lesson[:id],
                    link: lesson[:url],
                    enabled: false,
                    current: false
                }

                if lesson_metadata[:guide] <= @session_data[:guide] && lesson_metadata[:lesson_num].to_i <= @session_data[:lesson]
                    # user_course_progress[:progress][lesson_metadata[:guide]][lesson_sym][:current] = true
                    user_progress[:progress][lesson_metadata[:guide]][lesson_sym][:enabled] = true
                end

            end

            return user_progress
        end
 
        return  user_course_progress
    end

    def init_lesson_progress(options = {})
        
        grade_num = Course.grades[options[:data][:grade].to_sym]
        cache_name = "#{options[:data][:lesson_app]}_items"
        save = false
        lesson_items = Rails.cache.fetch(cache_name, expires_in: 24.hours) do
            CourseData.where(course_id: options[:data][:lesson_id])
        end

        return false if lesson_items.empty?

        course_metadata = JSON.parse(options[:current_progress][:metadata], { symbolize_names: true })

        unless lesson_progress = course_metadata[:lesson_progress]
            lesson_progress = Hash.new
            lesson_progress[options[:data][:lesson_app].to_sym] = Hash.new { |hash, key| hash[key] = Hash.new }            
        end

        user_progress_model = UserProgress.new

        lesson_items.each_with_index do |i, key|
            
            item = nil
            cache_name = "#{@session_data[:user_token]}_item_#{options[:data][:name]}_#{i[:url_name]}"
            unless item = Rails.cache.fetch(cache_name)
                
                tm = false
                if key == 0
                    tm = true
                end
                item = user_progress_model.init_data(
                    name: "#{options[:data][:lesson_app]}_#{i[:url_name]}",
                    user_id: @session_data[:user_id],
                    current_grade: grade_num,
                    pr_type: i[:pr_type],
                    parent_id: options[:lesson_key],
                    enabled: tm,
                    current: tm
                )

                return false unless item

                Rails.cache.write(cache_name, item, expires_in: 24.hours)
            end

            unless lesson_progress[options[:data][:lesson_app].to_sym].has_key?(i[:url_name].to_sym)
                save = true
                lesson_progress[options[:data][:lesson_app].to_sym][i[:url_name].to_sym] = { 
                    id: item[:id],
                    name: "#{options[:data][:lesson_app]}_#{i[:url_name]}",
                    display_name: i[:url_name],
                    url: "curso/#{options[:data][:class_name]}/#{options[:data][:grade]}/#{options[:data][:lesson_id]}/#{i[:url_name]}",
                    enabled: item[:enabled],
                    current: item[:current]
                } 
            end
        end

        course_metadata[:lesson_progress] = lesson_progress

        if save
            options[:current_progress][:metadata] = course_metadata.to_json
            options[:current_progress].save
        end

        return course_metadata
    end

    def init_lesson(course_structure)
        lesson_data = Rails.cache.fetch(course_structure[:lesson_app], expires_in: 24.hours) do
            
            lesson_structure = CourseData.where(course_id: course_structure[:lesson_id])
            
            data = Array.new
            date_strings = ["created_at", "updated_at"]

            lesson_structure.each do |item|
                
                i = Hash.new

                item.as_json.each do |key, value|
                    next if key == date_strings[0] || key == date_strings[1]
                    i[key.to_sym] = value
                end

                template = Template.find(item[:template_id])

                template.as_json.each do |key, value|
                    next if key == date_strings[0] || key == date_strings[1]
                    i["template_#{key}".to_sym] = value
                end

                i[:url] = "#{course_structure[:lesson_url]}/#{item[:url_name]}"

                data << i
            end
            return data
        end

        return lesson_data
    end

    # ============================================================
    # **
    # ============================================================

    def restore_course(course_class, course_grade, options = {})
        
        course_grade_num = Course.grades[course_grade.to_sym]
        lessons_progress = init_course(
            course_class,
            course_grade,
            options[:structure][:course_id], options[:lesson],
            structure: options[:structure]
        )
        user_progress = Rails.cache.fetch("#{@session_data[:user_token]}_course_#{course_class}_0#{course_grade_num}")

        current_lesson = Hash.new

        lessons_progress[:progress].each_with_index do |item, index|
            item.each do |i, lesson|
                
                current = false
                
                if options[:lesson]
                    if index == options[:structure][:lesson_guide] && i == options[:structure][:lesson_num]
                        current = true
                        current_lesson = item
                    elsif false == lesson[:current]
                        next
                    end
                end

                cache_name = "#{course_class}_0#{course_grade_num}_0#{index}_0#{i}"
                user_progress_item = UserProgress.find_by(user_id: @session_data[:user_id], name: cache_name)
                user_progress_item[:current] = current

                result = user_progress_item.save

                return false unless result

                Rails.cache.delete("#{@session_data[:user_token]}_lesson_#{cache_name}")

                Rails.cache.write("#{@session_data[:user_token]}_lesson_#{cache_name}", user_progress_item, expires_in: 24.hours)
                break
            end
        end

        # if options[:lesson]
        #     lesson_progress[options[:structure][:lesson_app]] = restore_lesson(options, current_lesson, lesson_progress[:lesson_progress])
        # end

        user_progress[:metadata] = lessons_progress.to_json

        result = user_progress.save

        return false unless result

        if false == Rails.cache.fetch("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_grade_num}").nil?
            Rails.cache.delete("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_grade_num}")
        end

        Rails.cache.write("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_grade_num}", lessons_progress, expires_in: 24.hours)

        return user_progress
    end

    # def restore_lesson(data, lesson, lesson_progress)
    #     lesson_progress.each do |key, value|

    #     end
    # end

    # ============================================================
    # Utilities
    # ============================================================

    def get_js_lesson_data(user_progress, options = {})
        byebug
        enabled_lessons = Array.new()

        if options[:lesson]
            enabled_lessons = Hash.new
            user_progress[:lesson_progress][options[:app].to_sym].each do |k, p|
                enabled_lessons[k] = { enabled: p[:enabled], current: p[:current] }
            end

            return enabled_lessons
        end

        user_progress[:progress].each_with_index do |p, i|
          enabled_lessons[i] = Hash.new()
          p.each { |k, lesson| enabled_lessons[i][k] = { enabled: lesson[:enabled], current: lesson[:current] } }
        end

        return enabled_lessons
    end

    def check_cache(name, time)
        result = nil

        unless result = Rails.cache.fetch(name)
            result = yield

            return nil unless result

            Rails.cache.write(name, result, expires_in: time)
        end

        return result
    end
end