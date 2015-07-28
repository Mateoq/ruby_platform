class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include ApplicationHelper
  include SessionsHelper

  protect_from_forgery with: :exception
  before_action :init, only: [:introduction, :lessons]

  def authenticate_user
    unless logged_in?
      yield
    end
  end

  def init
    session[:init] = true
    gon.action_name = params[:action]

    authenticate_user do 
      redirect_to login_path 
      return
    end

    @helper_methods = PrHelperMethods.new(session, current_user)
  end

  def init_platform
    @plcib_helper_methods = PlcibHelperMethods.new(session, current_user)
  end

  def index
    # Injected Session
    # if session[:user_token].nil?
    #   session_token = "mjquintero@ucn.edu.co" + "lZhnQJdJf65HaNqPmDLFbQ"
    #   session[:user_token] = Digest::SHA1.hexdigest(session_token)
    #   session[:user_id] = "mjquintero@ucn.edu.co"
    #   session[:full_name] = "Mateo de Jesus Quintero Jimenez"
    #   session[:user_grade] = "cuarto"
    #   session[:guide] = 4
    #   session[:lesson] = 2
    #   session[:permissions] = 2
    # end

    # Initialize grades schemes
    # stages = [50, 45, 40, 35, 30]

    # stages.each_with_index do |s, i|
    #     stage = {
    #         name: "Instancia #{i + 1}",
    #         stage: i + 1
    #     }

    #     scheme = {}

    #     (10..s).each do |n|
    #         key = ((n / s.to_f).round(3) * 100).round(1)
    #         value = (n / 10.to_f).round(1)

    #         scheme[key.to_s.to_sym] = value
    #     end

    #     stage[:scheme] = scheme.to_json

    #     GradesScheme.create(stage)
    # end

    # render layout: "layouts/platform_layout"
  end

  def introduction
  	@course_class = params[:class]
  	@course_grade = params[:grade]
    @course_grade_number = Course.grades[@course_grade.to_sym]
    @course_class_name = Course.classes[@course_class.to_sym]

    # Course AngularJs App
    @course_app = "#{@course_class}0#{@course_grade_number}"

    @course_structure = @helper_methods.create_course_structure(@course_class, @course_grade_number)
    @course_structure[:pr_type] = 0
    @user_progress = @helper_methods.restore_course(
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

    gon.user_progress = @helper_methods.get_js_lesson_data(@user_progress)

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

    @course_structure = @helper_methods.create_course_structure(@course_class, @course_grade_number, @course_lesson)

    unless @course_structure
      Rails.cache.delete("#{course_class}-#{course_grade_number}-#{course_lesson}")
      redirect_to "/curso/#{@course_class}/#{@course_grade}"
      return
    end

    @course_structure[:pr_type] = 2

    # Initialize lesson
    @lesson_structure = @helper_methods.init_lesson(@course_structure, @course_lesson)

    @user_progress = @helper_methods.restore_course(
      @course_class,
      @course_grade,
      course_app: @course_app,
      structure: @course_structure,
      lesson: true
    )

    unless @user_progress
      Rails.cache.clear
      redirect_to(courses_path(@course_class, @course_grade))
      return
    end

    if params[:path]
      current_activity = @user_progress[:lesson_progress][@course_app.to_sym][params[:path].to_sym]

      unless current_activity[:enabled]
        redirect_to(lessons_path(@course_class, @course_grade, @course_lesson))
        return
      end
    end

    # Check current lesson progress
    @current_lesson_progress = Rails.cache.fetch("#{session[:user_token]}_lesson_#{@course_class}_0#{@course_grade_number}_0#{@course_structure[:lesson_guide]}_0#{@course_structure[:lesson_num]}")

    if @current_lesson_progress.nil? || false == @current_lesson_progress[:enabled]
      redirect_to @course_structure[:course_url]
      return
    end

    lesson_progress = @helper_methods.get_js_lesson_data(@user_progress, lesson: true, app: @course_app)

    @slider_carousel = @helper_methods.format_slider_items(lesson_progress)

    # Grades schemes data
    grades_schemes = Rails.cache.fetch('grades_schemes', expires_in: 48.hours) do
      GradesScheme.all.order(:stage)
    end

    # Javascript data
    # user_progress_metadata = JSON.parse(@user_progress[:metadata], { symbolize_names: true })

    gon.course_app = @course_app
    gon.course_structure = @course_structure
    gon.lesson_structure = @lesson_structure
    gon.lesson_progress = lesson_progress
    gon.click_here = @user_progress[:click_here]
    gon.click_here_menu = @user_progress[:click_here_menu]
    gon.user_progress = @helper_methods.get_js_lesson_data(@user_progress)
    # gon.schemes = grades_schemes

    render('lessons/lesson')
  end
end
