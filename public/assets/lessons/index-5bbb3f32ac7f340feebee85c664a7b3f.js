if ("introduction" === gon.action_name) {
	AppManager().configModule(app, {
		courseModule: gon.course_structure.course_name,
		resources: '/assets/' + gon.course_structure.grade + '/' + gon.course_structure.class_name + '/',
		headerImg: gon.course_structure.header_img,
		menuImg: gon.course_structure.menu_img,
		menuImgStyles: gon.course_structure.menu_img_styles
	});

	app.controller('homeCtrl', ['$scope', '$sce', 'iconsService', '$timeout', function ($scope, $sce, iconsService, $timeout) {
		
		// console.log($scope);
		angular.element(document).ready(function () {
			$timeout(function () {
				angular.element('body').fadeIn(400);
			}, 1400);
		});
	}]);
} else {
	AppManager().configModule(app, {
		id: gon.course_structure.lesson_id,
		resources: '/assets/' + gon.course_structure.resources,
        rootResources: '/assets/',
        coursePath: gon.course_structure.grade + '/' + gon.course_structure.class_name + '/' + gon.course_app + '/',
		courseModule: gon.course_structure.course_name
	});
	angular.forEach(gon.lesson_structure, function (value, key) {
		app.controller(value.url_name + 'Ctrl', ['$scope', '$sce', '$rootScope', '$timeout', '$window', function ($scope, $sce, $rootScope, $timeout, $window) {
			$scope.data = value.data;
			$scope.data.lessonName = value.name;
			$scope.data.className = gon.course_structure.class_name;
            $scope.data.type = value.pr_type;
            $scope.data.progress = $scope.$root.lessonProgress[value.url_name];
            if (0 != value.pr_type) $scope.data.done = $scope.$root.lessonProgress[value.url_name].done;

            $scope.data.hasGrade = false;

            if (2 === value.pr_type) {
            	$scope.data.stage = $scope.$root.lessonProgress[value.url_name].stage;
            	$scope.data.hasGrade = true;
            }

 			$scope.$root.videos = {};

			$scope.$on('$destroy', function () {
                // $scope.$broadcast('destroySound');
                $scope.$root.videos = null;
                delete $scope.$root.videos
                $scope.$root.resetAudio();
			});

			if (!$scope.$root.hasOwnProperty('game')){
				angular.element(document).ready(function () {
					$timeout(function () {
						angular.element('body').fadeIn(400);
					}, 1400);
				});
			} else {
				$scope.$root.game.destroy();
                $scope.$root.game = null;
                delete $scope.$root.game;
                $window.location.reload();
            }
		}]);
	});
}
;
