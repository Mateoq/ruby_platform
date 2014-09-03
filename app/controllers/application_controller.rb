class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	render layout: "layouts/index_layout"
  end

  def introduction
  	@course_class = params[:class]
  	@course_grade = params[:grade] 
    @course_grade_number = Course.grades[@course_grade.to_sym]
    @course_class_name = Course.classes[@course_class.to_sym]
  	@course_app = "#{@course_class}0#{@course_grade_number}"
  	byebug
  	helper_methods = PrHelperMethods.new()
  	@course_structure = helper_methods.create_course_structure(@course_class, @course_grade_number)
    @course_structure[:pr_type] = 0
    @course_credits = @course_structure[:course_credits]
  	render("lessons/#{@course_class}/#{@course_grade}")
  end

  def lessons
  	
  end
end
