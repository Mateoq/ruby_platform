prTemplates.directive('textInputForm', ['$sce', 'formValidation', 'updateProgressService', function ($sce, formValidation, updateProgressService) {
	return {
		templateUrl: 'text_input_form.html',
		restrict: 'E',
		scope: {options: '=options'},
		link: function (scope, element, attrs) {
			scope.options.templateClass = 'text-input-form';

			var countItems = 0;

			for (var i = 0; i < scope.options.items.length; i++) {
				countItems++;

				if (scope.options.done) {
					scope.options.items[i].value = scope.options.items[i].answer;
					scope.options.items[i].disabled = true;
					continue;
				}

				scope.options.items[i].chances = 2;	
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
