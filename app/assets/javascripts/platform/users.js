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
$(window).on('unload', function(event) {
	$('body').fadeout(400);
});

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

// Notification
// $('#new_user').on('submit', function(event) {
// 	event.preventDefault();
	
// 	console.log(event);
// });

});