prTemplates.directive('animationsSlide', ['$timeout', '$window', 'updateProgressService', function ($timeout, $window, updateProgressService) {
	return {
		templateUrl: 'animations_slide.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			scope.options.templateClass = 'animations-slide';

			var totalItems = 0;
			scope.options.progressItems = 0;

			angular.forEach(scope.options.slide.items, function(value, key){
				var mainClass = 'item-' + totalItems;
				scope.options.slide.items[key].contentMainClass = mainClass;
				var event = function (obj, $event) {
					if (scope.options.slide.items[key].done || scope.options.done) { return; }
					// if (obj.hasOwnProperty('audio')) {
					// 	if (scope.audio) {
					// 		scope.audio.stop();
					// 	}

					// 	scope.audio = ngAudio.play(scope.$root.resources + obj.audio);
					// }

					var $target = angular.element($event.currentTarget),
						content = $target.data('target'),
						$animation = angular.element('.' + content + ' .anslide-animation');
					
					if (scope.options.animation && !scope.options.done) {
						$animation.gifplayer();
						angular.element('.' + content + ' .play-gif').click();
					}

					scope.options.progressItems++;
					scope.options.slide.items[key].done = true;

					if (scope.options.progressItems === totalItems) {
						updateProgressService(
			                gon.course_structure.class_name,
			                gon.course_structure.grade,
			                gon.course_structure.lesson_guide,
			                gon.course_structure.lesson_num
			            );

			            updateProgressService.update(gon.lesson_structure[scope.$root.routeIndex].url_name, scope.$root.nextItem).then(function (data) {
			            	// TODO: congrats message
			            	scope.$root.lessonProgress = data.lesson_progress[gon.course_app];
			            	scope.$root.isNextEnabled = true;
			            });
					}
				};

				if (scope.options.animation && !scope.options.done) {
					// setTimeout(function () {
					// 	console.log(angular.element('.' + mainClass + ' .anslide-animation'));
					// 	angular.element('.' + mainClass + ' .anslide-animation').gifplayer();
					// }, 1000);
				}

				if (scope.options.slide.items[key].bodyEvent) {
					scope.options.slide.items[key].onAnimationClick = event;
				} else {
					scope.options.slide.items[key].onHeaderClick = event;
				}

				totalItems++;

				if (scope.options.done || scope.options.slide.items[key].done) {
					scope.options.slide.items[key].done = true;
					if (scope.options.animation) {
						value.main.image.src = value.main.image.animation;
					}
					
					// $timeout(function () {
					// 	var content = scope.options.slide.items[key].contentMainClass,
					// 		$animation = angular.element('.' + content + ' .anslide-animation');

					// 	$animation.click();
					// }, 900);
				}
			});
		}
	};
}])
;
