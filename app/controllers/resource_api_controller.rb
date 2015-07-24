class ResourceApiController < ApplicationController
  # respond_to :pdf, :html, :json

  def get_lesson_pdf
    course_class = params[:class]
    course_grade = params[:grade]
    course_lesson = params[:lesson]

    file_path = ActionController::Base.helpers.asset_path("pdf/#{course_grade}/#{course_class}/#{course_lesson}.pdf")

    render json: { path: file_path }
    nil

    # respond_to do |format|
    #     format.json { render json: { path: file_path } }
    # end
  end
end
