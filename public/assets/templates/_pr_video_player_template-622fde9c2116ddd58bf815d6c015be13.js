prTemplates.directive('prVideoPlayer', ['$sce', '$timeout', function($sce, $timeout){
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			options: '=options'
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: 'pr',
		templateUrl: '_pr_video_player_template.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs, controller) {

			scope.onPlayerReady = function (API) {
				scope.$root.videos[scope.options.contentMainClass] = element.find('video')[0];
				// console.log(scope.$root.videos);

				if (scope.options.autoPlay) {
					$timeout(function () {
						scope.$root.videos[scope.options.contentMainClass].play();
					}, 2000);
				}
			};

			scope.options.videoSrc = $sce.trustAsResourceUrl(scope.$root.resources + scope.options.src);

			scope.config = {
				autoHide: false,
				autoPlay: angular.isDefined(scope.options.autoPlay),
				sources: [
					{ src: scope.options.videoSrc, type: 'video/webm' }
				],
				theme: {
					url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
				}
				// plugins: {
				// 	poster: "http://www.videogular.com/assets/images/videogular.png"
				// }
			};
		}
	};
}]);
