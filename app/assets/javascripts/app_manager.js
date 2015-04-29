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
            app.run(['$rootScope', '$location', '$route',  '$log', '$window', '$document', '$timeout', 'lessonsProgressService', 'localStorageService', 'ngAudio', function ($rootScope, $location, $route,  $log, $window, $document, $timeout, lessonsProgressService, localStorageService, ngAudio) {
                console.log(gon);
                // console.log(Routes);
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


                // ======================================================================================
                // $rootScope properties
                // ======================================================================================
                $rootScope.courseApp = gon.course_app;
                $rootScope.className = gon.course_structure.class_name;

                angular.forEach(options, function (value, key) {
                    $rootScope[key] = value;

                    if ('resources' === key && 2 === gon.course_structure.pr_type) {
                        $rootScope[key] = value + $rootScope.courseApp + '/';
                    }
                });

                // $rootScope.schemes = {};

                // angular.forEach(gon.schemes, function (scheme, key) {
                //     scheme.scheme = angular.fromJson(scheme.scheme);

                //     $rootScope.schemes[scheme.stage] = scheme;
                // });

                // ======================================================================================
                // Init audio
                // ======================================================================================
                //$rootScope.audio = ngAudio.load($rootScope.resources + gon.course_app + '.mp3');

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

                    angular.element('.slider-navbar').removeClass('active');

                    if (2 === gon.course_structure.pr_type) {
                        $rootScope.currentItem = gon.lesson_structure[$rootScope.routeIndex].url_name;
                        if (angular.isDefined(gon.lesson_structure[$rootScope.routeIndex + 1])) {
                            $rootScope.nextItem = gon.lesson_structure[$rootScope.routeIndex + 1].url_name;
                        } else {
                            $rootScope.nextItem = null;
                        }
                        $rootScope.lessonProgress = gon.lesson_progress;
                    }
                    //if (false === $rootScope.audio.paused) {
                    //    // $rootScope.audio.setCurrentTime($rootScope.audioEnd);
                    //    $rootScope.audio.stop();
                    //    // $rootScope.audio = null;
                    //    // $rootScope.audio = ngAudio.load($rootScope.resources + gon.course_app + '.mp3');
                    //}

                });

                // $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
                //     $timeout(function () {
                        
                //     }, 1500);
                // });
                    
                /**
                 * Method to shuffle arrays
                 */
                //$rootScope.onStartAudio = function (item) {
                //    if (false === $rootScope.audio.paused) {
                //        // $rootScope.audio.setCurrentTime($rootScope.audioEnd);
                //        // $rootScope.audio.reset();
                //        $rootScope.audio.stop();
                //    }
                //
                //    console.log($rootScope.audio);
                //    $rootScope.audio.setCurrentTime(item.start);
                //    $rootScope.audioEnd = item.end;
                //    $rootScope.audio.play();
                //
                //    $rootScope.$watch('audio.currentTime', function (newValue, oldValue) {
                //        if (newValue >= item.end && false === $rootScope.audio.paused) {
                //            $rootScope.audio.stop();
                //        }
                //    });
                //};

                /**
                 * Method to shuffle arrays
                 */
                $rootScope.shuffle = function (a) {
                    for(var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
                    return a;  
                };

                /**
                 * Show slider
                 */
                $rootScope.showSlider = function ($event) {
                    var $el = angular.element($event.currentTarget);

                    $el.addClass('slider-hover');
                };

                /**
                 * Show slider
                 */
                $rootScope.hideSlider = function ($event) {
                    var $el = angular.element($event.currentTarget),
                        $navbar = $el.find('.slider-navbar');

                    if (false === $el.is(':hover')) {
                        $el.removeClass('slider-hover');

                        if ($navbar.hasClass('active'))
                            $navbar.removeClass('active');
                    }
                };

                /**
                 * Go to the previous route.
                 */
                $rootScope.goPrev = function () {
                    if (!$rootScope.isBackEnabled || $rootScope.routeIndex === 0) { return; }

                    // if (0 === $rootScope.routeIndex) {
                    //     $location.path("/");
                    // } else if (0 < $rootScope.routeIndex) {
                    angular.element('body').fadeOut(300);

                    // if ($rootScope.hasOwnProperty('game')) {
                    //     $rootScope.game.destroy();
                    //     $rootScope.game = null;
                    //     delete $rootScope.game
                    //     $window.location.reload();
                    // }

                    $location.path($rootScope.routesArray[$rootScope.routeIndex - 1]).replace();
                };


                /**
                 * Go to the next route.
                 */
                $rootScope.goNext = function () {
                    if ($rootScope.routeIndex === $rootScope.routesArray.length - 1) return;

                    var lesson = $rootScope.routesArray[$rootScope.routeIndex + 1];
                    if (!$rootScope.lessonProgress[lesson.substr(1)].enabled) { return; }

                    // if ($rootScope.hasOwnProperty('game')) {
                    //     $rootScope.game.destroy();
                    //     $rootScope.game = null;
                    // }

                    $rootScope.activeMessage = false;
                    // if (0 < activities) {
                    angular.element('body').fadeOut(300);

                    // if ($rootScope.hasOwnProperty('game')) {
                    //     $rootScope.game.destroy();
                    //     $rootScope.game = null;
                    //     delete $rootScope.game
                    //     $window.location.reload();
                    // }

                    $location.path(lesson);
                };

                /**
                 * Method to merge two objects in te first one
                 */
                $rootScope.mergeObjects = function (obj1, obj2) {
                    angular.forEach(obj2, function(value, key){
                        obj1[key] = value;
                    });

                    return obj1;
                };

            }]);
        }
    };

};