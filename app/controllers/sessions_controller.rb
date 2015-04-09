class SessionsController < ApplicationController
	layout :determine_layout
	prepend_view_path "app/views/platform"

	def new
	end

	private
		def determine_layout
			"platform_layout"
		end
end
