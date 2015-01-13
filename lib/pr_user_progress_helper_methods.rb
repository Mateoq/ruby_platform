class PrUserProgressHelperMethods

    def restore_lesson_items(lesson_items, next_item, cache_name, course_progress, options = {})
        byebug
        course_progress_data = JSON.parse(course_progress[:metadata], { symbolize_names: true })
        course_module = options[:course_module]

        lesson_items.each do |item|
            byebug
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

end