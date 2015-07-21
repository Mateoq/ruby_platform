prTemplates.directive('contentContainers', ['$sce', '$timeout', 'phaserAnimations', function ($sce, $timeout, phaserAnimations) {
	return {
		templateUrl: '_content_containers.html',
		transclude: true,
		// replace: true,
		restrict: 'EA',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs, ctrl, transclude) {
			if (angular.isUndefined(scope.options)) return;
	        
			if (angular.isUndefined(scope.options.hasHeader)) {
				scope.options.hasHeader = true;
			}

			$timeout(function () {
				if (angular.isString(scope.options.text)) {
	                scope.options.text = $sce.trustAsHtml(scope.options.text);
	            }

	            if (angular.isString(scope.options.instruction)) {
	                scope.options.instruction = $sce.trustAsHtml(scope.options.instruction);
	            }

	            if (angular.isObject(scope.options.main)) {
	            	if (angular.isObject(scope.options.main.video)) {
	            		scope.options.main.video.contentMainClass = scope.options.contentMainClass;
	            	}

	            	if (angular.isObject(scope.options.main.orderList)) {
	            		angular.forEach(scope.options.main.orderList.items, function(item){
	            			item.key = $sce.trustAsHtml(item.key);						
	            			item.value = $sce.trustAsHtml(item.value);
	            		});
	            	}

	            	if (angular.isObject(scope.options.main.phaser)) {
						scope.$root.game = new Phaser.Game(scope.options.main.phaser.widh, scope.options.main.phaser.height, Phaser.CANVAS, scope.options.contentMainClass, null, true);
						scope.options.main.phaser.resources = scope.$root.resources;
						phaserAnimations(scope.options.main.phaser, scope.$root.game);

						$timeout(function () {
							angular.element('#' + scope.options.contentMainClass).animate({opacity: 1}, 400);
						}, 3300);
					}

					if (angular.isObject(scope.options.main.formList)) {
						angular.forEach(scope.options.main.formList.items, function (i, k) {
							i.key.value = $sce.trustAsHtml(i.key.value);
							i.text.value = $sce.trustAsHtml(i.text.value);
							i.input.chances = 2;
						});
					}
	            }

	            if (scope.options.hasExtra) {
	            	if (!scope.options.headerButton.is) {
	            		options.showExtraContent = true;
	            	}

	            	angular.forEach(scope.options.extraContent.rows, function(row){
	            		for (var i = 0; i < row.items.length; i++) {
	            			if (row.items[i].text) {
				                row.items[i].text.text = $sce.trustAsHtml(row.items[i].text.text);
				            }

				            if (row.items[i].list) {
				            	angular.forEach(row.items[i].list.items, function(value, key){
				            		value = $sce.trustAsHtml(value);
				            	});
				            }
	            		}
	            	});  
	            }

	            var $mainContent = angular.element('.' + scope.options.contentMainClass);
	            var options = scope.options;
	            transclude(scope, function(clone, scope) {

	            	if (options.main) { 
	            		if (options.main.empty) {
	            			$mainContent.empty();
	            		}
	            	}

					$mainContent.append(clone);
				});
			});

			// var $header = angular.element('.pr-content-header'),
			// 	$instruction = angular.element('.pr-content-instruction'),
			// 	$main = angular.element('.pr-left-container'),
			// 	$title = $header.find('.pr-content-title'),
			// 	contWidth = scope.options.contWidth;

			// $instruction.css('width', contWidth + 'px');
			// $main.css('width', contWidth + 'px');
			// $title.css('width', contWidth - 80 + 'px');

			// if (scope.options.hasInstruction) {
			// 	$main.css('height', '200px');
			// 	$main.find('.pr-content-main').css('height', '144px');
			// }
		}
	};
}]);