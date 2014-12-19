class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include ApplicationHelper
  protect_from_forgery with: :exception
  before_action :init

  def init
    session[:init] = true
    gon.action_name = params[:action]
  end

  def index
    # Injected Session
    if session[:user_token].nil?
      session_token = "mjquintero@ucn.edu.co" + "lZhnQJdJf65HaNqPmDLFbQ"
      session[:user_token] = Digest::SHA1.hexdigest(session_token)
      session[:user_id] = "mjquintero@ucn.edu.co"
      session[:full_name] = "Mateo de Jesus Quintero Jimenez"
      session[:user_grade] = "cuarto"
      session[:guide] = 4
      session[:lesson] = 2
      session[:permissions] = 2
    end
  	render layout: "layouts/index_layout"
  end

  def introduction
    
  	@course_class = params[:class]
  	@course_grade = params[:grade] 
    @course_grade_number = Course.grades[@course_grade.to_sym]
    @course_class_name = Course.classes[@course_class.to_sym]

		#Course AngularJs App
  	@course_app = "#{@course_class}0#{@course_grade_number}"
    
    
  	helper_methods = PrHelperMethods.new(session)
  	@course_structure = helper_methods.create_course_structure(@course_class, @course_grade_number)
    @course_structure[:pr_type] = 0
    @user_progress = helper_methods.restore_course(
      @course_class,
      @course_grade,
      course_app: @course_app,
      structure: @course_structure,
      lesson: false
    )

    @course_credits = @course_structure[:course_credits]

    # JavaScript data
    gon.course_app = @course_app
    gon.course_structure = @course_structure
    gon.click_here = @user_progress[:click_here]
    gon.click_here_menu = @user_progress[:click_here_menu]

    gon.user_progress = helper_methods.get_js_lesson_data(@user_progress)

  	render("lessons/#{@course_class}/#{@course_grade}")
  end

  def lessons
    
    @course_class = params[:class]
    @course_grade = params[:grade]
    @course_lesson = params[:lesson]
    @course_grade_number = Course.grades[@course_grade.to_sym]
    @course_class_name = Course.classes[@course_class.to_sym]

    # Course AngularJs App
    @course_app = "#{@course_class + @course_grade_number + @course_lesson}"

    helper_methods = PrHelperMethods.new(session)
    @course_structure = helper_methods.create_course_structure(@course_class, @course_grade_number, @course_lesson)

    unless @course_structure
      Rails.cache.delete("#{course_class}-#{course_grade_number}-#{course_lesson}")
      redirect_to "/curso/#{@course_class}/#{@course_grade}"
      return
    end

    @course_structure[:pr_type] = 2

    # Initialize lesson
    @lesson_structure = helper_methods.init_lesson(@course_structure, @course_lesson)

    @user_progress = helper_methods.restore_course(
      @course_class,
      @course_grade,
      course_app: @course_app,
      structure: @course_structure,
      lesson: true
    )

    unless @user_progress
      Rails.cache.clear
      redirect_to "/curso/#{@course_class}/#{@course_grade}"
      return
    end

    # Check current lesson progress
    @current_lesson_progress = Rails.cache.fetch("#{session[:user_token]}_lesson_#{@course_class}_0#{@course_grade_number}_0#{@course_structure[:lesson_guide]}_0#{@course_structure[:lesson_num]}")

    if @current_lesson_progress.nil? || false == @current_lesson_progress[:enabled]
      redirect_to @course_structure[:course_url]
      return
    end

    lesson_progress = helper_methods.get_js_lesson_data(@user_progress, lesson: true, app: @course_app)

    @slider_carousel = helper_methods.format_slider_items(lesson_progress)

    # Javascript data
    # user_progress_metadata = JSON.parse(@user_progress[:metadata], { symbolize_names: true })

    gon.course_app = @course_app
    gon.course_structure = @course_structure
    gon.lesson_structure = @lesson_structure
    gon.lesson_progress = lesson_progress
    gon.click_here = @user_progress[:click_here]
    gon.click_here_menu = @user_progress[:click_here_menu]
    gon.user_progress = helper_methods.get_js_lesson_data(@user_progress)

    render("lessons/lesson")
  end
end
