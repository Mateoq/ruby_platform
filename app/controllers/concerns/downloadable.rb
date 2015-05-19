module Downloadable extend ActiveSupport::Concern
	def send_to_user(args = {})
		file = args[:file_path]

		unless File.exist?(file) && File.readable?(file)
			redirect_to :back, notice: 'Unfortunately the requested file is not readable or cannot be located.'
			return
		end

		 return send_data(file, file_name: args[:file_name],
			type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			stream: true,
			x_sendfile: true
		)
	end
end