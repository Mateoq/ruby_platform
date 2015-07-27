class PlcibHelperMethods
	include Rails.application.routes.url_helpers

  def initialize(session, current_user)
    @current_user = current_user
    @user_session = session
  end

  # def save_image(file_instance, path)
  # 	byebug
  # 	Thread.new do
  # 		FileUtils.mv(file_instance.tempfile, path)
  # 	end
  # end

  # Order a user data to print in the profile view
  def get_user_profile_data(username)
    user_data = Rails.cache.fetch("user_data_#{username}", expires_in: 24.hours) do
      User.find_by(username: username)
    end

    user = {
      username: username,
      fullname: user_data.format_name.titleize,
      role: User.literal_roles[user_data[:role]],
      extra_data: [
        {
          'Identificación' => {
            lclass: 'a',
            value: user_data[:personal_id]
          },
          'Email' => {
            lclass: 'b',
            value: user_data[:email]
          },
          'Género' => {
            lclass: 'c',
            value: User.genders[user_data[:gender]]
          }
        }
      ]

    }

    user[:image] = (user_data[:image]) ? create_profile_image_path(user_data[:role], user_data[:username], user_data[:image]) : 'common/user_placeholder.png'
    user[:extra_data] << {
      'Teléfono' => {
        lclass: 'a',
        value: (user_data[:telephone].empty?) ? '-' : user_data[:telephone]
      }
    }
    user[:extra_data][1]['Celular'] = {
      lclass: 'b',
      value: (user_data[:mobile_phone].empty?) ? '-' : user_data[:mobile_phone]
    }

    user[:html_attributes] = {}

    if user_data[:role] == User.roles[:student]
      user_metadata = user_data[:metadata]
      user[:extra_data][1]['Grado'] = {
        lclass: 'c',
        value: user_metadata['grade'].capitalize
      }

      # user[:course_registration_data] = {
      # 	role: user_data[:role],

      # }
      user[:html_attributes][:disabled] = true
    end

    if user_data[:role] == User.roles[:student] || user_data[:role] == User.roles[:teacher]
      user[:add_courses] = true if User.roles[:sys_admin] == @current_user[:role] || User.roles[:admin] == @current_user[:role]
    end

    user
  end

  # Format courses for select form
  def format_courses(grade, options = {})
    courses = Rails.cache.fetch('all_cyber_courses', expires_in: 72.hours) do
      Course.where('pr_type = ? OR pr_type = ?', Course.course_types[:course], Course.course_types[:other])
    end

    courses_formatted = []

    courses.each do |c|
      course_name = c[:name][0, 3]
      if options[:object].nil?
        next unless options[:user][:metadata]['courses'].index(course_name).nil?
      else
        next if options[:user][:metadata]['courses'][grade] && !options[:user][:metadata]['courses'][grade].index(course_name).nil?
      end

      if (Course.course_types[:course] == c[:pr_type])
        next unless Course.grades[grade.to_sym] == c[:name][4]
        name = Course.classes[course_name.to_sym]
      else
        metadata = JSON.parse(c[:metadata], symbolize_names: true)
        name = metadata[:name]
      end

      courses_formatted << [name, course_name] unless options[:object]

      courses_formatted << { name: name, value: course_name } if options[:object]
    end

    courses_formatted
  end

  # Generate user profile image path
  def create_profile_image_path(role, username, image_name)
    "/assets/data/users/#{User.roles.key(role.to_i)}/#{username}/#{image_name}"
  end

  def format_student_data
    courses = @current_user.courses

    lists = {}

    courses.each do |c|
      metadata = JSON.parse(c[:metadata], symbolize_names: true)

      lists[metadata[:grade]] ||= []

      teacher = ''

      c.users.each { |u| teacher = u.format_name if User.roles[:teacher] == u[:role] }

      icon = JSON.parse(c.parent[:metadata], symbolize_names: true)[:icon]

      lists[metadata[:grade]] << {
        icon: icon,
        course: c[:name][0, 3],
        course_name: Course.classes[c[:name][0, 3].to_sym],
        url: c[:url],
        teacher: teacher
      }
    end

    lists
  end

  def format_courses_per_grade(grade)

    number_grade = Course.grades[grade]

    pr_helper_methods = PrHelperMethods.new(@user_session, @current_user)

    classes = Course.classes

    courses = []

    classes.each_key do |key|
      pr_class = key.to_s
      course = pr_helper_methods.create_base_course_structure(pr_class, "#{'%02d' % number_grade}")
      courses << {
      	name: key.to_s,
      	image: course[:class_icon],
      	title: course[:name],
      	subtitle: course[:name],
      	url: courses_path(key.to_s, grade)
      } if course
    end

    courses
  end

  def format_users_per_role(role)
  	query_users = Rails.cache.fetch("users_role_#{User.roles.key(role).to_s}", expires_in: 72.hours) do
  		User.where(role: role, enabled: true).order(:first_name)
  	end

  	return nil if query_users.empty? || query_users.nil?

  	users = []

  	query_users.each do |user|
  		users << {
  			image: user.profile_image,
  			title: user.format_name,
  			subtitle: user[:username],
  			url: user_path(user[:username])
  		}
  	end

  	users
  end

  # def format_admin_data
  # end

  # Notification messages
  def self.messages
    {
      new_user: '!El usuario ha sido creado satisfactoriamente¡',
      edit_user: '!El usuario ha sido editado satisfactoriamente¡',
      login_user: '!Bienvenido(a)¡',
      course_registration: '!Curso registrado¡',
      no_courses: 'No hay cursos disponibles en este grado.',
      no_users: 'No hay usuarios registrados en este rol.'
    }
  end
end
