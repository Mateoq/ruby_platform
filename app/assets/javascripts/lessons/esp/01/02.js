(function () {
	var esp102 = angular.module("esp102", ["modules"]);

	AppManager().configModule(esp102, 2, 4, {
		id: "esp-01-02",
		guide: 0, 
		grade: "Grado 1°",
		courseModule:"esp-01", 
		class: "Lengua Castellana"
	});

	esp102.controller('homeCtrl', function ($scope) {
		$scope.text = "Welcome!!";
	});

	esp102.controller('c01Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp102.controller('c02Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp102.controller('a01Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp102.controller('a02Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp102.controller('a03Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});

	esp102.controller('a04Ctrl', function ($scope) {
		$scope.test = "asdasdasd";
	});
})();