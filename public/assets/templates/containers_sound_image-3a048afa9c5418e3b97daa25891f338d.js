prTemplates.directive('containersSoundImage', ['updateProgressService', 'ngAudio', function (updateProgressService, ngAudio) {
	return {
		templateUrl: 'containers_sound_image.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, iElement, iAttrs) {
			scope.options.templateClass = 'containers-sound-image';

			var itemsCount = 0,
				itemsProgress = 0;

			angular.forEach(scope.options.containers, function(value, key){
				angular.forEach(value, function(item, k){
					itemsCount++;
					scope.options.containers[key][k].contentMainClass = "item-" + itemsCount;
					scope.options.containers[key][k].onHeaderClick = function (obj, $event) {
						if (obj.hasOwnProperty('audio')) {
							if (scope.audio) {
								scope.audio.stop();
							}

							scope.audio = ngAudio.play(scope.$root.resources + obj.audio);
						}

						if (scope.options.containers[key][k].showContent || scope.options.done) { return; }

						scope.options.containers[key][k].showContent = true;
						itemsProgress++;

						if (itemsCount === itemsProgress) {
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

					if (scope.options.done) {
						scope.options.containers[key][k].showContent = true;
					}
				});
			});
		}
	};
}])
;
