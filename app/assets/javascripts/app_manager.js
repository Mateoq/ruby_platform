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

        configModule: function (app, options) {

            var self = this;

            // $routeProvider reference
            app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
                self.routeProvider = $routeProvider;
                $locationProvider.html5Mode(true);
                $httpProvider.defaults.headers.common['X-CSRF-Token'] =
                    $('meta[name=csrf-token]').attr('content');
            }]);

            /**
             * esta función de angular es especial
             * y nos permite definir gran cantidad de configuraciones de la aplicación.
             */
            app.run(['$rootScope', '$location', '$route',  '$log', '$window', 'lessonsProgressService', 'localStorageService', function ($rootScope, $location, $route,  $log, $window, lessonsProgressService, localStorageService) {
                console.log(gon);
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

                // $log.log($rootScope);

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
                

                // Set conceps and activites pages only on lessons modules
                if (gon.hasOwnProperty('lesson_structure')) {
                    
                    $rootScope.routesArray = [];
                    
                    $rootScope.routeIndex = 0; // sets the actual index in routes.
                    // $rootScope.totalConcepts = concepts; // total number of concepts.
                    // $rootScope.totalActivities = activities; // total number of activities.

                    // Set concepts routes
                    angular.forEach(gon.lesson_structure, function (structure, key) {
                        self.routeProvider.when('/' + structure.url_name, {
                            templateUrl: structure.url_name,
                            controller: structure.url_name + 'Ctrl'
                        });

                        $rootScope.routesArray.push('/' + structure.url_name);
                    });

                    // Initialize lessons
                    // if (options.hasOwnProperty("id")) {
                    //     lessonsProgressService.initLesson(options.id, concepts, $rootScope.routesArray);
                    // }

                    // Get progress of current lesson
                    // if (!$rootScope.hasOwnProperty("lesson")) {
                    //     $rootScope.lesson = lessonsProgressService.getLesson(options.id);
                    // }
                    self.routeProvider.otherwise({
                        redirectTo: '/' + gon.lesson_structure[0].url_name
                    });
                } else {
                    self.routeProvider.when('/', {
                        templateUrl: 'home',
                        controller: 'homeCtrl'
                    });

                    self.routeProvider.otherwise({
                        redirectTo: '/'
                    });
                }

                $route.reload();

                angular.forEach(options, function (value, key) {
                    $rootScope[key] = value;
                });

                // Each time the route change, activates each functionality
                $rootScope.$on("$routeChangeStart", function (event, next, current) {

                    if (0 === gon.course_structure.pr_type) return;

                    if (gon.hasOwnProperty('lesson_structure')) {
                        $rootScope.routeIndex = $rootScope.routesArray.indexOf($location.path());
                    }

                    var lesson = $rootScope.routesArray[$rootScope.routeIndex + 1];

                    $rootScope.isNextEnabled = false;

                    if (lesson) {
                        if (gon.lesson_progress[lesson.substr(1)].enabled)
                            $rootScope.isNextEnabled = true;
                    }

                    if ($rootScope.routeIndex === 0)
                        $rootScope.isBackEnabled = false;
                    else
                        $rootScope.isBackEnabled = true; // By default, this property is true, allows disable/enable prev function
                });

                /**
                 * Go to the previous route.
                 */
                $rootScope.goPrev = function () {

                    if (!$rootScope.isBackEnabled || $rootScope.routeIndex === 0) { return; }

                    // if (0 === $rootScope.routeIndex) {
                    //     $location.path("/");
                    // } else if (0 < $rootScope.routeIndex) {
                    $location.path($rootScope.routesArray[$rootScope.routeIndex - 1]).replace();
                    // }
                };


                /**
                 * Go to the next route.
                 */
                $rootScope.goNext = function () {
                    var lesson = $rootScope.routesArray[$rootScope.routeIndex + 1];
                    if (!gon.lesson_progress[lesson.substr(1)].enabled) { return; }

                    // if (0 < activities) {
                    $location.path(lesson);

                    //     return;
                    // }

                    // $window.location.href = $rootScope.lessonsRoutesArray[$rootScope.lessonIndex + 1];
                };

            }]);
        }
    };

};