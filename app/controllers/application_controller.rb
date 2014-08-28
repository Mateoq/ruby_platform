class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	render layout: "layouts/index_layout"
  end

  def introduction
  	@courseClass = "mat" 
  	@courseApp = "mat04"
  	print(params)
  	render("lessons/mat/01")
  end

  def lessons
  	
  end
end
