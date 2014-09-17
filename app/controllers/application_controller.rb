class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :init

  def init
    session[:init] = true
    # @action_name = params[:action]
  end

  def index
    # Injected Session
    if session[:user_token].nil?
      session_token = "mjquintero@ucn.edu.co" + "lZhnQJdJf65HaNqPmDLFbQ"
      session[:user_token] = Digest::SHA1.hexdigest(session_token)
      session[:user_id] = "mjquintero@ucn.edu.co"
      session[:full_name] = "Mateo de Jesus Quintero Jimenez"
      session[:user_grade] = "cuarto"
      session[:group] = 2
    end
  	render layout: "layouts/index_layout"
  end

  def introduction
  	@course_class = params[:class]
  	@course_grade = params[:grade] 
    @course_grade_number = Course.grades[@course_grade.to_sym]
    @course_class_name = Course.classes[@course_class.to_sym]
  	@course_app = "#{@course_class}0#{@course_grade_number}"
    
    byebug
  	helper_methods = PrHelperMethods.new(session)
  	@course_structure = helper_methods.create_course_structure(@course_class, @course_grade_number)
    @course_structure[:pr_type] = 0
    @user_progress = Rails.cache.fetch("#{session[:user_token]}_progress_#{@course_class}_0#{@course_class_name}", expires_in: 24.hours) do
       helper_methods.initialize_user_data(@course_class, @course_grade, false) 
    end
    @course_credits = @course_structure[:course_credits]

    # JavaScript data
    gon.action_name = params[:action]
    gon.course_structure = @course_structure
    gon.click_here = @user_progress[:click_here]
    gon.click_here_menu = @user_progress[:click_here_menu]

    enabled_lessons = Array.new()

    @user_progress[:progress].each_with_index do |p, i|
      enabled_lessons[i] = Hash.new()
      p.each { |k, lesson| enabled_lessons[i][k] = { enabled: lesson[:enabled], current: lesson[:current] } }
    end

    gon.user_progress = enabled_lessons

  	render("lessons/#{@course_class}/#{@course_grade}")
  end

  def lessons
  	
  end
end
