prTemplates.directive('dragDrop', function () {
	return {
		templateUrl: 'canvas_template.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {

		}
	};
});