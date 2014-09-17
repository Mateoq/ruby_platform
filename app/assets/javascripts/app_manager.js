// ------------------------------------------------------------------
// AppManager
// ------------------------------------------------------------------
// Configures the angular app with an sequential routing system and lock
// of activities. In the same way, this configurator module generates an array
// of routes used by the user to generate a dynamic navigation menu.
var AppManager = function () {
    return {
        // $routeProvider reference
        routeProvider: {},

        /**
         * Add zeros to left
         *
         * @param num
         * @param size
         * @returns {string}
         */
        pad: function (num, size) {
            return ('000000000' + num).substr(-size);
        },

        randomString: function (length) {
            var result = '',
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        },

        configModule: function (app, concepts, activities, options) {

            var self = this;

            // $routeProvider reference
            app.config(function ($routeProvider) {
                self.routeProvider = $routeProvider;
                // $locationProvider.html5Mode(true);
            });

            /**
             * esta función de angular es especial
             * y nos permite definir gran cantidad de configuraciones de la aplicación.
             */
            app.run(function ($rootScope, $location, $route,  $log, $window, lessonsProgressService, localStorageService) {
                // ======================================================================================
                // Categories
                // ======================================================================================
                $rootScope.categories = {
                    clickHere: 'click-here',
                    menuClickHere: 'menu-click-here',
                    submenuImg: 'submenu-img',
                    resources: 'resources',
                    courseInfo: 'course-info',
                    headerImg: 'header-img'
                };

                // ======================================================================================
                // $rootScope storage variables
                // ======================================================================================

                // Get init click-here guide introduction
                // if (!$rootScope.hasOwnProperty('clickHere')) {
                //     $rootScope.clickHere = localStorageService.get($rootScope.categories.clickHere, options.courseModule);
                //     $rootScope.menuClickHere = localStorageService.get($rootScope.categories.menuClickHere, options.courseModule);
                // }

                $log.log($rootScope);

                // ======================================================================================
                // $rootScope Image menu and header Image
                // ======================================================================================

                // if (!$rootScope.hasOwnProperty('menuImg')) { 
                //     var submenu = localStorageService.get($rootScope.categories.submenuImg, options.courseModule),
                //         resources = localStorageService.get($rootScope.categories.resources, options.courseModule);

                //     if (resources) { $rootScope.resources = resources.location }

                //     if (submenu) {
                //         $rootScope.courseMenuImg = $rootScope.resources + submenu.menuImg;
                //         $rootScope.courseMenuImgStyles = submenu.menuImgStyles;
                //     }

                //     var headerImg = localStorageService.get($rootScope.categories.headerImg, options.courseModule);

                //     if (headerImg) {
                //         $rootScope.headerImg = headerImg.img;
                //     }
                // }

                // ======================================================================================
                // $rootScope routes
                // ======================================================================================

                var routePath = false;

                //Generates the routes
                self.routeProvider.when('/', {
                        templateUrl: 'home',
                        controller: 'homeCtrl'
                });

                // Set conceps and activites pages only on lessons modules
                if (0 < activities) {
                    
                    $rootScope.routesArray = [];
                    $rootScope.routesArray.push("/");
                    
                    $rootScope.routeIndex = 0; // sets the actual index in routes.
                    $rootScope.totalConcepts = concepts; // total number of concepts.
                    $rootScope.totalActivities = activities; // total number of activities.

                    // Set concepts routes
                    for (var c = 1; c <= concepts; c++) {
                        routePath = self.pad(c, 2);
                        // hiddenUrl = self.randomString(20);

                        self.routeProvider.when('/c' + routePath, {
                            templateUrl: 'c' + routePath,
                            controller:'c' + routePath + 'Ctrl'
                        });

                        $rootScope.routesArray.push('/c' + routePath);
                    }

                    // Set activities routes
                    for (var d = 1; d <= activities; d++) {
                        routePath = self.pad(d, 2);
                        // hiddenUrl = self.randomString(20);
                        
                        self.routeProvider.when('/a' + routePath, {
                            templateUrl: 'a' + routePath,
                            controller: 'a' + routePath + 'Ctrl'
                        });

                        $rootScope.routesArray.push('/a' + routePath);
                    }

                    // Initialize lessons
                    if (options.hasOwnProperty("id")) {
                        lessonsProgressService.initLesson(options.id, concepts, $rootScope.routesArray);
                    }

                    // Get progress of current lesson
                    if (!$rootScope.hasOwnProperty("lesson")) {
                        $rootScope.lesson = lessonsProgressService.getLesson(options.id);
                    }
                }

                self.routeProvider.otherwise({
                    redirectTo: '/'
                });

                $route.reload();

                angular.forEach(options, function (value, key) {
                    $rootScope[key] = value;
                });

                // Each time the route change, activates each functionality
                $rootScope.$on("$routeChangeStart", function (event, next, current) {

                    if (0 < activities) {
                        $rootScope.routeIndex = $rootScope.routesArray.indexOf($location.path());
                        lessonsProgressService.setCurrent($rootScope.routeIndex, $rootScope.id);

                        var lesson = lessonsProgressService.getLesson(options.id),
                            currentPart = lessonsProgressService.getCurrent(lesson);
                            // console.log(currentPart);

                        if (!currentPart.enabled) {
                            // $window.history.back();
                            var lastActivity = lessonsProgressService.getLastEnabled(options.id);
                            $location.path(lastActivity.link);
                            $rootScope.routeIndex = $rootScope.routesArray.indexOf($location.path());
                        } else {
                            $rootScope.lesson = lesson;
                        }
                    }

                    // By default, this property is true, allows disable/enable prev function
                    $rootScope.isBackEnabled = true;

                });

                /**
                 * Go to the previous route.
                 */
                $rootScope.goPrev = function () {
                    if (!$rootScope.isBackEnabled) { return; }

                    if (0 === $rootScope.routeIndex) {
                        $location.path("/");
                    } else if (0 < $rootScope.routeIndex) {
                        $location.path($rootScope.routesArray[$rootScope.routeIndex - 1]);
                    }
                };


                /**
                 * Go to the next route.
                 */
                $rootScope.goNext = function () {
                    if (!$rootScope.lesson[$rootScope.routeIndex + 1].enabled) { return; }

                    if (0 < activities) {
                        $location.path($rootScope.routesArray[$rootScope.routeIndex + 1]);

                        return;
                    }

                    $window.location.href = $rootScope.lessonsRoutesArray[$rootScope.lessonIndex + 1];
                };

            });
        }
    };

};