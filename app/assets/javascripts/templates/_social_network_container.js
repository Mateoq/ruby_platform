prTemplates.directive('socialNetworkContainer', function () {
	return {
		templateUrl: 'templates/_social_network_container.html',
		transclude: true,
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			scope.options.title = 'Redes sociales';
			scope.options.hasInstruction = false;
			scope.options.contWidth = 500;
		}
	};
});