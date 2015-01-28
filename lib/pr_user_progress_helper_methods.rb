class PrUserProgressHelperMethods

    def initialize(session)
        @session = session
    end

    def restore_lesson_items(lesson_items, next_item, cache_name, course_progress, options = {})
        
        course_progress_data = JSON.parse(course_progress[:metadata], { symbolize_names: true })
        course_module = options[:course_module]

        lesson_items.each do |item|
            item_progress = Rails.cache.fetch(cache_name + item)
            if next_item == item
                course_progress_data[:lesson_progress][course_module][item.to_sym][:enabled] = true
                course_progress_data[:lesson_progress][course_module][item.to_sym][:current] = true
                item_progress[:current] = true
                item_progress[:enabled] = true
            else
                course_progress_data[:lesson_progress][course_module][item.to_sym][:current] = false
                item_progress[:current] = false
            end
            if item_progress.save
                Rails.cache.write(cache_name + item, item_progress, expires_in: 24.hours)
            else
                return false
            end
        end

        course_progress[:metadata] = course_progress_data.to_json

        if course_progress.save
            Rails.cache.write(options[:course_progress_cache_name], course_progress, expires_in: 24.hours)
            return course_progress
        end

        return false
    end

    def generate_grade(stage, activity_data, schemes)
        
        p = ((activity_data[:right_answers] / activity_data[:num_items].to_f).round(3) * 100);
        scheme = JSON.parse(schemes[stage - 1][:scheme])
        grade = 0

        scheme.each do |k, g|
            
            next unless p <= k.to_f

            grade = g
            break
        end

        data = {
            grade: grade
        }

        if grade < 3.0
            data[:stage] = stage + 1
            data[:failed] = true
            data[:done] = false
        else
            data[:stage] = stage
            data[:failed] = false
            data[:done] = true
        end

        return data
    end

    def get_total_grade(metadata, with_type)
        
        num_items = 0
        total_grade = 0
        metadata.each do |index, item|
            byebug
            if with_type
                next unless item[:type] == CourseData.lesson_types[:activity]
            end

            return false unless item[:grade]

            num_items += 1
            total_grade += item[:grade]
        end

        return total_grade /= num_items
    end

    def update_course_progress(progress, cache_name)
        if progress.save
            Rails.cache.write(cache_name % "course", progress, expires_in: 24.hours)
            return progress
        end

        return false
    end

    def update_general_progress(course_progress, options = {})
        # Total activities
        cache_name = "#{@session[:user_token]}_%s_#{options[:pr_class]}_#{"%02d" % options[:pr_grade]}"

        course_progress_metadata = JSON.parse(course_progress[:metadata], { symbolize_names: true })

        total_grade = get_total_grade(course_progress_metadata[:lesson_progress][options[:course_module].to_sym], true)

        return course_progress_metadata unless total_grade

        course_progress_metadata[:progress][options[:pr_guide]][options[:pr_lesson].to_sym].merge!({
            grade: total_grade,
            done: true
        })

        lesson_cache = Rails.cache.fetch(cache_name % "lesson" + "_#{"%02d" % options[:pr_guide]}_#{"%02d" % options[:pr_lesson]}")
        lesson_cache[:grade] = total_grade
        lesson_cache[:metadata] = { done: true }.to_json

        if lesson_cache.save
            Rails.cache.write(cache_name % "lesson" + "_#{"%02d" % options[:pr_guide]}_#{"%02d" % options[:pr_lesson]}", lesson_cache, expires_in: 24.hours)
            course_progress[:metadata] = course_progress_metadata.to_json
        end

        unless 2 <= course_progress_metadata[:progress][options[:pr_guide]].length
            return update_course_progress(course_progress, cache_name)
        end

        # Total lessons
        total_grade = get_total_grade(course_progress_metadata[:progress][options[:pr_guide]])
        return update_course_progress(course_progress, cache_name) unless total_grade

        guide_cache = Rails.cache.fetch(cache_name % "guide" + "_#{"%02d" % options[:pr_guide]}")
        guide_cache[:grade] = total_grade
        guide_cache[:metadata] = { done: true }.to_json

        if guide_cache.save
            Rails.cache.write(cache_name % "guide" + "_#{"%02d" % options[:pr_guide]}", guide_cache, expires_in: 24.hours)
            course_progress[:metadata] = course_progress_metadata.to_json
        end

        return update_course_progress(course_progress, cache_name) unless 4 == course_progress_metadata[:progress].length

        # Total guides
        guides = []

        (0..3).each do |i|
            byebug    
            cache_item = Rails.cache.fetch(cache_name % "guide" + "_#{"%02d" % i}")

            guides << cache_item
        end

        total_grade = get_total_grade(guides)
        return update_course_progress(course_progress, cache_name) unless total_grade

        course_progress[:grade] = total_grade

        return update_course_progress(course_progress, cache_name)
    end

end