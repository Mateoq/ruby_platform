prTemplates.directive('lessonIntro', function () {
    return {
        templateUrl: '_lesson_intro.html',
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