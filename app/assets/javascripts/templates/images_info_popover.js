prTemplates.directive('imagesInfoPopover', function () {
	return {
		templateUrl: 'images_info_popover.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			console.log(scope);
		}
	};
});