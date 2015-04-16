module SessionsHelper

	# Logs in the giving user.
	def log_in (user)
		# user_metadata = JSON.parse(user[:metadata], { symbolize_names: true }) if user[:metadata]

		session[:username] = user[:username]
		session[:user_token] = user[:token]
		# session[:full_name] = "#{user[:first_name]}#{" " + user[:middle_name] if user[:middle_name]} #{user[:surnames]}"
		# session[:email] = user[:email]
		# session[:grade] = user_metadata[:grade] if user_metadata && user_metadata[:grade]
		# session[:role] = user[:role]
		# session[:personal_data] = {
		# 	personal_id: user[:personal_id],
		# 	gender: user[:gender]
		# }
		# session[:personal_data][:telephone] = user[:telephone] if user[:telephone]
		# session[:personal_data][:mobile_phone] = user[:mobile_phone] if user[:mobile_phone]
	end

	# Return the current user.
	def current_user
		@current_user ||= User.find_by(username: session[:username])
	end

	# Check if user is logged in.
	def logged_in?
		!current_user.nil?	
	end

	# Logs out the current user.
	def log_out
		session.delete(:username)
		session.delete(:token)
    	@current_user = nil
	end
end
