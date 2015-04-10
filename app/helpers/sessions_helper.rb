module SessionsHelper

	# Logs in the giving user
	def log_in (user)
		user_metadata = JSON.parse(user[:metadata], { symbolize_names: true }) if user[:metadata]

		session[:username] = user[:username]
		session[:full_name] = "#{user[:first_name]}#{" " + user[:middle_name] if user[:middle_name]} #{user[:surnames]}"
		session[:email] = user[:email]
		session[:grade] = user_metadata[:grade] if user_metadata && user_metadata[:grade]
		session[:role] = user[:role]
		session[:personal_data] = {
			personal_id: user[:personal_id],
			gender: user[:gender]
		}
		session[:personal_data][:telephone] = user[:telephone] if user[:telephone]
		session[:personal_data][:mobile_phone] = user[:mobile_phone] if user[:mobile_phone]
	end

end
