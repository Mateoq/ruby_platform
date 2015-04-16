/*****************************************************
 *
 *	In this file there're going to be some utility 
 *	methods.
 *
 *****************************************************/
var Utilities = function () {};

//=================================================
//	Scroll function
//=================================================
Utilities.prototype.scrollWindow = function (target) {
	$('.ui-page').stop().animate({
      	'scrollTop': target.offset().top
    }, 1000, 'swing');
    return true;
};

//=================================================
//	Load notification
//=================================================

Utilities.prototype.loadNotification = function ($element, type, content, fields) {
	var $container = $element.find('.plcib-notify-container');
	$container.empty();

	if ('undefined' != typeof content) {
		$container.append(content);
	}

	$element.removeClass('bounceOut').addClass('show bounceIn ' + type);

	if ('error' === type && 'undefined' != typeof fields) {
		$.each(fields, function(index, f) {
	console.log(f);
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
};

//=================================================
//	General notification
//=================================================
Utilities.prototype.generateGeneralNotify = function (data) {
	var content = '<div class="plcib-notify-message-container';

	if (data.short) 
		content += ' short-message';
	content += '">';

	if (data.message)
		content += '<p class="plcib-notify-message">' + data.message + '</p>';

	content += '</div>';

	this.loadNotification($('.plcib-notify-box'), data.type_message, content);
};

// (function () {
// )();