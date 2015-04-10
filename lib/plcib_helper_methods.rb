class PlcibHelperMethods

	# def save_image(file_instance, path)
	# 	byebug
	# 	Thread.new do
	# 		FileUtils.mv(file_instance.tempfile, path)
	# 	end
	# end

	# Order a user data to print in the profile view
	def get_user_profile_data (username)
		user_data = Rails.cache.fetch("user_data_#{username}", expires_in: 24.hours) do |variable|
			User.find_by(username: username)
		end

		user = {
			username: username,
			fullname: "#{user_data[:first_name]}#{" " + user_data[:middle_name] if user_data[:middle_name]} #{user_data[:surnames]}",
			role: User.literal_roles[user_data[:role]],
			extra_data: [
				{
					"Identificación" => {
						lclass: "a",
						value: user_data[:personal_id]
					},
					"Email" => {
						lclass: "b",
						value: user_data[:email]
					},
					"Género" => {
						lclass: "c",
						value: User.genders[user_data[:gender]]
					}
				}
			]
		}

		

		user[:image] = (user_data[:image]) ? create_profile_image_path(user_data[:role], user_data[:username], user_data[:image]) : "common/user_placeholder.png"
		user[:extra_data] << { 
			"Teléfono" => {
				lclass: "a",
				value: (user_data[:telephone].empty?) ? "-" : user_data[:telephone]
			}
		}
		user[:extra_data][1]["Celular"] = {
			lclass: "b",
			value: (user_data[:mobile_phone].empty?) ? "-" : user_data[:mobile_phone]
		}
		if user_data[:role] == User.roles[:estudent]
			user_metadata = JSON.parse(user_data[:metadata], { symbolize_names: true })
			user[:extra_data][1]["Grado"] = {
				lclass: "c",
				value: user_metadata[:grade]
			}
			user[:add_courses] = true
		end

		return user
	end

	# Generate user profile image path 
	def create_profile_image_path (role, username, image_name)
		"/assets/data/users/#{User.roles.key(role.to_i)}/#{username}/#{image_name}"
	end

	# Notification messages
	def self.messages
		{
			new_user: "!El usuario ha sido creado satisfactoriamente¡",
			edit_user: "!El usuario ha sido editado satisfactoriamente¡",
			login_user: "!Bienvenido(a)¡"
		}
	end
end