prTemplates.directive('tableForm', ['$sce', '$window', '$document', '$timeout', 'formValidation', 'updateProgressService', function ($sce, $window, $document, $timeout, formValidation, updateProgressService) {
	return {
		templateUrl: 'table_form.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs, ngModel) {
			scope.options.templateClass = 'table-form';

			var countItems = 0;

			for (var i = 0; i < scope.options.table.items.length; i++) {
				for (var j = 0; j < scope.options.table.items[i].length; j++) {
					if (scope.options.table.items[i][j].hasOwnProperty('text')) continue;

					countItems++;

					if (scope.options.done) {
						scope.options.table.items[i][j].value = scope.options.table.items[i][j].answer;
						scope.options.table.items[i][j].disabled = true;
						continue;
					}

					scope.options.table.items[i][j].chances = 2;
				}
			}

			formValidation.initialize(scope.options.pattern, countItems, false, function () {
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
			});

			scope.validate = formValidation.validate;
		}
	};
}]);
