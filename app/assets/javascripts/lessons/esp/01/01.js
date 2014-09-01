(function () {
	var esp101 = angular.module("esp101", ["modules"]);

	AppManager().configModule(esp101, 2, 4, {
		id: "esp-01-01",
		guide: 0, 
		grade: "Grado 1°",
		courseModule:"esp-01",
		class: "Lengua Castellana"
	});

	esp101.controller('homeCtrl', function ($scope) {
		$scope.text = "Welcome!!";
	});

	esp101.controller('c01Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp101.controller('c02Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp101.controller('a01Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp101.controller('a02Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp101.controller('a03Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp101.controller('a04Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});
})();