class UserProgressController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => :click_here_progress

	def click_here_progress
		params
		render json: {response: "This is my response"}
	end
end