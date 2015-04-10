class UsersController < ApplicationController
	layout :determine_layout
	before_action :init
	prepend_view_path "app/views/platform"

	def init
		session[:init] = true
		@grades = []

		Course.grades().each do |k, v|
			@grades.push([k.capitalize, k])
		end

		@helper_methods = PlcibHelperMethods.new
	end

	def new
		@user = User.new
		@header_title = "Nuevo usuario"
		@roles = User.literal_roles

		gon.type = :new_user
		gon.method_type = "POST"
		gon.url = users_path
	end

	def create
		byebug
		
		user_data = user_params
		user_data[:metadata] = (user_data[:role] == User.roles[:student]) ? { grade: user_data[:metadata] } : false

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
			unless File.file?("#{dir}/#{user_data[:image]}")
				File.open("#{dir}/#{user_data[:username]}_profile_image.jpg", "w+") do |file|
					file.puts(File.read(file_instance.tempfile))
				end
			end

			render json: { username: @user[:username], route: user_path(data.username) + '?notify=true&type=new_user' }.to_json, status: :ok
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

		if params[:notify]
			gon.notify = true
			gon.short = true
			gon.type_message = :success
			gon.message = PlcibHelperMethods.messages[params[:type].to_sym]
			gon.method_type = "PATCH"
			gon.url = user_path(main_data)
		end
	end

	def edit
		gon.type = :edit_user
	end

	private
		def determine_layout
			"platform_layout"
		end

		def user_params
	      	params.require(:user).permit(:username, :first_name, :middle_name, :surnames, :personal_id, :gender, :email,
	       		:telephone, :mobile_phone, :role, :metadata, :image, :password, :password_confirmation)
	    end
end
