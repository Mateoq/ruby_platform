class SessionsController < ApplicationController
  layout :determine_layout
  prepend_view_path 'app/views/platform'
  skip_before_action :verify_authenticity_token, only: :create

  def new
    if logged_in?
      redirect_to root_path
      return
    end
    @header_title = 'Login'

    gon.method_type = 'POST'
    gon.url = login_path
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)

    errors = {}

    errors[:username] = ['Usuario incorrecto.'] unless user
    errors[:password] = ['Contraseña incorrecta.'] unless user && user.authenticate(params[:session][:password])

    if errors.empty?
      # Log the user in and redirect to the user's show page.
      log_in(user)
      render json: { route: root_path + '?type=login_user' }
    else
      # Create an error message.
      render json: errors.to_json, status: :unprocessable_entity
    end

    session[:notify] = true
  end

  def destroy
    log_out
    redirect_to login_path
  end

  private

  def determine_layout
    'platform_layout'
    end
end
