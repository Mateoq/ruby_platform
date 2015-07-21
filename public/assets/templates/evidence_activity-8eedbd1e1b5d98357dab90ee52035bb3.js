prTemplates.directive('evidenceActivity', ['$timeout', '$http', 'updateProgressService', function($timeout, $http, updateProgressService){
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
		// template: '',
		templateUrl: 'evidence_activity.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs, controller) {
			scope.options.templateClass = 'evidence-activity';
			scope.options.hasGrade = false;
			scope.options.isEvidence = true;
			// scope.options.docLink = Routes.documents_download_path({
			// 	filepath: gon.course_structure.grade + '\/' + scope.$root.className+ '\/' + scope.$root.courseApp + '.docx',
			// 	file_name: scope.$root.courseApp
			// });
			
			scope.options.docLink = Routes.download_documents_path() +'?file_name=evidencias.docx';
			scope.options.docLink += '&grade=' + gon.course_structure.grade;
			scope.options.docLink += '&class_name=' + gon.course_structure.class_name;
			scope.options.docLink += '&course=' + gon.course_app;

			scope.options.tableName = 'header_' + scope.$root.className + '_750.png';

			// var dropzone = new Dropzone('#eva_dropzone', { url: "/file/post",
			// 	previewTemplate: '<div class="dz-preview dz-file-preview"><div class="dz-details"><div class="dz-filename"><span data-dz-name></span></div><div class="dz-size" data-dz-size></div><img data-dz-thumbnail /></div><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-success-mark"><span>✔</span></div><div class="dz-error-mark"><span>✘</span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>'
			// });
			
			if (scope.options.done) {

				$timeout(function () {
					angular.element('.eva-dropzone').remove();

					var uploadHtml = angular.element('.dropzone-content').html(),
						$uploadContainer = angular.element('.doc-upload');

					$uploadContainer.append(uploadHtml);
					$uploadContainer.find('.dz-success-mark').css('opacity', '1');
					$uploadContainer.find('.eva-file-progress').remove();
					$uploadContainer.find('.pr-content-container').remove();
				}, 1000);

				return;
			}

			// Dropzone configuration
			$timeout(function () {
				angular.element('.dz-default').remove();
				var $evaDropZone = angular.element('.eva-dropzone').dropzone({ url: Routes.upload_documents_path() + '?course_name=' + gon.course_app,
					init: function () {
						this.on('success', function (file, data, request) {
							updateProgressService(
		                        gon.course_structure.class_name,
		                        gon.course_structure.grade,
		                        gon.course_structure.lesson_guide,
		                        gon.course_structure.lesson_num,
		                        scope.options.hasGrade
			                );

			                updateProgressService.update(gon.lesson_structure[scope.$root.routeIndex].url_name, scope.$root.nextItem).then(function (data) {
				            	scope.$root.lessonProgress = data.lesson_progress[gon.course_app];
				            	// scope.$root.isNextEnabled = true;
				            });
						});
					},
					method: 'POST',
					// acceptedFiles: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
					previewTemplate: angular.element('.dropzone-content').html(),
					clickable: false
				});

				$evaDropZone.on('drop', function (event) {
					angular.element('.doc-upload').find('.pr-content-container').animate({opacity: 0, display: 'none'}, 400);
					angular.element(this).css({
						'background-color': 'transparent',
						'box-shadow': 'none'
					});
				});

				// $evaDropZone.on('addedfile', function(file) {
				// 	$(this).css({
				// 		'background-color': 'transparent',
				// 		'box-shadow': 'none'
				// 	});

				// 	angular.element('.doc-upload').find('.pr-content-container').animate({opacity: 0, display: 'none'}, 100);
				// });
			}, 200);
		}
	};
}]);
