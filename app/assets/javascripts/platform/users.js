// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
'use strict';
var utilities = new Utilities();

$(document).on('load', function() {
	$('body').fadeOut(100);
});

$(function() {

setTimeout(function () {
	$('.plcib-main-container').css('min-height', $(document).height() - 60 );
}, 400);

$( "[data-role='header'], [data-role='footer']" ).toolbar({ theme: 'a' });

//=================================================================================
//	Platform
//=================================================================================

// On leave page animation
// $(window).on('unload', function(event) {
// 	$('body').fadeout(400);
// });

// On enter page animation
setTimeout(function () {
	$('body').fadeIn(400);
}, 200);

$(window).on('navigate', function(event, data) {
	console.log(arguments);
});

// General notification
setTimeout(function () {
	if ('undefined' === typeof gon) return;
	if (gon.notify) {
		utilities.generateGeneralNotify(gon);
	}
}, 2000);

//=================================================================================
//	Signup
//=================================================================================

$('.plcib-form-row-grades').fadeOut(400);
$('#user_role').on('change', function(event) {
	var selected = $(this).find('option:selected').attr('value'),
		$gradeRow = $('.plcib-form-row-grades');

	if ('3' === selected) {
		$gradeRow.fadeIn(400);
	} else {
		$gradeRow.fadeOut(400);
	}
});

// User Image Preview
$('#user_image').on('change', function(event) {
	var file = this.files[0],
		reader = new FileReader(),
		$imagePreview = $('.user-image-preview');

	if ('undefined' === typeof file) {
		$imagePreview.fadeOut(200, function() {	
			$imagePreview.error().fadeIn(200);
		});
		return;
	}

	reader.onload = function (event) {
		$imagePreview.fadeOut(200, function() {
			$(this).attr('src', event.target.result).fadeIn(200);
		});	
	};
	reader.readAsDataURL(file);

});

// Notification
$('#submit_form').on('submit', function(event) {
	event.preventDefault();
	if (!gon) return;
	
	var data = new FormData(),
		array = $(this).serializeArray(),
		content = null, type = null,
		$notifyBox = $('.plcib-notify-box'),
		$buttons = $('.plcib-form-button');

	if ('new_user' === gon.type) var files = $('#user_image')[0].files[0];

	$('.plcib-form-row').removeClass('field-with-errors');

	$buttons.each(function(index, el) {
		if ('input' === el.localName)
			$(el).parent('div').addClass('ui-state-disabled');

		$(el).attr('disabled', 'disabled');
	});

	$.each(array, function(index, val) {
		data.append(val.name, val.value);
	});

	if ('undefined' != typeof files) {
		data.append('image', files)
	}

	var method, url,
		username = $('#user_username').val();

	// if ('new_user' === gon.type) {
	// 	method = 'POST';
	// 	url = Routes.users_path();
	// } else {
	// 	method = 'PATCH';
	// 	url = Routes.user_path(username);
	// }

	utilities.startLoader();

	$.ajax({
		url: gon.url,
		type: gon.method_type,
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false,
		success: function (data, textStatus, jqXHR) {
			// content = '<h2 class="notify-congrats-text">' + data.message +'</h2>';

			// loadNotification($notifyBox, 'success', content);

			// $buttons.removeAttr('disabled');
			// $buttons.removeClass('ui-state-disabled');
			
			utilities.stopLoader();
			// $.mobile.navigate(data.route, {
			// 	notify: 'asd'
			// });
			if (data.route) {
				$('body').fadeOut(400);
				window.location.assign(data.route);
			}

			if (data.message) {
				data.short = true;
				utilities.generateGeneralNotify(data);

				$buttons.each(function(index, el) {
					if ('input' === el.localName)
						$(el).parent('div').removeClass('ui-state-disabled');
					
					$(el).removeAttr('disabled', 'disabled');
				});
			}

			if ('course_registration' === gon.type) {
				var $selectCourse = $('#course_registration_course');
				$selectCourse.find('option[value="' + data.course +'"]').remove();

				$selectCourse.selectmenu("refresh");
			}
		},
		error: function (data, textStatus, jqXHR) {
			var errors = $.parseJSON(data.responseText),
				fields = [];

			content = '<ul class="notify-error-list">';

			if (null === errors) { return; }

			if (1 === errors.length) {
				content += '<li class="notify-error-item">' + errors[0] + '</li>';
			} else {
				$.each(errors, function(index, val) {
					fields.push(index);
					$.each(val, function(i, v) {
						content += '<li class="notify-error-item">' + v + '</li>';
					});
				});
			}

			content += '</ul>';

			utilities.loadNotification($notifyBox, 'error', content, fields);

			$buttons.each(function(index, el) {
				if ('input' === el.localName)
					$(el).parent('div').removeClass('ui-state-disabled');
				
				$(el).removeAttr('disabled', 'disabled');
			});
			$.mobile.loading('hide');
		}
	});

	
});

//=================================================================================
//	Profile
//=================================================================================

$('.plcib-register-course-button').on('click', function(event) {
	event.preventDefault();
	
	var $form = $('.plcib-course-registration-form');

	$form.css('display', 'block');

	$form.addClass('bounceIn');

	utilities.scrollWindow($form);
});

$('#course_registration_grade').on('change', function(event) {
	utilities.startLoader();
	$.get(Routes.update_courses_path(), { grade: $(this).val(), username: gon.username }, function(data) {
		utilities.stopLoader();
		console.log(data);
		var options = '';

		$.each(data, function(index, option) {
			options += '<option value="' + option.value +'">' + option.name + '</option>'
		});

		$('#course_registration_course').empty().append(options).selectmenu("refresh");
	});
});

});