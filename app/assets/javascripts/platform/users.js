// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// 'use strict';
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

// Notifications
function loadNotification ($element, type, content, fields) {
	var $container = $element.find('.plcib-notify-container');
	$container.empty();

	if ('undefined' != typeof content) {
		$container.append(content);
	}

	$element.removeClass('bounceOut').addClass('show bounceIn ' + type);

	if ('error' === type && 'undefined' != typeof fields) {
		$.each(fields, function(index, f) {
			$('#' + f + '_row').addClass('field-with-errors');
		});
	}

	var $close = $element.find('.close-cross');

	$close.on('click', function(event) {
		event.preventDefault();
		
		$element.addClass('bounceOut').removeClass('bounceIn');

		setTimeout(function () {
			$element.removeClass('show');
		}, 600);
	});
}

// On leave page animation
// $(window).on('unload', function(event) {
// 	$('body').fadeout(400);
// });

// On enter page animation
setTimeout(function () {
	$('body').fadeIn(400);
}, 200);

$(window).on('navigate', function(event, data) {
	console.log(data);
});

// General notification
setTimeout(function () {
	if ('undefined' === typeof gon) return;
	if (gon.notify) {
		var content = '<div class="plcib-notify-message-container';

		if (gon.short) 
			content += ' short-message';
		content += '">';

		if (gon.message)
			content += '<p class="plcib-notify-message">' + gon.message + '</p>';

		content += '</div>';

		loadNotification($('.plcib-notify-box'), gon.type_message, content);
	}
}, 1400);

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
	
	var data = new FormData(),
		array = $(this).serializeArray(),
		files = $('#user_image')[0].files[0],
		content = null, type = null,
		$notifyBox = $('.plcib-notify-box'),
		$buttons = $('.plcib-form-button');

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

	if ('new_user' === gon.type) {
		method = 'POST';
		url = Routes.users_path();
	} else {
		method = 'PATCH';
		url = Routes.user_path(username);
	}

	$.mobile.loading('show', {
            text: 'Cargando...',
            textVisible: true,
            theme: $.mobile.loader.prototype.options.theme,
            textonly: false,
            html: ''
    });

	$.ajax({
		url: url,
		type: method,
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
			$.mobile.navigate(Routes.user_path(data.username) + '?notify=true&type=' + gon.type);
			$.mobile.loading('hide');
		},
		error: function (data, textStatus, jqXHR) {
			var errors = $.parseJSON(data.responseText),
				fields = [];
			console.log(errors);

			content = '<ul class="notify-error-list">';

			if (null === errors) { return; }

			$.each(errors, function(index, val) {
				fields.push(index);
				$.each(val, function(i, v) {
					content += '<li class="notify-error-item">' + v + '</li>';
				});
			});

			content += '</ul>';

			loadNotification($notifyBox, 'error', content, fields);

			$buttons.each(function(index, el) {
				if ('input' === el.localName)
					$(el).parent('div').removeClass('ui-state-disabled');
				
				$(el).removeAttr('disabled', 'disabled');
			});
			$.mobile.loading('hide');
		}
	});

	
});

});