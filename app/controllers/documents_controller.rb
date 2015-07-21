class DocumentsController < ApplicationController
	include Downloadable

	skip_before_filter :verify_authenticity_token, only: :upload

	def download
		filepath = "#{Rails.root}/app/assets/data/docs/#{params[:grade]}/#{params[:class_name]}/#{params[:course]}/#{params[:file_name]}"
		file_name = params[:file_name]

		unless File.exist?(filepath) && File.readable?(filepath)
			redirect_to :back, notice: 'Unfortunately the requested file is not readable or cannot be located.'
			return
		end

		send_file(filepath, file_name: file_name + ".docx",
			type: :docx,
			x_sendfile: true
		)
	end

	def upload
		dir = "#{User.profile_url}#{User.roles.key(current_user[:role].to_i)}/#{current_user[:username]}"
		file_instance = params[:file]
		filename = "#{params[:course_name]}_#{file_instance.original_filename}"
		# Save file to directory previously created if not exists
		if file_instance && !File.file?("#{dir}/#{filename}")
			File.open("#{dir}/#{filename}", "w+") do |file|
				file.puts(File.read(file_instance.tempfile))
			end

			return render json: { message: "File uploaded" }.to_json, status: :ok
		end

		return render json: { message: "File already exist." }.to_json, status: :unprocessable_entity
	end
end