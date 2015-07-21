/**
 * Created by mateo on 4/12/14.
 */

prTemplates.directive('inputCanvas', ['formValidation', 'graphicService', 'updateProgressService', function (formValidation, graphicService, updateProgressService) {
    return {
        templateUrl: 'input_canvas.html',
        restrict: 'E',
        scope: {
            options: '=options'
        },
        link: function (scope, element, attrs) {
            scope.options.templateClass = 'input-canvas';

            formValidation.initialize(scope.options.pattern);

            var countItems = 0;

            for (var i = 0; i < scope.options.activity.items.length; i++) {
                scope.options.activity.items[i].chances = 2;
                scope.options.activity.items[i].classIcon = 'pr-icon-arrow';
                countItems++;

                if (scope.options.activity.hasIcon) {
                    scope.options.activity.items[i].hasIcon = 'pr-icon-arrow';
                }

                if (scope.options.done) {
                    scope.options.activity.items[i].value = scope.options.activity.items[i].answer;
                    scope.options.activity.items[i].disabled = true;
                }
            }

            if (scope.options.activity.nested) {
                scope.options.items = scope.options.activity.items;
            }

            formValidation.initialize(scope.options.pattern, countItems, scope.options.hasGrade, function (rightAnswers) {
                var data = {
                    num_items: countItems,
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

            scope.$root.game = new Phaser.Game(scope.options.canvasData.width, scope.options.canvasData.height, Phaser.CANVAS, scope.options.activityName, null, true);

            scope.options.canvasData.atlasPath = scope.$root.resources + scope.options.canvasData.atlasMap;
            scope.options.canvasData.method = scope.options.method;

            graphicService(scope.options.canvasData, scope.$root.game);

            scope.validate = formValidation.validate;
        }
    };
}]);
