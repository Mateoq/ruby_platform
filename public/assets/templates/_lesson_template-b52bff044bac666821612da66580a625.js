prTemplates.directive('lessonTemplate', ['$window', '$document', '$timeout', 'ngAudio', function ($window, $document, $timeout, ngAudio) {
	return {
		templateUrl: '_lesson_template.html',
		transclude: true,
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			var $container = null,
				$content = null,
				$slideScreen = false,
				$slideScreenBlack = false;

			$timeout(function () {
				$container = angular.element('.page');
				$content = element.find('.pr-lesson-content');
				$slideScreen = $container.find('.pr-slide-screen');
				$slideScreenBlack = $container.find('.pr-slide-screen-black');
				resizePage();

				var $images = angular.element('.pr-images-info-images');

				$images.each(function(index, el) {
					$timeout(function () {
						angular.element(el).addClass('animated fadeIn');
					}, 800);
				});
			});

            if (2 === scope.options.type) {
                scope.options.slideScreenOn = true;
                scope.options.pdfUrl = gon.course_structure.pdf_path + '#toolbar=0&navpanes=0&statusbar=0&view=Fit;readonly=true;disableprint=true;';
                scope.options.slideScreenTitle = 'Contenidos temáticos'
            }

			angular.element($window).on('resize', function(event) {
                resizePage();
            });

			function resizePage () {
                // var h = ($document[0].documentElement.clientHeight - 134) + 'px';
                var h = ($document[0].documentElement.clientHeight - 43) + 'px',
                	w = ($document[0].documentElement.clientWidth) + 'px';

                $container.height(h);
                $container.width(w);
                $content[0].style.height = ($window.window.innerHeight - 134) + 'px';
            }

            scope.playLessonAudio = function () {
            	scope.$root.resetAudio();
            	scope.$root.audio = ngAudio.play(scope.$root.resources + scope.$root.currentItem + '.mp3');	
            };

            scope.toggleScreen = function () {
            	if (angular.isUndefined(scope.toggledScreen)) scope.toggledScreen = false;

            	if (!scope.toggledScreen) {
	            	$slideScreenBlack.css('display', 'block').animate({
	        			opacity: 1},
	        			200, function () {
	        			$slideScreen.animate({
		            		right: 0},
		            		400
		            	);		
	        		});

	          		// $slideScreen.find('.pr-lesson-title-bar-label').animate({'width': '86%'}, 400);
	        		scope.toggledScreen = true;
	            } else if (scope.toggledWide) {
	            	$slideScreen.animate({width: '50%'}, 400);
	            	// $slideScreen.find('.pr-lesson-title-bar-label').animate({'width': '86%'}, 400);
	            	scope.toggledWide = false;
	            } else {
	            	$slideScreen.animate({right: '-50%'}, 400, function () {
	            		$slideScreenBlack.animate({opacity: 0}, 200, function () {
	            			$(this).css('display', 'none');
	            		});
	            	});

	            	scope.toggledScreen = false;
	            }

            };

            scope.toggleWideScreen = function () {
            	if (scope.toggledWide) return;

        		$slideScreen.animate({'width': '100%'}, 400);
        		// $slideScreen.find('.pr-lesson-title-bar-label').animate({'width': '93%'}, 400);

            	scope.toggledWide = true;
            };
		}
	};
}]);
