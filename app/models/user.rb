class User < ActiveRecord::Base
	before_save { 
		self.username = username.downcase
		self.first_name = first_name.capitalize
		self.middle_name = middle_name.capitalize
		self.surnames = surnames.capitalize
		self.email = email.downcase
	}

	validates :username, presence: true, length: { maximum: 50 }, uniqueness: true
	validates :first_name, :surnames, presence: true, length: { maximum: 50 }
	validates :personal_id, presence: true, numericality: true
	validates :gender, presence: true, inclusion: %w(M F), length: { maximum: 1 }
	validates :telephone, :mobile_phone, length: { maximum: 20 }
	validates :role, presence: true, numericality: { only_integer: true }
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, length: { maximum: 255 },
					  format: { with: VALID_EMAIL_REGEX }
	#aplhanumeric characters and select special characters.
	#The password also can not start with a digit, underscore or special 
	#character and must contain at least one digit.
	has_secure_password
	VALID_PASSWORD_REGEX = /\A(?=[^\d_].*?\d)\w(\w|[.!@#\$%]){5,20}/i
	validates :password, length: { minimum: 6 },
			  			 format: { with: VALID_PASSWORD_REGEX }

	def self.roles
		{ sys_admin: 0, admin: 1, teacher: 2, student: 3 }
	end
end