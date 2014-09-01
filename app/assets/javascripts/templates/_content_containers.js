prTemplates.directive('contentContainers', function () {
	return {
		templateUrl: '/templates/_content_containers.html',
		transclude: true,
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			var $header = angular.element('.pr-content-header'),
				$instruction = angular.element('.pr-content-instruction'),
				$main = angular.element('.pr-left-container'),
				$title = $header.find('.pr-content-title'),
				contWidth = scope.options.contWidth;

			$instruction.css('width', contWidth + 'px');
			$main.css('width', contWidth + 'px');
			$title.css('width', contWidth - 80 + 'px');

			if (scope.options.hasInstruction) {
				$main.css('height', '200px');
				$main.find('.pr-content-main').css('height', '144px');
			}
		}
	};
});