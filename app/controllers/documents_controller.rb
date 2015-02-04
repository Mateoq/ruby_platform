class DocumentsController < ApplicationController
	include Downloadable

	def download
		byebug
		filepath = "#{Rails.root}/data/docs/#{params[:filepath]}"
		file_name = params[:file_name]

		# unless File.exist?(filepath) && File.readable?(filepath)
		# 	redirect_to :back, notice: 'Unfortunately the requested file is not readable or cannot be located.'
		# 	return
		# end

		send_file(filepath, file_name: file_name + ".docx",
			type: :docx,
			x_sendfile: true
		)
	end

	def upload
	end
end
