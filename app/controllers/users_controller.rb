class UsersController < ApplicationController
	layout :determine_layout
	before_action :init

	def init
		session[:init] = true
		@grades = []

		Course.grades().each do |k, v|
			@grades.push([k.capitalize, k])
		end
	end

	def new
		byebug
		@user = User.new
	end

	def create
		byebug
		
		user_data = user_params
		user_data[:metadata] = (user_data[:role] == User.roles[:student]) ? { grade: user_data[:metadata] } : false

		user_data.delete(:metadata) unless user_data[:metadata]

		@user = User.new(user_data)

		if @user.save

		else
			render 'new'
		end
	end

	private
		def determine_layout
			"platform_layout"
		end

		def user_params
	      	params.require(:user).permit(:username, :first_name, :middle_name, :surnames, :personal_id, :gender, :email,
	       		:telephone, :mobile_phone, :role, :metadata, :image, :password, :password_confirmation)
	    end
end
