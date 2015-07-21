prTemplates.directive('activityTemplate', function () {
    return {
        templateUrl: 'templates/_activity_template.html',
        transclude: true,
        restrict: 'E',
        link: function (scope, element, attrs) {
            
            scope.screenToggle = function ($event, next) {
                var $btn = angular.element($event.currentTarget),
                    $parent = $btn.parent(),
                    $next = angular.element(next);

                if ($btn.hasClass('active')) {
                    $btn.removeClass('active');
                    $parent.animate({width: '49.7%'}, 200, function () {
                        $next.fadeIn(200);
                    });
                } else {
                    $btn.addClass('active');
                    $next.fadeOut(200, function () {
                        $parent.animate({width: '100%'}, 200);
                    });
                }
            };
        }
    };
});
