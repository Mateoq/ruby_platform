class PlatformController < ApplicationController
	layout :determine_layout
	before_action :init
	before_action :authenticate_user
	prepend_view_path "app/views/platform"

	def init
		session[:init] = true

		@helper_methods = PlcibHelperMethods.new(session, current_user)
	end

	def index
		byebug
		@header_title = current_user.format_name.titleize

		if session[:notify]
			gon.push({
				notify: true,
				short: params[:short].to_bool || true,
				type_message: params[:type_message] || :success,
				message: PlcibHelperMethods.messages[params[:type].to_sym]
			})
		end

		case current_user[:role]
		when User.roles[:sys_admin]
			@courses = Course.grades.keys
			render "index/admin"
		when User.roles[:student]
			@menu_data = @helper_methods.format_student_data()
			render  "index/student"
		end

		session[:notify] = false
	end

	def data_list
		group = params[:group].to_sym

		@data_list = case group
		when :cursos
			@helper_methods.format_courses_per_grade(params[:type].to_sym)
		when :usuario
			@helper_methods.format_users(params[:type])
		end

		if @data_list.empty?
			session[:notify] = true
			redirect_to root_path(short: false, type_message: :error, type: :no_courses)
			return
		end
	end

	private
		def determine_layout
			"platform_layout"
		end
end
