prTemplates.directive('prModal', ['ngAudio', function (ngAudio) {
	return {
		templateUrl: '_pr_modal.html',
		transclude: true,
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, elemente, attrs, controller, transclude) {
			console.log(scope);
			scope.closeMessage = function () {
				scope.options.active = false;
				scope.$root.activeModal = false;	
			};

			scope.playAudio = function () {
				scope.$root.resetAudio();
            	scope.$root.audio = ngAudio.play(scope.$root.resources + scope.options.audio);
			};

			transclude(scope, function(clone, scope) {
            	angular.element('.pr-modal-content').prepend(clone);
			});
		}
	};
}]);
