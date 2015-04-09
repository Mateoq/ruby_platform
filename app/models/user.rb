class User < ActiveRecord::Base
	before_save { 
		self.username = username.downcase
		self.first_name = first_name.capitalize
		self.middle_name = middle_name.capitalize
		self.surnames = surnames.capitalize
		self.email = email.downcase
	}

	validates :username, 
				presence: { message: "Falta un nombre de usuario." },
				length: { maximum: 50, message: "El nombre de usuario esta largo." },
				uniqueness: { message: "El nombre de usuario ya existe." }
	validates :first_name, :surnames,
				presence: { message: "Debe ingresar nombre y apellidos." },
				length: { maximum: 50, message: "El nombre o los appellidos están largos." }
	validates :personal_id,
				presence: { message: "Falta el número de identificación." },
				numericality: { message: "El numero de identificación no tiene letras" }
	validates :gender, presence: true, inclusion: %w(M F), length: { maximum: 1 }
	validates :telephone, :mobile_phone,
				length: { maximum: 20, message: "El teléfono o el celular están muy largos." }
	validates :role, presence: true, numericality: { only_integer: true }
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email,
				presence: { message: "Falta el email." },
				length: { maximum: 255, message: "El email esta muy argo" },
				format: { with: VALID_EMAIL_REGEX, message: "El email no es valido." }
	#aplhanumeric characters and select special characters.
	#The password also can not start with a digit, underscore or special 
	#character and must contain at least one digit.
	has_secure_password
	VALID_PASSWORD_REGEX = /\A(?=[^\d_].*?\d)\w(\w|[.!@#\$%]){5,20}/i
	validates :password,
				length: { minimum: 6, message: "La contraseña tiene mínimo 6 caracteres." },
			  	format: { with: VALID_PASSWORD_REGEX, message: "La contraseña debe tener una letra minúscula y mayúscula, un dígito y un carater especial." }

	def self.roles
		{ sys_admin: 0, admin: 1, teacher: 2, student: 3 }
	end

	def self.literal_roles
		[ "Administrador de Sistema", "Administrador", "Profesor", "Estudiante" ] 
	end

	def self.genders
		{ "M" => "Hombre", "F" => "Mujer" }
	end

	def self.profile_url
		"#{Rails.root}/public/assets/data/users/"
	end
end