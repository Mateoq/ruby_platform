class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	render layout: "layouts/index_layout"
  end

  def introduction
  	@courseClass = params[:class]
  	@courseGrade = params[:grade] 
  	@courseApp = "mat04"
  	byebug
  	course = Course.new()
  	courseStructure = course.intro_structure(@courseClass, Course.grades[@courseGrade.to_sym])
  	render("lessons/mat/cuarto")
  end

  def lessons
  	
  end
end
