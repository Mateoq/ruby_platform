// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
'use strict';
$(document).on('load', function() {
	$('body').fadeOut(100);
});

$(function() {
//=================================================================================
//	Platform
//=================================================================================

// Notifications
function loadNotification ($element, type, content) {
	if ('undefined' != typeof content) {
		$element.append(content);
	}

	$element.addClass('bounceIn ' + type);

	var $close = $element.find('.close-cross');

	$close.on('click', function(event) {
		event.preventDefault();
		
		$element.addClass('bounceOut').removeClass('bounceIn');
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
$('#new_user').on('submit', function(event) {
	event.preventDefault();
	
	var data = new FormData(),
		array = $(this).serializeArray();

	$.each(array, function(index, val) {
		data.append(val.name, val.value);
	});

	var files = $('#user_image')[0].files[0];

	if ('undefined' != typeof files) {
		data.append('image', files)
	}
	console.log(data);

	$.ajax({
		url: Routes.users_path(),
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false,
		success: function (data, textStatus, jqXHR) {
			console.log(arguments);
		}
	});
	
});

});