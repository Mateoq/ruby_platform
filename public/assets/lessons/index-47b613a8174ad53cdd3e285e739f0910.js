(function () {
	var app = angular.module(gon.course_app, ['modules']);
	if ("introduction" === gon.action_name) {
		AppManager().configModule(app, {
			courseModule: gon.course_structure.course_name,
			resources: "/assets/" + gon.course_structure.grade + "/" + gon.course_structure.class_name + "/",
			headerImg: gon.course_structure.header_img,
			menuImg: gon.course_structure.menu_img,
			menuImgStyles: gon.course_structure.menu_img_styles
		});

		app.controller('homeCtrl', function ($scope, $sce, iconsService) {
			console.log($scope);
		});
	} else {
		AppManager().configModule(app, {
			id: gon.course_structure.lesson_id,
			courseModule: gon.course_structure.course_name
		});

		for (var i = 0; i < gon.lesson_structure.length; i++) {
			var structure = gon.lesson_structure[i];
			app.controller(structure.name + 'Ctrl', function ($scope, $sce) {
				$scope.data = structure.data;
			});	
		}
	}
})();
