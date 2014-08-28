var templates = angular.module('templates', ['modules']);
// ------------------------------------------------------------------
// AppManager
// ------------------------------------------------------------------
// Configures the angular app with an sequential routing system and lock
// of activities. In the same way, this configurator module generates an array
// of routes used by the user to generate a dynamic navigation menu.
var AppManager = function () {
  return {
    routeProvider: {},
    pad: function (num, size) {
      return ('000000000' + num).substr(-size);
    },
    randomString: function (length) {
      var result = '', chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (var i = length; i > 0; --i)
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
    },
    configModule: function (app, concepts, activities, options) {
      var self = this;
      // $routeProvider reference
      app.config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider, $locationProvider) {
          self.routeProvider = $routeProvider;  // $locationProvider.html5Mode(true);
        }
      ]);
      /**
             * esta función de angular es especial
             * y nos permite definir gran cantidad de configuraciones de la aplicación.
             */
      app.run([
        '$rootScope',
        '$location',
        '$route',
        '$log',
        '$window',
        'courseProgressService',
        'lessonsProgressService',
        'rootRouteService',
        'localStorageService',
        function ($rootScope, $location, $route, $log, $window, courseProgressService, lessonsProgressService, rootRouteService, localStorageService) {
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
          if (options.hasOwnProperty('id')) {
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
          if (options.hasOwnProperty('guides') && !options.hasOwnProperty('id')) {
            // courseModuleService.set(options.courseModule);
            if (!$rootScope.hasOwnProperty('course')) {
              courseProgressService.initCourse(options.courseModule, options.guides);
              rootRouteService.set($window.location.href, options.courseModule);
              localStorageService.add($rootScope.categories.submenuImg, options.courseModule, {
                menuImg: options.menuImg,
                menuImgStyles: options.menuImgStyles
              });
              localStorageService.add($rootScope.categories.resources, options.courseModule, { location: options.resources });
              // Save base course info
              localStorageService.add($rootScope.categories.courseInfo, options.courseModule, {
                class: options.class,
                grade: options.grade
              });
              // Save header image
              localStorageService.add($rootScope.categories.headerImg, options.courseModule, { img: options.headerImg });
            }
            // Init introduction click here guide
            if (!localStorageService.get($rootScope.categories.clickHere, options.courseModule)) {
              localStorageService.add($rootScope.categories.clickHere, options.courseModule, { done: false });
              localStorageService.add($rootScope.categories.menuClickHere, options.courseModule, { done: false });
            }
          }
          // Get the progress of the current course en get the current root route
          if (!$rootScope.hasOwnProperty('courseModule')) {
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
          if (options.hasOwnProperty('id')) {
            courseProgressService.setCurrentLesson(options.guide, options.id, $rootScope.courseModule);
          }
          // Get the progress of the lessons
          if (!$rootScope.hasOwnProperty('course')) {
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
            var submenu = localStorageService.get($rootScope.categories.submenuImg, options.courseModule), resources = localStorageService.get($rootScope.categories.resources, options.courseModule);
            if (resources) {
              $rootScope.resources = resources.location;
            }
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
          $rootScope.lessonIndex = 0;
          // sets the actual index of lessons.
          $rootScope.lessonsRoutesArray = [$rootScope.rootRoute];
          var routePath = false, hiddenUrl = false;
          //Generates the routes
          self.routeProvider.when('/', {
            templateUrl: 'home',
            controller: 'homeCtrl'
          });
          // Include all the lessons in a linear array
          if ($rootScope.hasOwnProperty('course')) {
            var courseList = $rootScope.course[$rootScope.courseModule];
            for (var i = 0; i < 2; i++) {
              // for (var j = 0; j < 5; j++) {
              //     self.routeProvider.when(courseList[i][j].template, {
              //         templateUrl: courseList[i][j].template
              //     });
              //     $rootScope.lessonsRoutesArray.push(courseList[i][j].template);
              // }
              angular.forEach(courseList[i], function (value, key) {
                self.routeProvider.when(value.template, { templateUrl: value.template });
                $rootScope.lessonsRoutesArray.push(value.template);
              });
            }
          }
          $rootScope.routesArray = [];
          $rootScope.routesArray.push('/');
          // Set conceps and activites pages only on lessons modules
          if (0 < activities) {
            var current = courseProgressService.getCurrentLesson($rootScope.courseModule);
            if (!current.enabled) {
              $rootScope.$apply(function () {
                // console.log($rootScope.rootRoute);
                $window.location.href = $rootScope.rootRoute;
              });
            }
            $rootScope.routeIndex = 0;
            // sets the actual index in routes.
            $rootScope.totalConcepts = concepts;
            // total number of concepts.
            $rootScope.totalActivities = activities;
            // total number of activities.
            // Set concepts routes
            for (var c = 1; c <= concepts; c++) {
              routePath = self.pad(c, 2);
              // hiddenUrl = self.randomString(20);
              self.routeProvider.when('/c' + routePath, {
                templateUrl: 'c' + routePath,
                controller: 'c' + routePath + 'Ctrl'
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
            if (options.hasOwnProperty('id')) {
              lessonsProgressService.initLesson(options.id, concepts, $rootScope.routesArray);
            }
            // Get progress of current lesson
            if (!$rootScope.hasOwnProperty('lesson')) {
              $rootScope.lesson = lessonsProgressService.getLesson(options.id);
            }
          }
          self.routeProvider.otherwise({ redirectTo: '/' });
          $route.reload();
          // Reload the router
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
          $log.log($window.location.pathname.slice('.html#/'));
          // Each time the route change, activates each functionality
          $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (0 < activities) {
              $rootScope.routeIndex = $rootScope.routesArray.indexOf($location.path());
              lessonsProgressService.setCurrent($rootScope.routeIndex, $rootScope.id);
              var lesson = lessonsProgressService.getLesson(options.id), currentPart = lessonsProgressService.getCurrent(lesson);
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
            var lessonPath = $window.location.pathname.slice('.html');
            $rootScope.lessonIndex = $rootScope.lessonsRoutesArray.indexOf(lessonPath + '#/');
            // By default, this property is true, allows disable/enable prev function
            $rootScope.isBackEnabled = true;
          });
          /**
                 * Go to the previous route.
                 */
          $rootScope.goPrev = function () {
            if (!$rootScope.isBackEnabled) {
              return;
            }
            // if ($rootScope.routeIndex > 0) {
            //     $location.path($rootScope.routesArray[$rootScope.routeIndex - 1]);
            // }
            if (0 === $rootScope.routeIndex) {
              $location.path('/');
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
            if (!$rootScope.lesson[$rootScope.routeIndex + 1].enabled) {
              return;
            }
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
        }
      ]);
    }
  };
};
(function () {
  var appManagerDirectives = angular.module('appManagerDirectives', ['modules']);
  // =================================================================================
  //  Directive for multi transclusion.
  // =================================================================================
  appManagerDirectives.directive('ngMultiTransclude', function () {
    return {
      controller: [
        '$scope',
        '$element',
        '$attrs',
        '$transclude',
        function ($scope, $element, $attrs, $transclude) {
          if (!$transclude) {
            throw {
              name: 'DirectiveError',
              message: 'ng-multi-transclude found without parent requesting transclusion'
            };
          }
          this.$transclude = $transclude;
        }
      ],
      link: function ($scope, $element, $attrs, controller) {
        var selector = '[name=' + $attrs.ngMultiTransclude + ']';
        var attach = function (clone) {
          var $part = clone.find(selector).addBack(selector);
          $element.html('');
          $element.append($part.html());
        };
        if (controller.$transclude.$$element) {
          attach(controller.$transclude.$$element);
        } else {
          controller.$transclude(function (clone) {
            controller.$transclude.$$element = clone;
            attach(clone);
          });
        }
      }
    };
  });
  // =================================================================================
  //  Directive for Lesson page styles and functionality
  // =================================================================================
  appManagerDirectives.directive('ngPage', [
    '$document',
    '$window',
    function ($document, $window) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var $page = angular.element(element);
          if (!scope.$root.hasOwnProperty('totalActivities')) {
            return;
          }
          resizePage();
          angular.element($window).on('resize', function (event) {
            resizePage();
          });
          if (0 === scope.$root.routeIndex) {
            $page.addClass('pr-lesson-intro');
          }
          function resizePage() {
            var h = $document[0].documentElement.clientHeight - 43 + 'px';
            var w = $document[0].documentElement.clientWidth + 'px';
            $page[0].style.height = h;
            $page[0].style.width = w;
          }
        }
      };
    }
  ]);
  // =================================================================================
  //  Directive for header functionality
  // =================================================================================
  appManagerDirectives.directive('ngHeader', [
    '$rootScope',
    function ($rootScope) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.showTitle = true;
          var $drop = element.find('#pr_header_dropdown_menu');
          scope.onHeaderEnter = function () {
            scope.showTitle = false;
          };
          scope.onHeaderLeave = function () {
            scope.showTitle = true;
          };
        }
      };
    }
  ]);
  // Generates a slider integrated with AppManager functionality
  appManagerDirectives.directive('appmSlider', [
    '$timeout',
    '$location',
    '$rootScope',
    '$compile',
    function ($timeout, $location, $rootScope, $compile) {
      return {
        replace: true,
        template: '<div class="menu-slider-container">\n    <div class="menu-slider-bg"></div>\n    <div class="menu-slider-content">\n        <div class="__slider__"></div>\n    </div>\n</div>\n',
        link: function (scope, element, attrs) {
          var $elem = $(element.find('.__slider__')),
            // Element in JQuery form
            $handler = false,
            // var for the handler
            $sliderMenu = false,
            // Menu element inserted into the handler
            $sliderBg = false, created = false;
          // if the slider has been created
          scope.showingMenu = false;
          // After dom loading, activate JQuery UI Slider
          $timeout(function () {
            $elem.slider({
              min: 1,
              max: $rootScope.routesArray.length,
              value: scope.$root.routeIndex + 1,
              create: function (event, ui) {
                created = true;
                // With this, we can use the $watch of routeIndex
                $handler = $('.__slider__ .ui-slider-handle');
                // updates the handler
                var v = $rootScope.routeIndex + 1 || 1;
                $handler.attr('data-number', v);
                // Change the attr based in the actual route
                $sliderBg = $('.menu-slider-bg');
                // Get the slider bg
                var w = $handler.attr('style').split(' ')[1];
                $sliderBg.css('width', w.split(';')[0]);
                // Initiate the slider bg width
                $sliderMenu = angular.element('<div data-appm-slider-menu="showingMenu"></div>\n');
                // Create the element
                $handler.append($compile($sliderMenu)(scope));
                // Append the appmSliderMenu
                // Configures the position dynamically
                $sliderMenu.css('margin-left', ($handler.outerWidth() - $sliderMenu.outerWidth()) / 2 + 'px');
                // On click, show and hide the appmSliderMenu
                $handler.on('dblclick', function (e) {
                  e.stopPropagation();
                  scope.showingMenu = !scope.showingMenu;
                  // Toggle the menu
                  scope.$apply();
                });
              },
              stop: function (event, ui) {
                // TODO: Limit the activities.
                $(ui.handle).attr('data-number', ui.value);
                $location.path(scope.$root.routesArray[ui.value - 1]);
                // Change the route
                scope.$apply();  // Apply the change of location
              },
              slide: function (event, ui) {
                // On slide, show the number of the value
                // We use data-number, because we want to use the value
                // using content: attr() in css in the ::after pseudo element.
                // console.log($sliderBg);
                // console.log(ui.handle.attributes.style.textContent);
                // $sliderBg.attr("style", ui.handle.attributes.style.value.split(" ")[1]);
                // $(ui.handle).attr("data-number", ui.value);
                return false;
              },
              change: function (event, ui) {
                var w = ui.handle.attributes.style.value.split(' ')[1];
                $sliderBg.animate({ width: w.split(';')[0] }, 200);
              }
            });  // JQuery Slider
          });
          // Timeout
          // When routeIndex changes, set the value in the slider
          $rootScope.$watch('routeIndex', function (val) {
            // if the slider already exist
            if (created) {
              $elem.slider('option', 'value', val + 1);
              // Updates the value
              $handler.attr('data-number', val + 1);  // Updates de data-number for after pseudo element
            }
          });
        }
      };
    }
  ]);
  appManagerDirectives.directive('appmSliderMenu', [
    '$rootScope',
    '$location',
    'lessonsProgressService',
    function ($rootScope, $location, lessonsProgressService) {
      return {
        replace: true,
        template: '<div class="slider-navbar" ng-class="{ active: active }">\n    <div class="slider-navbar-content">\n        <ul>\n            <li ng-repeat="sub in $root.lesson"><a ng-submenu-item-slider href="{{currentLocation + \'#\' + sub.link}}" ng-class="{\'disabled\': !sub.enabled}" ng-click="setCurrent($index)" ng-disabled="!sub.enabled">{{sub.name}}</a></li>\n                </ul>\n    </div>\n</div>',
        scope: { active: '=appmSliderMenu' },
        link: function (scope, element, attrs) {
          w = $location.absUrl();
          scope.currentLocation = w.split('#/')[0];
          // scope.currentLocation = scope.currentLocation.replace(/\/$/, '');
          element.bind('click', function (e) {
            if (e.target.tagName !== 'A') {
              e.preventDefault();  // Prevent default for each element different to Anchor
            }
            scope.$parent.showingMenu = !scope.$parent.showingMenu;
            e.stopPropagation();  // Prevent bubbling
          });
          scope.setCurrent = function (index) {
            lessonsProgressService.setCurrent(index, scope.$root.id);
          };
        }
      };
    }
  ]);
  appManagerDirectives.directive('ngSubmenuItemSlider', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function (event) {
          if (false === scope.sub.enabled) {
            return false;
          }
        });
      }
    };
  });
  appManagerDirectives.directive('ngLeftMenuItemManage', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (false === scope.lesson.enabled || true === scope.lesson.current) {
          element.bind('click', function (e) {
            e.preventDefault();
            return false;
          });
        }
      }
    };
  });
  appManagerDirectives.directive('ngLateralMenu', [
    '$timeout',
    'localStorageService',
    function ($timeout, localStorageService) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          var menu = $('#left-menu'), content = $('#course-content'), submenuClass = 'mp-level', submenuParentClass = 'icon-left-arrow', leftMenuWidth = menu.outerWidth(),
            // Width for animation
            menuVisibility = false,
            // Actual visibility
            menuAnimDuration = 300;
          // Recognize the elements with submenu
          // First, find the 'li' elements with submenus
          var liWithSubMenu = menu.find('.' + submenuClass).parent('li');
          // Add the class in each parent of submenu
          $.each(liWithSubMenu, function (index, element) {
            $(element).addClass(submenuParentClass);
          });
          // Open the main menu
          $('.toggle-left-menu').click(function () {
            $(this).toggleClass('active');
            // toggles the class
            if (menuVisibility) {
              $(this).addClass('delay');
              hideMenu(menu);  // content.animate({
                               //         paddingLeft: 0
                               //     },
                               //     menuAnimDuration,
                               //     function () {
                               //         // On complete, remove the submenus
                               //         $('.submenu-clone').remove();
                               //     }
                               // );
            } else {
              $(this).removeClass('delay');
              showMenu(menu);  // content.animate({
                               //     paddingLeft: leftMenuWidth
                               // }, menuAnimDuration);
            }
            // Switches the boolean
            menuVisibility = !menuVisibility;
            var menuClickHere = localStorageService.get(scope.$root.categories.menuClickHere, scope.$root.courseModule);
            if (!menuClickHere.done) {
              angular.element('.pr-intro-welcome-cont .pr-icon-click-here').fadeOut('fast');
              localStorageService.add(scope.$root.categories.menuClickHere, scope.$root.courseModule, { done: true }, true);
              scope.$root.menuClickHere = localStorageService.get(scope.$root.categories.menuClickHere, scope.$root.courseModule);
            }
          });
          // Open Sub menus
          $('.' + submenuParentClass + '> a').click(function () {
            var submenuClone = $(this).siblings('.mp-level').clone();
            submenuClone.css({ left: -leftMenuWidth }).addClass('submenu-clone');
            menu.append(submenuClone);
            submenuClone.animate({ left: 0 }, menuAnimDuration);
          });
          // Hide opened submenu
          $(document).on('click', '.mp-back a', function () {
            var parentMenu = $(this).closest('.' + submenuClass);
            hideMenu(parentMenu);
          });
          // FUNCTIONS
          function showMenu(menuElement) {
            menuElement.animate({ left: 0 }, menuAnimDuration);
          }
          function hideMenu(menuElement) {
            menuElement.animate({ left: -leftMenuWidth }, menuAnimDuration);
          }
          scope.showSubmenu = function ($event, scope) {
            if (scope.subActive) {
              return;
            }
            var target = $event.currentTarget;
            // angular.element(target).find('.left-menu-add').animate({
            //     left: '100%'},
            //     100, 'swing', function() {
            //     var self = this;
            //     $timeout(function () {
            //         angular.element(self).css('z-index', '10');
            //         scope.subActive = true;
            //     }, 250);
            // });
            angular.element(target).find('.left-menu-add').css('display', 'block');
            angular.element(target).find('.left-menu-add').animate({
              width: 230,
              opacity: 1
            }, 100, 'swing');
            // $(target).find('.left-menu-add').delay(300).css('z-index', '10');
            scope.subActive = true;
          };
          scope.hideSubmenu = function ($event, scope) {
            if (!scope.subActive) {
              return;
            }
            var target = $event.currentTarget;
            // angular.element(target).find('.left-menu-add').css('z-index', '-1');
            angular.element(target).find('.left-menu-add').animate({
              width: '0',
              opacity: 0
            }, 100, 'swing', function () {
              $timeout(function () {
                angular.element(target).find('.left-menu-add').css('display', 'none');
              }, 150);
            });
            scope.subActive = false;
          };
        }
      };
    }
  ]);
  appManagerDirectives.directive('ngModalEffect', [
    '$timeout',
    'localStorageService',
    function ($timeout, localStorageService) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          var overlay = document.querySelector('.md-overlay');
          [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
            var modal = document.querySelector('#' + el.getAttribute('data-modal')), close = modal.querySelector('.md-close'), clickHere = localStorageService.get(scope.$root.categories.clickHere, scope.$root.courseModule);
            if (clickHere.done) {
              angular.element('.menu-button').css({
                display: 'block',
                opacity: '1'
              });
              angular.element('.pr-icon-click-here.right').css('display', 'none');
            }
            function removeModal(hasPerspective) {
              classie.remove(modal, 'md-show');
              if (hasPerspective) {
                classie.remove(document.documentElement, 'md-perspective');
              }
            }
            function removeModalHandler() {
              removeModal(classie.has(el, 'md-setperspective'));
            }
            el.addEventListener('click', function (ev) {
              classie.add(modal, 'md-show');
              overlay.removeEventListener('click', removeModalHandler);
              overlay.addEventListener('click', removeModalHandler);
              if (classie.has(el, 'md-setperspective')) {
                setTimeout(function () {
                  classie.add(document.documentElement, 'md-perspective');
                }, 25);
              }
            });
            close.addEventListener('click', function (ev) {
              ev.stopPropagation();
              removeModalHandler();
              if (!clickHere.done) {
                $timeout(function () {
                  angular.element('.pr-icon-click-here.right').fadeOut('fast');
                  angular.element('.pr-intro-welcome-cont .pr-icon-click-here').addClass('scale-animation').delay(1000).css('opacity', '1');
                  angular.element('.menu-button').addClass('scale-animation pr-block').delay(1000).css('opacity', '1');
                }, 500);
                localStorageService.add(scope.$root.categories.clickHere, scope.$root.courseModule, { done: true }, true);
                scope.$root.clickHere = localStorageService.get(scope.$root.categories.clickHere, scope.$root.courseModule);
              }
            });
          });
        }
      };
    }
  ]);
  appManagerDirectives.directive('ngBookblock', [
    '$rootScope',
    '$timeout',
    function ($rootScope, $timeout) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          var config = {
              $bookBlock: $('#bb-bookblock'),
              $navNext: $('#bb-nav-next'),
              $navPrev: $('#bb-nav-prev')
            }, resetPages = function () {
              config.$bookBlock.children().each(function (index, el) {
                $(el).css('opacity', 0);
              });
            }, opacityAnim = function (i) {
              var child = config.$bookBlock.children()[i];
              $(child).animate({ opacity: 1 }, 200);
            };
          $('#bb-nav-prev').fadeOut();
          resetPages();
          opacityAnim(0);
          config.$bookBlock.bookblock({
            speed: 800,
            shadowSides: 0.8,
            shadowFlip: 0.7,
            onEndFlip: function (old, page, isLimit) {
              var children = $('#bb-bookblock').children().length;
              if (0 != page) {
                $('#bb-nav-prev').fadeIn();
              } else {
                $('#bb-nav-prev').fadeOut();
              }
              if (children - 1 != page) {
                $('#bb-nav-next').fadeIn();
              } else {
                $('#bb-nav-next').fadeOut();
              }
              resetPages();
              opacityAnim(page);
            },
            onBeforeFlip: function (page) {
            }
          });
          var $slides = config.$bookBlock.children();
          // add navigation events
          config.$navNext.on('click touchstart', function () {
            config.$bookBlock.bookblock('next');
            return false;
          });
          config.$navPrev.on('click touchstart', function () {
            config.$bookBlock.bookblock('prev');
            return false;
          });
          // add swipe events
          // $slides.on( {
          //     'swipeleft' : function( event ) {
          //         config.$bookBlock.bookblock( 'next' );
          //         return false;
          //     },
          //     'swiperight' : function( event ) {
          //         config.$bookBlock.bookblock( 'prev' );
          //         return false;
          //     }
          // } );
          // add keyboard events
          $(document).keydown(function (e) {
            var keyCode = e.keyCode || e.which, arrow = {
                left: 37,
                up: 38,
                right: 39,
                down: 40
              };
            switch (keyCode) {
            case arrow.left:
              config.$bookBlock.bookblock('prev');
              break;
            case arrow.right:
              config.$bookBlock.bookblock('next');
              break;
            }
          });
        }
      };
    }
  ]);
  appManagerDirectives.directive('ngCustomScroll', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $(element).mCustomScrollbar();
      }
    };
  });
  appManagerDirectives.directive('ngInstructionBar', function () {
    return {
      templateUrl: '/templates/_instruction_bar.html',
      restrict: 'A',
      scope: { instruction: '=ngInstructionBar' },
      link: function postLink(scope, iElement, iAttrs) {
      }
    };
  });
  appManagerDirectives.directive('ngIntroIcons', [
    'iconsService',
    function (iconsService) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var json = {};
          iconsService.getIcons().then(function (data) {
            json = data;
            var i, j, tempArray, chunk = 5, icons = [];
            for (i = 0, j = json.icons.length; i < j; i += chunk) {
              tempArray = json.icons.slice(i, i + chunk);
              icons.push(tempArray);
            }
            scope.icons = icons;
          });
          scope.onOver = function ($event, icon, cont) {
            var target = $event.currentTarget;
            if (!cont.hasOwnProperty('active')) {
              cont.active = false;
            }
            // angular.element(target).animate({
            //     width: '76px',
            //     height: '76px',
            //     'background-position': icon.next},
            //     400); 
            if (cont.active) {
              return;
            }
            cont.active = !cont.active;
            angular.element(target).fadeOut('100', function () {
              angular.element(target).css({
                width: '76px',
                height: '76px',
                'background-position': icon.next
              }).fadeIn('100');
            });
          };
        }
      };
    }
  ]);
}());
(function () {
  var appManagerServices = angular.module('appManagerServices', []);
  // appManagerServices.factory("courseModuleService", ng(function ($window, $rootScope) {
  // 	var service = {};
  // 	angular.element($window).on("storage", function(event) {
  // 		if (event.key === "course-modules") {
  // 			$rootScope.$apply();
  // 		}
  // 	});
  // 	service.getAll = function () {
  // 		return $window.localStorage && angular.fromJson($window.localStorage.getItem("course-modules"));	
  // 	};
  // 	service.get = function (index) {
  // 		var modules = this.getAll();
  // 		return modules[index];
  // 	};
  // 	service.set = function (courseModule) {
  // 		var modules = this.getAll();
  // 		if (null === modules) {
  // 			modules = [];
  // 		}
  // 		modules.push(courseModule);
  // 		$window.localStorage && $window.localStorage.setItem("course-modules", angular.toJson(modules));
  // 		return modules.indexOf(courseModule);
  // 	};
  // 	return service;
  // }));
  // =================================================================================
  // 	Service to manage the whole course with its lessons
  // =================================================================================
  appManagerServices.factory('courseProgressService', [
    '$window',
    '$rootScope',
    '$location',
    function ($window, $rootScope, $location) {
      var service = {}, pad = function (num, size) {
          return ('000000000' + num).substr(-size);
        };
      angular.element($window).on('storage', function (event) {
        if (event.key === 'course-progress') {
          $rootScope.$apply();
        }
      });
      service.initCourse = function (courseModule, guides) {
        // if (null === this.course || typeof this.course === "undefined") {
        // 	this.course = {};
        // }
        var course = this.getLessons();
        if (!course) {
          course = {};
        }
        // If it's already set return
        if (course.hasOwnProperty(courseModule)) {
          this.resetCurrentLesson(courseModule);
          return;
        }
        var numTemplate = 1, aCourseModule = courseModule.split('-'), grades = {
            '01': 'primero',
            '02': 'segundo',
            '03': 'tercero',
            '04': 'cuarto',
            '05': 'quinto'
          };
        course[courseModule] = [];
        for (var i = 0; i < guides.length; i++) {
          var tempArray = {};
          for (var j = 0; j < guides[i]; j++) {
            var link = location.href + courseModule + '/0' + (i + 1) + '/' + courseModule + '0' + (j + 1), template = '/views/' + aCourseModule[0] + '/' + grades[aCourseModule[1]] + '/' + pad(numTemplate, 2) + '.html#/';
            if (0 === j && 0 === i) {
              tempArray[courseModule + '-' + pad(numTemplate, 2)] = {
                enabled: true,
                link: link,
                template: template,
                current: false
              };
            } else {
              tempArray[courseModule + '-' + pad(numTemplate, 2)] = {
                enabled: false,
                link: link,
                template: template,
                current: false
              };
            }
            numTemplate++;
          }
          course[courseModule].push(tempArray);
        }
        var encode = btoa(angular.toJson(course));
        $window.localStorage && $window.localStorage.setItem('course-progress', encode);
        return this;
      };
      service.resetCurrentLesson = function (courseModule) {
        var course = this.getLessons(), module = course[courseModule];
        for (var i = 0; i < module.length; i++) {
          angular.forEach(module[i], function (value, index) {
            value.current = false;
          });
        }
        course[courseModule] = module;
        var encode = btoa(angular.toJson(course));
        $window.localStorage && $window.localStorage.setItem('course-progress', encode);
        return this;
      };
      service.updateLessons = function (gIndex, lIndex, courseModule) {
        if (5 === lIndex) {
          gIndex++;
          if (2 === gIndex)
            return true;
        }
        var course = $window.localStorage && atob($window.localStorage.getItem('course-progress'));
        course[courseModule][gIndex][lIndex].enabled = true;
        lIndex++;
        var encode = btoa(angular.toJson(course));
        $window.localStorage && $window.localStorage.setItem('course-progress', encode);
        return this;
      };
      service.getLessons = function () {
        var item = $window.localStorage && $window.localStorage.getItem('course-progress'), decode = false;
        if (null !== item) {
          decode = angular.fromJson(atob(item));
        }
        return decode;
      };
      service.setCurrentLesson = function (guide, lesson, courseModule) {
        var course = this.getLessons();
        for (var i = 0; i < 2; i++) {
          angular.forEach(course[courseModule][i], function (value, key) {
            value.current = false;
          });
        }
        course[courseModule][guide][lesson].current = true;
        var encode = btoa(angular.toJson(course));
        $window.localStorage && $window.localStorage.setItem('course-progress', encode);
        return this;
      };
      service.getCurrentLesson = function (courseModule) {
        var course = this.getLessons(), current = {};
        for (var i = 0; i < 2; i++) {
          angular.forEach(course[courseModule][i], function (value, key) {
            if (value.current) {
              current = value;
            }
          });
        }
        return current;
      };
      return service;
    }
  ]);
  // =================================================================================
  // 	Service to manage each lesson's pages and its progress
  // =================================================================================
  appManagerServices.factory('lessonsProgressService', [
    '$window',
    '$rootScope',
    function ($window, $rootScope) {
      var service = {};
      angular.element($window).on('storage', function (event) {
        if (event.key === 'lessons-progress') {
          $rootScope.$apply();
        }
      });
      service.initLesson = function (id, concepts, lessonArray) {
        var lessons = this.getLessons();
        if (!lessons) {
          lessons = {};
        }
        // If it's already set return
        if (lessons.hasOwnProperty(id)) {
          return;
        }
        var lesson = [];
        for (var i = 0; i < lessonArray.length; i++) {
          var temp = {
              id: i,
              link: lessonArray[i]
            };
          temp.name = 'Actividad ' + (i - concepts);
          temp.current = false;
          if (0 === i) {
            temp.name = 'Introducci\xf3n';
            temp.current = true;
          } else if (concepts >= i) {
            temp.name = 'Conceptualizaci\xf3n ' + i;
          }
          temp.enabled = true;
          if (2 > i) {
            temp.enabled = true;
          }
          lesson.push(temp);
        }
        lessons[id] = lesson;
        var encode = btoa(angular.toJson(lessons));
        $window.localStorage && $window.localStorage.setItem('lessons-progress', encode);
        return this;
      };
      service.getLessons = function () {
        var item = $window.localStorage && $window.localStorage.getItem('lessons-progress'), decode = false;
        if (null !== item) {
          decode = angular.fromJson(atob(item));
        }
        return decode;
      };
      service.getLesson = function (id) {
        var lessons = this.getLessons();
        return lessons[id];
      };
      service.updateLesson = function (index) {
        var lesson = this.getLesson();
        if (lesson.length === index) {
          return true;
        }
        lesson[index++].enabled = true;
        var encode = btoa(angular.toJson(lesson));
        $window.localStorage && $window.localStorage.setItem('lessons-progress', encode);
        return this;
      };
      service.setCurrent = function (index, lessonId) {
        var lessons = this.getLessons();
        angular.forEach(lessons[lessonId], function (value, key) {
          value.current = false;
        });
        lessons[lessonId][index].current = true;
        var encode = btoa(angular.toJson(lessons));
        $window.localStorage && $window.localStorage.setItem('lessons-progress', encode);
        return this;
      };
      service.getCurrent = function (lesson) {
        var current = {};
        angular.forEach(lesson, function (value, key) {
          if (value.current) {
            current = value;
          }
        });
        return current;
      };
      service.getLastEnabled = function (id) {
        var lesson = this.getLesson(id), last = false;
        for (var i = 0; i < lesson.length; i++) {
          if (lesson[i].enabled) {
            last = lesson[i];
          }
        }
        return last;
      };
      return service;
    }
  ]);
  // =================================================================================
  // 	Service to get icons located in a json file
  // =================================================================================
  appManagerServices.factory('iconsService', [
    '$q',
    '$http',
    '$timeout',
    function ($q, $http, $timeout) {
      return {
        getIcons: function () {
          var deferred = $q.defer();
          $timeout(function () {
            $http.get('../data/icons.json').success(function (data) {
              deferred.resolve(data);
            });
          }, 30);
          return deferred.promise;
        }
      };
    }
  ]);
  // =================================================================================
  // 	Service to manage the root route in each course
  // =================================================================================
  appManagerServices.factory('rootRouteService', [
    '$window',
    function ($window) {
      var service = {};
      angular.element($window).on('storage', function (event) {
        if (event.key === 'root-route') {
          $rootScope.$apply();
        }
      });
      service.getAll = function () {
        var item = $window.localStorage && $window.localStorage.getItem('root-route'), decode = false;
        if (null !== item) {
          decode = angular.fromJson(atob(item));
        }
        return decode;
      };
      service.get = function (courseModule) {
        var urls = this.getAll();
        if (!urls) {
          return false;
        }
        if (angular.isUndefined(urls[courseModule])) {
          return false;
        }
        return urls[courseModule];
      };
      service.set = function (url, courseModule) {
        var urls = this.getAll();
        if (!urls) {
          urls = {};
        }
        // If it's already set return
        if (urls.hasOwnProperty(courseModule)) {
          return;
        }
        urls[courseModule] = url;
        var encode = btoa(angular.toJson(urls));
        $window.localStorage && $window.localStorage.setItem('root-route', encode);
        return this;
      };
      return service;
    }
  ]);
  // =================================================================================
  // 	Service to manage general local storage for the application
  // =================================================================================
  appManagerServices.factory('localStorageService', [
    '$window',
    '$rootScope',
    function ($window, $rootScope) {
      var service = {};
      angular.element($window).on('storage', function (event) {
        if (event.key === 'pr-data') {
          $rootScope.$apply();
        }
      });
      service.getAll = function () {
        var item = $window.localStorage && $window.localStorage.getItem('pr-data'), decode = false;
        if (null !== item) {
          decode = angular.fromJson(atob(item));
        }
        return decode;
      };
      service.get = function (category, courseModule) {
        var items = this.getAll();
        if (!items) {
          return false;
        }
        if (!items.hasOwnProperty(category)) {
          return false;
        }
        if (!items[category].hasOwnProperty(courseModule)) {
          return false;
        }
        return items[category][courseModule];
      };
      service.add = function (category, courseModule, values, update) {
        var items = this.getAll();
        update = angular.isUndefined(update) ? false : update;
        if (!update) {
          if (items.hasOwnProperty(category)) {
            if (items[category].hasOwnProperty(courseModule)) {
              return false;
            }
          }
          if (!items) {
            items = {};
          }
          if (!items.hasOwnProperty(category)) {
            items[category] = {};
          }
          if (!items[category].hasOwnProperty(courseModule)) {
            items[category][courseModule] = {};
          }
          ;
        }
        items[category][courseModule] = values;
        var encode = btoa(angular.toJson(items));
        $window.localStorage && $window.localStorage.setItem('pr-data', encode);
        return this;
      };
      return service;
    }
  ]);
}());
// Module than integrates the dependencies in each lesson.
var modules = angular.module('modules', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'appManagerDirectives',
    'appManagerServices',
    'templates'
  ]);
