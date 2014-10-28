prTemplates.directive('dragDrop', function () {
	return {
		templateUrl: 'templates/canvas_template.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function postLink(scope, element, attrs) {

		}
	};
});