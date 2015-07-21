prTemplates.directive('dragDrop', ['dragNDropService', 'updateProgressService', '$window', '$timeout', function (dragNDropService, updateProgressService, $window, $timeout) {
	return {
		templateUrl: 'canvas_template.html',
		restrict: 'E',
		scope: { options: '=options' },
		link: function (scope, element, attrs) {

            // if (scope.$root.hasOwnProperty('game')) {
            //     console.log('asd');
            //     $timeout(function () {
            //         angular.element('body').fadeOut();
            //     }, 900);
            //     scope.$root.game.destroy();
            //     scope.$root.game = null;
            //     delete scope.$root.game;
            //     $window.location.reload();
            // }

			scope.options.templateClass = 'drag-drop';

			scope.$root.game = new Phaser.Game(scope.options.activity.width, scope.options.activity.height, Phaser.CANVAS, scope.options.activityName, null, true);

			scope.options.activity.atlasPath = scope.$root.resources + scope.options.activity.atlasMap;
            scope.options.activity.resources = scope.$root.resources;

			dragNDropService(scope.options.activity, scope.$root.game, scope.options.done, function (numItems, rightAnswers) {
				var data = {
					num_items: numItems,
					right_answers: rightAnswers
				};

                updateProgressService(
                        gon.course_structure.class_name,
                        gon.course_structure.grade,
                        gon.course_structure.lesson_guide,
                        gon.course_structure.lesson_num,
                        scope.options.hasGrade
                );

                updateProgressService.update(gon.lesson_structure[scope.$root.routeIndex].url_name, scope.$root.nextItem, data).then(function (data) {
                    // TODO: congrats message
                    if (scope.options.hasGrade) {
                        var userProgress = angular.fromJson(data.user_progress);
                        scope.options.progress = userProgress.lesson_progress[gon.course_app][scope.options.progress.url_name];
                    	scope.$root.lessonProgress = userProgress.lesson_progress[gon.course_app];
	                    scope.options.stage = data.activity_progress.stage;
	                    scope.options.grade = data.activity_progress.grade;
	                    scope.options.failed = data.activity_progress.failed;
	                    scope.options.done = data.activity_progress.done;
                        scope.$root.activeMessage = true;
                    } else {
                    	scope.$root.lessonProgress = data.lesson_progress[gon.course_app];
                    	scope.options.done = true;
                    }

                    if (scope.options.done) {
                    	scope.$root.isNextEnabled = true;
                	}
                });
            });
		}
	};
}]);
