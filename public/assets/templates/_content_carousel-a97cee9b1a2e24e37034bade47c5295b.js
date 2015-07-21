prTemplates.directive('contentCarousel', ['$timeout', function ($timeout) {
	return {
		templateUrl: '_content_carousel.html',
		transclude: true,
		restrict: 'E',
		scope: {
			options: '=options',
			carouselItems: '=carouselItems'
		},
		link: function (scope, element, attrs, ctrl, transclude) {
			scope.itemPosition = 0;
			scope.numItems = 0;

			setTimeout(function () {
				angular.element('#pr_partial_carousel').height(angular.element('.pr-lesson-content').height());
				// var $mainContent = angular.element('.ccar-item');

				// $newScope = scope.$parent.$parent;

	   //          transclude(scope.$parent.$parent, function(clone, scope) {
	   //          	console.log(clone);
				// 	$mainContent.empty();
				// 	$mainContent.append(clone);
				// });

				angular.element('#pr_partial_carousel').carousel({
					interval: false,
					wrap: false
				});

				var $carouselControl = angular.element('.carousel-control');

				$carouselControl.on('click', function(event) {
					var $self = angular.element(this);
					$self.addClass('rubberBand');
					setTimeout(function () {
						$self.removeClass('rubberBand');
					}, 700);
				});

				angular.element('.ccar-control.left').fadeOut();
				// scope.numItems = angular.element('.ccar-item').length - 1;
				$timeout(function () {
					scope.numItems = angular.element('.ccar-item').length - 1;
					console.log(scope.numItems);
					if (0 === scope.numItems) $carouselControl.hide();
				}, 300);
			}, 1300);

			scope.carouselNext = function ($event) {
				if (scope.itemPosition === scope.numItems) { return; }
				scope.itemPosition++;

				var $target = angular.element($event.currentTarget),
					$sibling = angular.element('.carousel-control.left');

				if (scope.itemPosition === scope.numItems)
					// $target.addClass('fadeOut');
					$target.fadeOut(400);
				else
					// $target.removeClass('fadeOut').addClass('fadeIn');
					$target.fadeIn(400);

				if (scope.itemPosition != 0)
					// $sibling.removeClass('fadeOut').addClass('fadeIn');
					$sibling.fadeIn(400);

				// if (scope.itemPosition === scope.numItems) {
				// 	scope.itemPosition--;
				// }
			}

			scope.carouselPrev = function ($event) {
				if (0 === scope.itemPosition) { return; }
				scope.itemPosition--;
				var $target = angular.element($event.currentTarget),
					$sibling = angular.element('.carousel-control.right');;

				if (scope.itemPosition === 0)
					// $target.addClass('fadeOut');
					$target.fadeOut(400);
				else
					// $target.removeClass('fadeOut').addClass('fadeIn');
					$target.fadeIn(400);

				if (scope.itemPosition != scope.numItems)
					// $sibling.removeClass('fadeOut').addClass('fadeIn');
					$sibling.fadeIn(400);

				// if (0 === scope.itemPosition) {
				// 	scope.itemPosition
				// }
			}
		}
	};
}]);
