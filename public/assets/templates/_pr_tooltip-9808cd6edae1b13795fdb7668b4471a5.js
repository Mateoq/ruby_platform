prTemplates.directive('prTooltip', [function () {
	return {
		restrict: 'A',
		scope: {
			options: '=prTooltip'
		},
		link: function(scope, element, attrs) {
			var $element = angular.element(element),
				options = {
					html: true,
					template: '<div class="tooltip top pr-tooltip" role="tooltip"><div class="tooltip-arrow pr-tooltip-arrow"></div><div class="tooltip-inner pr-tooltip-inner"></div></div>'
				};

			if (scope.options.hasOwnProperty('image')) {
				var image = '<img src="' + scope.$root.resources + scope.options.image + '" alt="' + scope.options.alt + '" />';
				options.title = image;
			}

			angular.extend(options, scope.options);

			$element.tooltip(options);
		}
	};
}])
;
