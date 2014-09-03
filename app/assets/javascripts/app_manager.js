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
            app.config(function ($routeProvider, $locationProvider) {
                self.routeProvider = $routeProvider;
                // $locationProvider.html5Mode(true);
            });

            /**
             * esta función de angular es especial
             * y nos permite definir gran cantidad de configuraciones de la aplicación.
             */
            app.run(function ($rootScope, $location, $route,  $log, $window, courseProgressService, lessonsProgressService, rootRouteService, localStorageService) {
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
                // Solve issue when user comes directly to the lesson
                // ======================================================================================
                if (options.hasOwnProperty("id")) {
                    var module = options.id.split('-');
                    if (false === rootRouteService.get(module[0] + '-' + module[1])) {
                        var rootUrl = $window.location.href.replace(/[0-9]+\.html/, '');
                        $window.location.href = rootUrl;
                    }
                }

                // ======================================================================================
                // $rootScope storage variables
                // ======================================================================================

                // Initialize current course, set course module name and current root route
                if (options.hasOwnProperty("guides") && !options.hasOwnProperty("id")) {
                    // courseModuleService.set(options.courseModule);

                    if (!$rootScope.hasOwnProperty("course")) {
                        courseProgressService.initCourse(options.courseModule, options.guides);

                        rootRouteService.set($window.location.href, options.courseModule);

                        localStorageService.add($rootScope.categories.submenuImg, options.courseModule, {
                            menuImg: options.menuImg,
                            menuImgStyles: options.menuImgStyles
                        });

                        localStorageService.add($rootScope.categories.resources, options.courseModule, {
                            location: options.resources
                        });

                        // Save base course info
                        localStorageService.add($rootScope.categories.courseInfo, options.courseModule, {
                            class: options.class,
                            grade: options.grade
                        });

                        // Save header image
                        localStorageService.add($rootScope.categories.headerImg, options.courseModule, {
                            img: options.headerImg
                        });
                    }

                    // Init introduction click here guide
                    if (!localStorageService.get($rootScope.categories.clickHere, options.courseModule)) {
                        localStorageService.add($rootScope.categories.clickHere, options.courseModule, {
                            done: false
                        });
                        localStorageService.add($rootScope.categories.menuClickHere, options.courseModule, {
                            done: false
                        });
                    }
                }

                // Get the progress of the current course en get the current root route
                if (!$rootScope.hasOwnProperty("courseModule")) {
                    // $rootScope.courseModule = courseModuleService.get($rootScope.moduleIndex);
                    $rootScope.courseModule = options.courseModule;
                    $rootScope.rootRoute = rootRouteService.get($rootScope.courseModule);
                }

                // Get init click-here guide introduction
                if (!$rootScope.hasOwnProperty('clickHere')) {
                    $rootScope.clickHere = localStorageService.get($rootScope.categories.clickHere, options.courseModule);
                    $rootScope.menuClickHere = localStorageService.get($rootScope.categories.menuClickHere, options.courseModule);
                }

                $log.log($rootScope);

                // Set current lesson
                if (options.hasOwnProperty("id")) {
                    courseProgressService.setCurrentLesson(options.guide, options.id, $rootScope.courseModule);
                }

                // Get the progress of the lessons
                if (!$rootScope.hasOwnProperty("course")) {
                    $rootScope.course = courseProgressService.getLessons();
                }

                // $rootScope.$on("settedCourseModule", function () {
                //     $rootScope.courseModule = courseModuleService.courseModule;                    
                // });

                // $rootScope.$on("updatedCourse", function () {
                //     $rootScope.course = courseProgressService.course;
                // });

                // ======================================================================================
                // $rootScope Image menu and header Image
                // ======================================================================================

                if (!$rootScope.hasOwnProperty('menuImg')) { 
                    var submenu = localStorageService.get($rootScope.categories.submenuImg, options.courseModule),
                        resources = localStorageService.get($rootScope.categories.resources, options.courseModule);

                    if (resources) { $rootScope.resources = resources.location }

                    if (submenu) {
                        $rootScope.courseMenuImg = $rootScope.resources + submenu.menuImg;
                        $rootScope.courseMenuImgStyles = submenu.menuImgStyles;
                    }

                    var headerImg = localStorageService.get($rootScope.categories.headerImg, options.courseModule);

                    if (headerImg) {
                        $rootScope.headerImg = headerImg.img;
                    }
                }

                // ======================================================================================
                // $rootScope course basic info
                // ======================================================================================

                if (!$rootScope.hasOwnProperty('class')) {
                    var courseInfo = localStorageService.get($rootScope.categories.courseInfo, options.courseModule);

                    if (courseInfo) {
                        $rootScope.class = courseInfo.class;
                        $rootScope.grade = courseInfo.grade;
                    }
                }

                // ======================================================================================
                // $rootScope routes
                // ======================================================================================

                $rootScope.lessonIndex = 0; // sets the actual index of lessons.
                $rootScope.lessonsRoutesArray = [$rootScope.rootRoute];

                var routePath = false,
                    hiddenUrl = false;

                //Generates the routes
                self.routeProvider.when('/', {
                        templateUrl: 'home',
                        controller: 'homeCtrl'
                });

                // Include all the lessons in a linear array
                if ($rootScope.hasOwnProperty("course")) {
                    var courseList = $rootScope.course[$rootScope.courseModule];

                    for (var i = 0; i < 2; i++) {
                        // for (var j = 0; j < 5; j++) {
                        //     self.routeProvider.when(courseList[i][j].template, {
                        //         templateUrl: courseList[i][j].template
                        //     });

                        //     $rootScope.lessonsRoutesArray.push(courseList[i][j].template);
                        // }
                        angular.forEach(courseList[i], function (value, key) {
                            self.routeProvider.when(value.template, {
                                templateUrl: value.template
                            });

                            $rootScope.lessonsRoutesArray.push(value.template);
                        });
                    }
                }

                $rootScope.routesArray = [];
                $rootScope.routesArray.push("/");

                // Set conceps and activites pages only on lessons modules
                if (0 < activities) {

                    var current = courseProgressService.getCurrentLesson($rootScope.courseModule);

                    if (!current.enabled) {
                        $rootScope.$apply(function () {
                            // console.log($rootScope.rootRoute);
                            $window.location.href = $rootScope.rootRoute; 
                        });
                    }
                    
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

                    // self.stateProvider.state('activities', {
                    //     abstract: true,
                    //     url: '/actividad',
                    //     tamplateUrl: '/partials/activities_template.html'
                    // });

                    // for (var d = 1; d <= activities; d++) {
                    //     routePath = self.pad(d, 2);
                    //     hiddenUrl = self.randomString(20);

                    //     self.stateProvider.state('activities.a' + routePath, {
                    //         url: '/' + hiddenUrl,
                    //         templateUrl: 'a' + routePath,
                    //         controller: 'a' + routePath + 'Ctrl'
                    //     });

                    //     $rootScope.routesArray.push('/actividad/' + hiddenUrl);
                    // }

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

                $route.reload(); // Reload the router

                // if (!routeOptions.hasOwnProperty("parent") || false !== routeOptions.parent) {
                //     console.log(routeOptions);

                //     var currentRoute = $location.path(),
                //         routeVals = currentRoute.split("/"),
                //         guidePath = routeOptions.guide,
                //         lessonPath = routeOptions.lesson,
                //         routePath = false;

                //     for (var k = 1; k <= activities; k++) {
                //         routePath = self.pad(k, 2);
                //         route = currentRoute + '/guia' + guidePath + '/lesson' + lessonPath + '/' + routePath;
                //         self.routeProvider.when(currentRoute + '/guia' + guidePath + '/lesson' + lessonPath + '/' + routePath, {
                //             templateUrl: 'a' + routePath,
                //             controller: 'a' + routePath + 'Ctrl' 
                //         });

                //         $rootScope.routesArray.push(route);
                //     }

                //     // if (currentRoute) {
                //     //     self.routeProvider.otherwise({
                //     //         redirectTo: currentRoute + '/guia01/lesson01/01'
                //     //     });
                //     // } else {
                //     //     self.routeProvider.otherwise({
                //     //         redirectTo: '/primero/esp/guia01/lesson01/01'
                //     //     });
                //     // }

                //     $route.reload(); // Reload the router
                // }


                angular.forEach(options, function (value, key) {
                    $rootScope[key] = value;
                });

                $log.log($window.location.pathname.slice(".html#/"));

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
                    var lessonPath = $window.location.pathname.slice(".html");
                    $rootScope.lessonIndex = $rootScope.lessonsRoutesArray.indexOf(lessonPath + "#/");

                    // By default, this property is true, allows disable/enable prev function
                    $rootScope.isBackEnabled = true;

                });

                /**
                 * Go to the previous route.
                 */
                $rootScope.goPrev = function () {
                    if (!$rootScope.isBackEnabled) { return; }
                    // if ($rootScope.routeIndex > 0) {
                    //     $location.path($rootScope.routesArray[$rootScope.routeIndex - 1]);
                    // }
                    if (0 === $rootScope.routeIndex) {
                        $location.path("/");
                    } else if (0 < $rootScope.routeIndex) {
                        $location.path($rootScope.routesArray[$rootScope.routeIndex - 1]);
                    } else if (0 !== $rootScope.lessonRouteIndex) {
                        $location.path($rootScope.lessonsRoutesArray[$rootScope.lessonIndex - 1]);
                    } else {

                    }
                };


                /**
                 * Go to the next route.
                 */
                $rootScope.goNext = function () {
                    if (!$rootScope.lesson[$rootScope.routeIndex + 1].enabled) { return; }
                    // if ($rootScope.routeIndex !== $rootScope.routesArray.length - 1) {
                    //     $location.path($rootScope.routesArray[$rootScope.routeIndex + 1]);
                    // }
                    if (0 < activities) {
                        if ($rootScope.routeIndex === $rootScope.routesArray.length - 1) {
                            $location.path($rootScope.lessonsRoutesArray[$rootScope.lessonIndex + 1]);
                        } else {
                            $location.path($rootScope.routesArray[$rootScope.routeIndex + 1]);
                        }

                        return;
                    }

                    $window.location.href = $rootScope.lessonsRoutesArray[$rootScope.lessonIndex + 1];
                };

            });
        }
    };

};