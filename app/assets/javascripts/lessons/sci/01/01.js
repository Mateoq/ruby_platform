(function () {
    var sci101 = angular.module("sci101", ["modules"]);

    AppManager().configModule(sci101, 2, 4, {
        id: "sci-01-01",
        guide: 0,
        lessonName: '1- título de la lección',
        courseModule:"sci-01",
    });

    sci101.controller('homeCtrl', function ($scope, $sce) {
        // var intro = ;
        $scope.data = {
            intro: $sce.trustAsHtml('A continuación encontrarás una pequeña reflexión sobre el reino animal y vegetal y de su importancia para el ser humano.<br><br>Los seres vivos están organizados en dos grandes grupos que son los animales y las plantas, brindándole no sólo al ser humano sino al mundo entero una estabilidad no solo al ser humano sino al mundo entero una estabilidad y opciones de vida.<br><br>En esta lección, vamos a trabajar y conocer un poco más de ellos: cómo están clasificados, cómo se reproducen, cómo se alimentan y cómo le sirven al hombre para su supervivencia.<br><br>Te invito entonces a disfrutarlo y aportarlo tus grandes acciones para protegerlos y cuidarlos como algo vital para ti, tu familia y la sociedad.')
        };
    });

    sci101.controller('c01Ctrl', function ($scope) {
        $scope.options = {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            // contentShadow: 'shadow-effect-1'
        };

        $scope.options2 = {
            title: '¿Qué es el Sistema Solar?',
            text: 'El Sistema Solar es un conjunto formado por el Sol, los planetas; dentro de los cuales está incluida la Tierra y otros cuerpos planeta-rios. Todos ellos giran alrededor de una gran estrella, el Sol.',
            instruction: 'Haga clic sobre cada planeta para conocer sus características.',
            hasInstruction: true,
            contWidth: 500
        };
    });

    sci101.controller('c02Ctrl', function ($scope) {
        $scope.test = "asdasdasd";
    });

    sci101.controller('a01Ctrl', function ($scope) {
        $scope.test = "asdasdasd";
    });

    sci101.controller('a02Ctrl', function ($scope) {
        $scope.test = "asdasdasd";
    });

    sci101.controller('a03Ctrl', function ($scope) {
        $scope.test = "asdasdasd";
    });

    sci101.controller('a04Ctrl', function ($scope) {
        $scope.test = "asdasdasd";
    });
})();