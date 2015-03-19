// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
'use strict';
$(document).on('load', function() {
	$('body').fadeOut(100);
});

$(function() {
//=================================================================================
//	Signup
//=================================================================================
setTimeout(function () {
	$('body').fadeIn(400);
}, 200);

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

});