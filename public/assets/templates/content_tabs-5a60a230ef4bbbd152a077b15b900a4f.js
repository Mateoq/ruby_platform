prTemplates.directive('contentTabs', ['$timeout', 'ngAudio', 'updateProgressService', function ($timeout, ngAudio, updateProgressService) {
	return {
		templateUrl: 'content_tabs.html',
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			scope.options.templateClass = 'content-tabs';

			var totalItems = 0;
			
			scope.options.itemsProgress = 1;

			angular.forEach(scope.options.tabs.contentTabs, function(value, key){
				totalItems++;
				scope.options.tabs.contentTabs[key].contentMainClass = 'item-' + totalItems;
				scope.options.tabs.contentTabs[key].done = false;
				scope.options.tabs.contentTabs[key].onHeaderClick = function (obj, $event) {
					if (angular.isDefined(obj)) {
						if (obj.hasOwnProperty('audio')) {
							scope.$root.resetAudio();
        					scope.$root.audio = ngAudio.play(scope.$root.resources + obj.audio);
						}
					}
				};

				if (scope.options.done || 0 === key) scope.options.tabs.contentTabs[key].done = true;
			});

			$timeout(function () {

				var $tabsContainer = angular.element('.ctabs-tabs-container');
					$tabs = angular.element('.ctabs-nav-tab');

				// $tabsContainer.tab();

				// $tabs.on('click', function(event) {
				// 	event.preventDefault();
				// });

			});

			scope.options.changeTab = function ($event, tab, contentTab) {
				$event.preventDefault();
				
				var $panels = angular.element('.ctabs-panel'),
					$tabs = angular.element('.ctabs-nav-tab'),
					$currentPanel = angular.element(tab),
					$currentTab = angular.element($event.currentTarget);

				for (var i = 0; i < $panels.length; i++) {
					angular.element($panels[i]).removeClass('active');
					angular.element($tabs[i]).removeClass('animated rubbenBand active');
				}

				$currentPanel.addClass('active');
				$currentTab.addClass('active');

				$currentTab.find('a').addClass('animated rubbenBand');

				if (contentTab.done) return;

				scope.options.itemsProgress++;

				if (scope.options.itemsProgress === totalItems) {
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
		}
	};
}]);
