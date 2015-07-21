prTemplates.directive('animationContentItems', ['updateProgressService', '$timeout', function (updateProgressService, $timeout) {
	return {
		templateUrl: 'animation_content_items.html',
		restrict: 'E',
		transclude: true,
		scope: {
			options: '=options'
		},
		link: function postLink(scope, iElement, iAttrs) {
			scope.options.templateClass = 'animation-content-items';

			var itemsCount = 0,
				itemsProgress = 0;

			angular.forEach(scope.options.items, function(value, key){
				angular.forEach(value, function(item, k){
					itemsCount++;
					scope.options.items[key][k].contentMainClass = "item-" + itemsCount;

					if (item.event) {
						scope.hasEvent = true;
						var onAnimation = function (item, $event) {
							if (scope.options.items[key][k].done) { return; }

							var $target = angular.element($event.currentTarget),
								$animation = $target.find('.pr-content-image');

							$animation.gifplayer();
							$target.find('.play-gif').click();
							
							itemsProgress++;

							scope.options.items[key][k].done = true;

							if (itemsProgress === itemsCount) {
								localUpdateProgress();
							}
						};
						if (scope.options.items[key][k].bodyEvent) {
							scope.options.items[key][k].onbodyContentClick = onAnimation;
						} else {
							scope.options.items[key][k].onHeaderClick = onAnimation;
						}
					}

					if (scope.options.done) {
						scope.options.items[key][k].parentDone = true;
						scope.options.items[key][k].done = true;
					}
				});
			});

			$timeout(function () {
				if (!scope.options.done && !scope.hasEvent) {
					localUpdateProgress();
				}
			}, 5000);

			$timeout(function () {
				if (scope.hasEvent) Gifffer();
			}, 600);

			function localUpdateProgress () {
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
		}
	};
}])
;
