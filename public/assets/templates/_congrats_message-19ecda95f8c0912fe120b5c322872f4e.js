prTemplates.directive('prCongratsMessage', ['$timeout', '$sce', '$route', '$window', function($timeout, $sce, $route, $window){
	// Runs during compile
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
		// templateUrl: '',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, Attrs, controller) {
            console.log(scope);
			var itemName = scope.options.lessonName.split('. ');

			scope.options.itemType = itemName[0];
			scope.options.itemTitle = angular.uppercase(itemName[1]);

			if (scope.options.progress.failed) {
				scope.options.congratsMessage = $sce.trustAsHtml('<span style="line-height: 0.7;">¡ánimo!<br>Intentalo de nuevo</span>');
				scope.options.continueButton = function () {
					angular.element('body').fadeOut(300);
					scope.$root.activeMessage = false;
					$window.location.reload();
					// $route.reload();
				};
			} else {
				scope.options.congratsMessage = $sce.trustAsHtml('<span style="font-size: 40px">¡MUY BIEN!</span>');
				scope.options.continueButton = scope.$root.goNext;
			}

			scope.options.closeMessage = function () {
				$timeout(function () {
					angular.element('.modal-animation').removeClass('active');
				}, 1000).then(function () {
					scope.$root.activeMessage = false;
				});
			};

			// Message Animation
			var $parent = angular.element('.pr-congrats-content'),
				$congratsTable = angular.element('.congrats-table'),
				$whiteCircle = angular.element('.white-circle');
				$backgroundBar = angular.element('.background-bar'),
				$notebook = angular.element('.notebook'),
				$lines1 = angular.element('.lines-left.lines1'),
				$lines2 = angular.element('.lines-left.lines2'),
				$titleBar = angular.element('.title-bar'),
				$congratsBar = angular.element('.congrats-bar'),
				$nut = angular.element('.nut'),
				$nutAura = angular.element('.nut-aura'),
				$littleStar = angular.element('.little-star'),
				$middleStar = angular.element('.middle-star'),
				$bigStar = angular.element('.big-star'),
				$character = angular.element('.pr-congrats-character'),
				$linesLeftLarge = angular.element('.lines-left-large'),
				$buttonBar = angular.element('.button-bar');

			$timeout(function () {
				$congratsTable.animate({opacity: 1},200);
				$timeout(function () {
					$whiteCircle.addClass('animated bounceIn');
				}, 400).then(function () {
					$timeout(function () {
						var backgroundBarW = $backgroundBar.width();
						$backgroundBar.css('clip', 'rect(auto, ' + backgroundBarW + 'px, auto, 0)');
					}, 400).then(function () {
						$timeout(function () {
							$notebook.addClass('animated bounceIn');
						}, 400).then(function () {
							$timeout(function () {
								var linesH = $lines1.height();
								$lines1.css('clip', 'rect(0, auto, auto, auto)');
								$lines2.css('clip', 'rect(auto, auto, ' + linesH + 'px, auto)');
							}, 400).then(function () {
								$timeout(function () {
									$titleBar.css('clip', 'rect(auto, auto, auto, 0)');
									$congratsBar.addClass('animated bounceIn');
								}, 400).then(function () {
									$timeout(function () {
										$nutAura.addClass('animated bounceIn');
										$nut.css({
											animation: 'bounceIn 1s linear',
											opacity: 1
										});
									}).then(function () {
										setTimeout(function () {
											$nut.css('opacity', 1).addClass('pr-spin-animation');
										}, 400);

										$notebook.addClass('fadeOut');
										setTimeout(function () {
											$whiteCircle.find('span').addClass('animated fadeIn');
										}, 400);

										$littleStar.addClass('bounceIn');
										$middleStar.addClass('bounceIn');
										$bigStar.addClass('bounceIn');
									}, 400).then(function () {
										$timeout(function () {
											$character.addClass('fadeIn');
											$congratsBar.find('span').addClass('fadeIn').css('opacity', 1);
										}, 400).then(function () {
											$timeout(function () {
												var height = $linesLeftLarge.height();
												$linesLeftLarge.css('clip', 'rect(auto, auto, ' + height + 'px, auto)');
												setTimeout(function () {
													$buttonBar.addClass('bounceIn');
												}, 400);
												setTimeout(function () {
													$congratsBar.find('span').removeClass('fadeIn').addClass('tada');

													setTimeout(function () {
														$congratsBar.removeClass('tada');
													}, 500);
												}, 500);
											}, 400);
										});
									});
								});		
							});
						});
					});
				});
			}, 400);

		}
	};
}]);
