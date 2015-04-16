class SessionsController < ApplicationController
	layout :determine_layout
	prepend_view_path "app/views/platform"
	skip_before_filter :verify_authenticity_token, :only => :create

	def new
		if logged_in?
			redirect_to user_path(session[:username]) 
			return
		end
		@header_title = "Login"

		gon.method_type = "POST"
		gon.url = login_path

		session[:notify] = true
	end

	def create
		byebug
		user = User.find_by(username: params[:session][:username].downcase)

		errors = {}

		errors[:username] = ["Usuario incorrecto."] unless user
		errors[:password] = ["Contraseña incorrecta."] unless user && user.authenticate(params[:session][:password])

		if errors.empty?
			# Log the user in and redirect to the user's show page.
			log_in(user)
			render json: { route: user_path(user[:username]) + "?type=login_user" }
		else
			# Create an error message.
			render json: errors.to_json, status: :unprocessable_entity
		end
	end

	def destroy
		log_out
		redirect_to login_path
	end

	private
		def determine_layout
			"platform_layout"
		end
end
