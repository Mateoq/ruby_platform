class UsersController < ApplicationController
	layout :determine_layout
	before_action :init
	before_action :authenticate_user, except: [:create, :update]
	prepend_view_path "app/views/platform"

	def init
		session[:init] = true

		@grades = []

		@grades = format_select_array(Course.grades())

		@helper_methods = PlcibHelperMethods.new(current_user)
	end

	def authenticate_user
		unless logged_in?
			redirect_to login_path
			return
		end
	end

	def new
		redirect_to user(current_user[:username]) unless User.roles[:sys_admin] == current_user[:role] || User.roles[:admin] == current_user[:role]
		@user = User.new
		@header_title = "Nuevo usuario"
		@roles = User.literal_roles

		gon.type = :new_user
		gon.method_type = "POST"
		gon.url = users_path

		session[:notify] = true
	end

	def create
		byebug
		
		user_data = user_params
		user_data[:token] = Digest::SHA1.hexdigest(user_data[:username] + user_data[:email])
		user_data[:metadata] = (user_data[:role].to_i == User.roles[:student]) ? { grade: user_data[:metadata] }.to_json : false

		user_data.delete(:metadata) unless user_data[:metadata]

		file_instance = params[:image]

		if file_instance
			unless "image/jpeg" == params[:image].content_type
				render json: { image: ["El formato de imagen es incorrecto."] }.to_json, status: :unprocessable_entity
				return
			end

			user_data[:image] = "#{user_data[:username]}_profile_image.jpg"
		end

		@user = User.new(user_data)

		if @user.save
			# Create directory if not exists
			dir = "#{User.profile_url}#{User.roles.key(@user[:role].to_i)}/#{@user[:username]}"
			FileUtils.mkdir_p(dir) unless File.directory?(dir)
			# Save file to directory previously created if not exists
			if file_instance && !File.file?("#{dir}/#{user_data[:image]}")
				File.open("#{dir}/#{user_data[:username]}_profile_image.jpg", "w+") do |file|
					file.puts(File.read(file_instance.tempfile))
				end
			end

			render json: { username: @user[:username], route: user_path(@user[:username]) + '?type=new_user' }.to_json, status: :ok
		else
			render json: @user.errors.to_json, status: :unprocessable_entity
		end
	end

	def show
		byebug
		main_data = params[:id]
		
		if main_data.match('/\A\d+\z/')
			redirect_to new_user_path
			return
		end		

		@user = @helper_methods.get_user_profile_data(main_data)
		@header_title = @user[:fullname]

		user = Rails.cache.fetch("user_data_#{main_data}")

		user[:metadata] ||= {}
		user[:metadata][:courses] ||= []

		@courses = @helper_methods.format_courses(user[:metadata]["grade"]) if User.roles[:student] == user[:role]

		if session[:notify]
			gon.notify = true
			gon.short = true
			gon.type_message = :success
			gon.message = PlcibHelperMethods.messages[params[:type].to_sym]
			
		end

		gon.type = :course_registration
		gon.url = course_registration_path
		gon.method_type = "POST"
		session[:notify] = false
	end

	def edit
		gon.type = :edit_user

		session[:notify] = true
	end

	def course_registration
		byebug

		unless User.roles[:sys_admin] == current_user[:role] || User.roles[:admin] == current_user[:role]
			render json: { errors: ["No tienes los permisos suficientes."] }.to_json, status: :unprocessable_entity
			return
		end

		registration_data = params[:course_registration]

		user = Rails.cache.fetch("user_data_#{registration_data[:username]}")
		cache_name = if User.roles[:student] == user[:role]
			"#{registration_data[:course]}#{"%02d" % Course.grades[user[:metadata]["grade"].to_sym]}"
		else
			"#{registration_data[:course]}#{"%02d" % Course.grades[registration_data[:grade].to_sym]}"
		end

		course = Rails.cache.fetch("#{cache_name}_course") do
			Course.find_by_name(cache_name)
		end

		course_reg = CourseRegistration.new(user_id: user[:id], user_role: user[:role], course_id: course[:id])

		if course_reg.save

			data = {
				message: PlcibHelperMethods.messages[:course_registration],
				type_message: :success
			}.to_json

			render json: data, status: :ok
		else
			render json: { errors: ["Hubo un error al registrar el curso."] }.to_json, status: :internal_server_error
		end
	end

	def update_courses
		byebug
		grade = params[:grade]

		render json: { errors: ["Falta el parametro grade."] }.to_json, status: :internal_server_error if grade.nil?

		render json: { courses: @helper_methods.format_courses(grade, object: true) }.to_json, status: :ok
	end

	private
		def determine_layout
			"platform_layout"
		end

		def user_params
	      	params.require(:user).permit(:username, :first_name, :middle_name, :surnames, :personal_id, :gender, :email,
	       		:telephone, :mobile_phone, :role, :metadata, :image, :password, :password_confirmation)
	    end

	    def format_select_array(data)
	    	array = []

	    	data.each do |k, v|
				array.push([k.capitalize, k])
			end

			return array
	    end
end