(function () {
  var esp01 = angular.module('esp01', ['modules']);
  AppManager().configModule(esp01, 0, 0, {
    grade: 'Grado 1\xb0',
    class: 'Lengua Castellana',
    courseModule: 'esp-01',
    guides: [3],
    resources: '../images/primero/esp/'
  });
  esp01.controller('homeCtrl', [
    '$scope',
    '$sce',
    'iconsService',
    function ($scope, $sce, iconsService) {
      $scope.courseIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.courseVideo = $sce.trustAsHtml('<iframe width="500" height="300" src="https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0" frameborder="0" ></iframe>');
      $scope.courseDuration = 'Los siguientes son los tiempos que el estudiante tiene estipulado para el desarrollo de cada gu\xeda.';
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
          title: 'Experto tem\xe1tico',
          name: 'xxx'
        },
        {
          title: 'Asesor\xeda en inclusi\xf3n educativa',
          name: 'xxx'
        },
        {
          title: 'Dise\xf1o mediacional',
          name: 'xxx'
        },
        {
          title: 'Dise\xf1o web',
          name: 'xxx'
        },
        {
          title: 'Dise\xf1o gr\xe1fico',
          name: 'xxx'
        },
        {
          title: 'Ilustraci\xf3n',
          name: 'xxx'
        },
        {
          title: 'A\xf1o',
          name: new Date().getFullYear()
        },
        {
          title: 'Versi\xf3n',
          name: '0.01'
        }
      ];
    }
  ]);
}());
(function () {
  var mat01 = angular.module('mat01', ['modules']);
  AppManager().configModule(mat01, 0, 0, {
    grade: '1\xb0',
    class: 'Matem\xe1ticas',
    courseModule: 'mat-01',
    guides: [
      1,
      1,
      1,
      1
    ],
    resources: '../images/primero/mat/',
    headerImg: 'header-matematicas-550.png',
    menuImg: 'matematicas_menu.png',
    menuImgStyles: 'left: -26px;bottom: 40px;width: 230px;'
  });
  mat01.controller('homeCtrl', [
    '$scope',
    '$sce',
    'iconsService',
    function ($scope, $sce, iconsService) {
      $scope.courseIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.courseVideo = $sce.trustAsHtml('<iframe width="500" height="300" src="https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0" frameborder="0" ></iframe>');
      $scope.iconsIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.credits = [
        {
          title: 'Experto tem\xe1tico',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Asesor\xeda pedag\xf3gica',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o mediacional',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o web',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o gr\xe1fico',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Ilustraci\xf3n',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'A\xf1o',
          name: new Date().getFullYear(),
          icon: 'pr-icon-tiny-calendar'
        },
        {
          title: 'Versi\xf3n',
          name: '0.01',
          icon: 'pr-icon-tiny-version'
        }
      ];
    }
  ]);
}());
(function () {
  var mat04 = angular.module('mat04', ['modules']);
  AppManager().configModule(mat04, 0, 0, {
    grade: '4\xb0',
    class: 'Matem\xe1ticas',
    courseModule: 'mat-04',
    guides: [
      1,
      1,
      1,
      1
    ],
    resources: '../images/fourth/mat/',
    headerImg: 'header-matematicas-550.png',
    menuImg: 'matematicas_menu.png',
    menuImgStyles: 'left: -26px;bottom: 40px;width: 230px;'
  });
  mat04.controller('homeCtrl', [
    '$scope',
    '$sce',
    'iconsService',
    function ($scope, $sce, iconsService) {
      $scope.courseIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.courseVideo = $sce.trustAsHtml('<iframe width="500" height="300" src="https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0" frameborder="0" ></iframe>');
      $scope.iconsIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.credits = [
        {
          title: 'Experto tem\xe1tico',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Asesor\xeda pedag\xf3gica',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o mediacional',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o web',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o gr\xe1fico',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Ilustraci\xf3n',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'A\xf1o',
          name: new Date().getFullYear(),
          icon: 'pr-icon-tiny-calendar'
        },
        {
          title: 'Versi\xf3n',
          name: '0.01',
          icon: 'pr-icon-tiny-version'
        }
      ];
    }
  ]);
}());
(function () {
  var sci01 = angular.module('sci01', ['modules']);
  AppManager().configModule(sci01, 0, 0, {
    grade: '1\xb0',
    class: 'Ciencias Naturales',
    courseModule: 'sci-01',
    guides: [
      3,
      3,
      3,
      3
    ],
    resources: '../images/primero/sci/',
    headerImg: 'plantillas_primaria_cibercolegio_2014.png',
    menuImg: 'menu.png',
    menuImgStyles: 'left: -36px; bottom: 10px; width: 110px;'
  });
  sci01.controller('homeCtrl', [
    '$scope',
    '$sce',
    function ($scope, $sce) {
      $scope.courseIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.courseVideo = $sce.trustAsHtml('<iframe width="500" height="300" src="https://www.youtube.com/embed/vLydXu6VKZo?modestbranding=1&amp;rel=0&amp;showinfo=0" frameborder="0" ></iframe>');
      $scope.iconsIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor nunc nec volutpat fringilla. Suspendisse quis mi lobortis, placerat ante et, volutpat velit. Vestibulum orci est, accumsan ornare posuere vitae, venenatis vel nisi. Praesent ac eros elit. Suspendisse sit amet diam volutpat, pretium nunc ac, sagittis nunc. Vestibulum rutrum faucibus elit, ut lacinia ipsum fermentum eget.';
      $scope.credits = [
        {
          title: 'Experto tem\xe1tico',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Asesor\xeda pedag\xf3gica',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o mediacional',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o web',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Dise\xf1o gr\xe1fico',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'Ilustraci\xf3n',
          name: 'xxx',
          icon: 'pr-icon-tiny-user'
        },
        {
          title: 'A\xf1o',
          name: new Date().getFullYear(),
          icon: 'pr-icon-tiny-calendar'
        },
        {
          title: 'Versi\xf3n',
          name: '0.01',
          icon: 'pr-icon-tiny-version'
        }
      ];
    }
  ]);
}());
templates.directive('activityTemplate', function () {
  return {
    templateUrl: 'templates/_activity_template.html',
    transclude: true,
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.screenToggle = function ($event, next) {
        var $btn = angular.element($event.currentTarget), $parent = $btn.parent(), $next = angular.element(next);
        if ($btn.hasClass('active')) {
          $btn.removeClass('active');
          $parent.animate({ width: '49.7%' }, 200, function () {
            $next.fadeIn(200);
          });
        } else {
          $btn.addClass('active');
          $next.fadeOut(200, function () {
            $parent.animate({ width: '100%' }, 200);
          });
        }
      };
    }
  };
});
templates.directive('contentContainers', function () {
  return {
    templateUrl: '/templates/_content_containers.html',
    transclude: true,
    restrict: 'E',
    scope: { options: '=options' },
    link: function (scope, element, attrs) {
      var $header = angular.element('.pr-content-header'), $instruction = angular.element('.pr-content-instruction'), $main = angular.element('.pr-left-container'), $title = $header.find('.pr-content-title'), contWidth = scope.options.contWidth;
      $instruction.css('width', contWidth + 'px');
      $main.css('width', contWidth + 'px');
      $title.css('width', contWidth - 80 + 'px');
      if (scope.options.hasInstruction) {
        $main.css('height', '200px');
        $main.find('.pr-content-main').css('height', '144px');
      }
    }
  };
});
templates.directive('lessonIntro', function () {
  return {
    templateUrl: '/templates/_lesson_intro.html',
    transclude: true,
    restrict: 'E',
    scope: { options: '=' },
    link: function (scope, element, attrs) {
    }
  };
});
templates.directive('socialNetworkContainer', function () {
  return {
    templateUrl: 'templates/_social_network_container.html',
    transclude: true,
    restrict: 'E',
    scope: { options: '=options' },
    link: function (scope, element, attrs) {
      scope.options.title = 'Redes sociales';
      scope.options.hasInstruction = false;
      scope.options.contWidth = 500;
    }
  };
});
(function () {
  var esp101 = angular.module('esp101', ['modules']);
  AppManager().configModule(esp101, 2, 4, {
    id: 'esp-01-01',
    guide: 0,
    grade: 'Grado 1\xb0',
    courseModule: 'esp-01',
    class: 'Lengua Castellana'
  });
  esp101.controller('homeCtrl', [
    '$scope',
    function ($scope) {
      $scope.text = 'Welcome!!';
    }
  ]);
  esp101.controller('c01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp101.controller('c02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp101.controller('a01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp101.controller('a02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp101.controller('a03Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp101.controller('a04Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
}());
(function () {
  var esp102 = angular.module('esp102', ['modules']);
  AppManager().configModule(esp102, 2, 4, {
    id: 'esp-01-02',
    guide: 0,
    grade: 'Grado 1\xb0',
    courseModule: 'esp-01',
    class: 'Lengua Castellana'
  });
  esp102.controller('homeCtrl', [
    '$scope',
    function ($scope) {
      $scope.text = 'Welcome!!';
    }
  ]);
  esp102.controller('c01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp102.controller('c02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp102.controller('a01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp102.controller('a02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp102.controller('a03Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  esp102.controller('a04Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
}());
(function () {
  var mat101 = angular.module('mat101', ['modules']);
  AppManager().configModule(mat101, 2, 4, {
    id: 'mat-01-01',
    guide: 0,
    lessonName: '1- t\xedtulo de la lecci\xf3n',
    courseModule: 'mat-01'
  });
  mat101.controller('homeCtrl', [
    '$scope',
    function ($scope) {
      $scope.text = 'Welcome!!';
    }
  ]);
  mat101.controller('c01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  mat101.controller('c02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  mat101.controller('a01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  mat101.controller('a02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  mat101.controller('a03Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  mat101.controller('a04Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
}());
(function () {
  var sci101 = angular.module('sci101', ['modules']);
  AppManager().configModule(sci101, 2, 4, {
    id: 'sci-01-01',
    guide: 0,
    lessonName: '1- t\xedtulo de la lecci\xf3n',
    courseModule: 'sci-01'
  });
  sci101.controller('homeCtrl', [
    '$scope',
    '$sce',
    function ($scope, $sce) {
      // var intro = ;
      $scope.data = { intro: $sce.trustAsHtml('A continuaci\xf3n encontrar\xe1s una peque\xf1a reflexi\xf3n sobre el reino animal y vegetal y de su importancia para el ser humano.<br><br>Los seres vivos est\xe1n organizados en dos grandes grupos que son los animales y las plantas, brind\xe1ndole no s\xf3lo al ser humano sino al mundo entero una estabilidad no solo al ser humano sino al mundo entero una estabilidad y opciones de vida.<br><br>En esta lecci\xf3n, vamos a trabajar y conocer un poco m\xe1s de ellos: c\xf3mo est\xe1n clasificados, c\xf3mo se reproducen, c\xf3mo se alimentan y c\xf3mo le sirven al hombre para su supervivencia.<br><br>Te invito entonces a disfrutarlo y aportarlo tus grandes acciones para protegerlos y cuidarlos como algo vital para ti, tu familia y la sociedad.') };
    }
  ]);
  sci101.controller('c01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.options = { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' };
      $scope.options2 = {
        title: '\xbfQu\xe9 es el Sistema Solar?',
        text: 'El Sistema Solar es un conjunto formado por el Sol, los planetas; dentro de los cuales est\xe1 incluida la Tierra y otros cuerpos planeta-rios. Todos ellos giran alrededor de una gran estrella, el Sol.',
        instruction: 'Haga clic sobre cada planeta para conocer sus caracter\xedsticas.',
        hasInstruction: true,
        contWidth: 500
      };
    }
  ]);
  sci101.controller('c02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  sci101.controller('a01Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  sci101.controller('a02Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  sci101.controller('a03Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
  sci101.controller('a04Ctrl', [
    '$scope',
    function ($scope) {
      $scope.test = 'asdasdasd';
    }
  ]);
}());