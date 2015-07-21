prTemplates.directive('itemSelectionForm', ['formValidation', 'updateProgressService', function (formValidation, updateProgressService) {
    return {
        templateUrl: 'item_selection_form.html',
        restrict: 'E',
        scope: {
            options: '=options'
        },
        link: function (scope, element, attrs) {
            scope.options.templateClass = 'item-selection-form';
            scope.options.className = gon.course_structure.class_name;

            var countItems = 0;

            for (var i = 0; i < scope.options.activity.items.length; i++) {
                scope.options.activity.items[i].chances = 2;
                scope.options.activity.items[i].index = i;
                scope.options.activity.items[i].type = formValidation.types.radio;
                countItems++;

                if (scope.options.done) {
                    scope.options.activity.items[i].value = scope.options.activity.items[i].answer;
                    scope.options.activity.items[i].disabled = true;
                }
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

            scope.validate = formValidation.validate;
        }
    };
}]);
