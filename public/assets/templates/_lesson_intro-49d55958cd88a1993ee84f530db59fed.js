prTemplates.directive('lessonIntro', ['ngAudio', function (ngAudio) {
    return {
        templateUrl: '_lesson_intro.html',
        transclude: true,
        restrict: 'E',
        scope: {
            options: '=options'
        },
        link: function (scope, element, attrs) {
            scope.playLessonAudio = function () {
                scope.$root.resetAudio();
                scope.$root.audio = ngAudio.load(scope.$root.resources + 'intro.mp3');
                scope.$root.audio.play();
                console.log(scope.$root.audio);
            };
        }
    };
}]);
