class PrHelperMethods

    def initialize(session_data)
        @session_data = session_data
    end

    def init_course(course_class, course_grade, parent_id, is_lesson = false)
        course = UserProgress.find_by(name: "#{course_class}_0#{Course.grades[course_grade.to_sym]}", user_id: @session_data[:user_id])
        lessons = Course.where(pr_type: Course.course_types[:lesson], parent_id: parent_id)
        course_num = Course.grades[course_grade.to_sym]
        user_course_progress = Hash.new


        if course.nil?
            user_course_progress = initialize_user_data(course_class, course_num, is_lesson, lessons)
            return false unless user_course_progress
        else
            user_course_progress = JSON.parse(course[:metadata], { symbolize_names: true })
        end

        cache_name = "#{course_class}_0#{course_num}"
        progress_model = UserProgress.new

        # Course
        query_course = Rails.cache.fetch("#{@session_data[:user_token]}_course_#{cache_name}", expires_in: 24.hours) do
            progress_model.init_data({
                name: cache_name,
                user_id: @session_data[:user_id],
                current_grade: course_num,
                metadata: user_course_progress.to_json,
                pr_type: UserProgress.progress_types[:course]
            })
        end

        # Guides
        query_keys = Array.new
        (0..3).each do |i|
            query = Rails.cache.fetch("#{@session_data[:user_token]}_guide_#{cache_name}_0#{i}", expires_in: 24.hours) do
                progress_model.init_data({
                    name: "#{cache_name}_0#{i}",
                    user_id: @session_data[:user_id],
                    current_grade: course_num,
                    pr_type: UserProgress.progress_types[:guide],
                    parent_id: query_course.id
                })
            end

            query_keys << query.id
        end

        # Lessons
        lessons.each_with_index do |lesson, i|
            lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })
            query = Rails.cache.fetch("#{@session_data[:user_token]}_lesson_#{cache_name}_0#{lesson_metadata[:guide]}_0#{lesson_metadata[:lesson_num]}", expires_in: 24.hours) do
                enabled = false
                if lesson_metadata[:guide] <= @session_data[:guide] && lesson_metadata[:lesson_num].to_i <= @session_data[:lesson]
                    enabled = true
                end

                progress_model.init_data({
                    name: "#{cache_name}_0#{lesson_metadata[:guide]}_0#{lesson_metadata[:lesson_num]}",
                    user_id: @session_data[:user_id],
                    current_grade: course_num,
                    pr_type: UserProgress.progress_types[:lesson],
                    parent_id: query_keys[lesson_metadata[:guide]],
                    enabled: enabled,
                    current: false
                })
            end

        end           

      return user_course_progress
    end

    def initialize_user_data(course_class, course_num, is_lesson, lessons)
        # TODO: add, update session token to user table

        if is_lesson
            return false
        end

        # ==============================
        # Initialize course
        # ==============================
        user_course_progress = Rails.cache.fetch("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_num}", expires_in: 24.hours) do
        
            user_course_progress = { click_here: false, click_here_menu: false, progress: Array.new }
            parent_id = Course.find_by(name: "#{course_class}0#{course_num}", pr_type: Course.course_types[:course]).id

            lessons.each do |lesson|
                lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })
                lesson_sym = lesson_metadata[:lesson_num].to_sym

                if user_course_progress[:progress][lesson_metadata[:guide]].nil?
                    user_course_progress[:progress][lesson_metadata[:guide]] = {}
                end

                user_course_progress[:progress][lesson_metadata[:guide]][lesson_sym] = {
                    id: lesson[:id],
                    link: lesson[:url],
                    enabled: false,
                    current: false
                }

                if lesson_metadata[:guide] <= @session_data[:guide] && lesson_metadata[:lesson_num].to_i <= @session_data[:lesson]
                    # user_course_progress[:progress][lesson_metadata[:guide]][lesson_sym][:current] = true
                    user_course_progress[:progress][lesson_metadata[:guide]][lesson_sym][:enabled] = true
                end

                
            end
        end
 
        return  user_course_progress
    end

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
                    lesson_title: current_lesson[:name],
                    lesson_url: current_lesson[:url],
                    lesson_id: lesson_metadata[:id],
                    lesson_guide: lesson_metadata[:guide],
                    lesson_id_name: lesson_metadata[:lesson_name],
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
        course_structure = Rails.cache.fetch("#{course_class + course_grade}", expires_in: 24.hours) do
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

    def restore_course(course_class, course_grade, lesson_guide, lesson_num)
        course_grade_num = Course.grades[course_grade.to_sym]
        user_progress = Rails.cache.fetch("#{course_class}_0#{course_grade_num}")

        if user_progress.nil?
            user_progress =  UserProgress.find_by(user_id: @session_data[:user_id], name: "#{course_class}_0#{course_grade_num}")

            if user_progress.nil?
                return false
            end
        end

        lesson_progress = JSON.parse(user_progress[:metadata], { symbolize_names: true })

        lesson_progress[:progress].each_with_index do |item, index|
            item.each do |i, lesson|
                current = false
                if index == lesson_guide && i == lesson_num
                    current = true
                elsif false == lesson[:current]
                    next
                end

                cache_name = "#{course_class}_0#{course_grade_num}_0#{index}_0#{i}"
                user_progress_item = UserProgress.find_by(user_id: @session_data[:user_id], name: cache_name)
                user_progress_item[:current] = current

                result = user_progress_item.save

                if false == result
                    return false
                end

                Rails.cache.delete("#{@session_data[:user_token]}_lesson_#{cache_name}")

                Rails.cache.write("#{@session_data[:user_token]}_lesson_#{cache_name}", user_progress_item, expires_in: 24.hours)
                break
            end
        end

        user_progress[:metadata] = lesson_progress.to_json

        result = user_progress.save

        if false == result
            return false
        end

        if false == Rails.cache.fetch("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_grade_num}").nil?
            Rails.cache.delete("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_grade_num}")
        end

        Rails.cache.write("#{@session_data[:user_token]}_progress_#{course_class}_0#{course_grade_num}", lesson_progress, expires_in: 24.hours)

        return user_progress
    end

    def initialize_lesson(course_structure)
        byebug
        lesson_structure = CourseData.where(course_id: course_structure[:lesson_id])
        lesson_structure
        return
    end
end