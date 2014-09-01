(function () {
	var esp01 = angular.module('esp01', ['modules']);

	AppManager().configModule(esp01, 0, 0, {
		grade: "Grado 1°", 
		class: "Lengua Castellana", 
		courseModule:"esp-01",
		guides: [3],
		resources: "../images/primero/esp/"
	});

	esp01.controller('homeCtrl', function ($scope, $sce, iconsService) {
		$scope.courseIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
		$scope.courseVideo = $sce.trustAsHtml('<iframe width="500" height="300" src="https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0" frameborder="0" ></iframe>');
		$scope.courseDuration = 'Los siguientes son los tiempos que el estudiante tiene estipulado para el desarrollo de cada guía.';

		$scope.iconsIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';

		var json = {};
		iconsService.getIcons().then(function (data) {
			json = data;

			var i, j, tempArray, chunk = 4, icons = [];

			for (i = 0, j = json.icons.length; i < j; i += chunk) {
				tempArray = json.icons.slice(i, i + chunk);	
				icons.push(tempArray);
			}

			$scope.icons = icons;
		});

		$scope.courseCredits = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';

		$scope.credits = [
			{
				title: 'Experto temático',
				name: 'xxx'
			},
			{
				title: 'Asesoría en inclusión educativa',
				name: 'xxx'
			},
			{
				title: 'Diseño mediacional',
				name: 'xxx'
			},
			{
				title: 'Diseño web',
				name: 'xxx'
			},
			{
				title: 'Diseño gráfico',
				name: 'xxx'
			},
			{
				title: 'Ilustración',
				name: 'xxx'
			},
			{
				title: 'Año',
				name: new Date().getFullYear()
			},
			{
				title: 'Versión',
				name: '0.01'
			}
		]
	});
})();