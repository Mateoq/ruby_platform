prTemplates.directive('lessonIntro', function () {
    return {
        templateUrl: '/templates/_lesson_intro.html',
        transclude: true,
        restrict: 'E',
        scope: {
        	options: '='
        },
        link: function (scope, element, attrs) {
            // console.log(scope);
        }
    };
});