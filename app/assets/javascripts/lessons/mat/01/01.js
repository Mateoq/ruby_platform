(function () {
	var mat101 = angular.module("mat101", ["modules"]);

	AppManager().configModule(mat101, 2, 4, {
		id: "mat-01-01",
		guide: 0,
		lessonName: '1- título de la lección',
		courseModule:"mat-01",
	});

	mat101.controller('homeCtrl', function ($scope) {
		$scope.text = "Welcome!!";
	});

	mat101.controller('c01Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	mat101.controller('c02Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	mat101.controller('a01Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	mat101.controller('a02Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	mat101.controller('a03Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	mat101.controller('a04Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});
})();