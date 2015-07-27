class PlatformController < ApplicationController
  layout :determine_layout
  before_action :init, :init_platform
  prepend_view_path 'app/views/platform'

  def index
    @header_title = current_user.format_name.titleize

    if session[:notify]
      gon.push(notify: true,
               short: params[:short].to_bool || true,
               type_message: params[:type_message] || :success,
               message: PlcibHelperMethods.messages[params[:type].to_sym])
    end

    case current_user[:role]
    when User.roles[:sys_admin]
      @courses = Course.grades.keys
      render 'index/admin'
    when User.roles[:student]
      @menu_data = @plcib_helper_methods.format_student_data
      render 'index/student'
    end

    session[:notify] = false
  end

  def data_list
    group = params[:group].to_sym
  	@header_title = group.to_s.capitalize

    @data_list = case group
                 when :cursos
                   @plcib_helper_methods.format_courses_per_grade(params[:type].to_sym)
                 when :usuarios
                   @plcib_helper_methods.format_users_per_role(params[:type].to_i)
    end
    byebug

    unless @data_list
      session[:notify] = true
			message = (group == :cursos) ? :no_courses : :no_users
      redirect_to root_path(short: false, type_message: :error, type: message)
      return
    end
  end

  private

  def determine_layout
    'platform_layout'
    end
end
