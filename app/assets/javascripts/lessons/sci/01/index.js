(function () {
	var sci01 = angular.module('sci01', ['modules']);

	AppManager().configModule(sci01, 0, 0, {
		grade: "1°", 
		class: "Ciencias Naturales", 
		courseModule:"sci-01",
		guides: [3, 3, 3, 3],
		resources: "../images/primero/sci/",
		headerImg: 'plantillas_primaria_cibercolegio_2014.png',
		menuImg: 'menu.png',
		menuImgStyles: 'left: -36px; bottom: 10px; width: 110px;'
	});

	sci01.controller('homeCtrl', function ($scope, $sce) {
	});
})();