(function () {
	var mat01 = angular.module('mat01', ['modules']);

	AppManager().configModule(mat01, 0, 0, {
		grade: "1°", 
		class: "Matemáticas", 
		courseModule:"mat-01",
		guides: [1, 1, 1, 1],
		resources: "../images/primero/mat/",
		headerImg: 'header-matematicas-550.png',
		menuImg: 'matematicas_menu.png',
		menuImgStyles: 'left: -26px;bottom: 40px;width: 230px;'
	});

	mat01.controller('homeCtrl', function ($scope, $sce, iconsService) {
		$scope.courseIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
		$scope.courseVideo = $sce.trustAsHtml('<iframe width="500" height="300" src="https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0" frameborder="0" ></iframe>');

		$scope.iconsIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';

		$scope.credits = [
			{
				title: 'Experto temático',
				name: 'xxx',
				icon: 'pr-icon-tiny-user'
			},
			{
				title: 'Asesoría pedagógica',
				name: 'xxx',
				icon: 'pr-icon-tiny-user'
			},
			{
				title: 'Diseño mediacional',
				name: 'xxx',
				icon: 'pr-icon-tiny-user'
			},
			{
				title: 'Diseño web',
				name: 'xxx',
				icon: 'pr-icon-tiny-user'
			},
			{
				title: 'Diseño gráfico',
				name: 'xxx',
				icon: 'pr-icon-tiny-user'
			},
			{
				title: 'Ilustración',
				name: 'xxx',
				icon: 'pr-icon-tiny-user'
			},
			{
				title: 'Año',
				name: new Date().getFullYear(),
				icon: 'pr-icon-tiny-calendar'
			},
			{
				title: 'Versión',
				name: '0.01',
				icon: 'pr-icon-tiny-version'
			}
		];
	});
})();