prTemplates.directive('crossword', ['$timeout', 'keyCodes', 'updateProgressService', function ($timeout, keyCodes, updateProgressService) {
	return {
		templateUrl: 'crossword.html',
		transclude: true,
		restrict: 'E',
		scope: {
			options: '=options'
		},
		link: function (scope, element, attrs) {
			scope.options.templateClass = 'crossword';

			// Init crossword properties
			var cols = 0,
				rows = 0
				wordObject = null,
				crosswordItem = null;

			scope.options.totalWords = -1;
			scope.options.wordsGroup = [];
			scope.options.crossword = [];
			scope.options.activeWord = null;
			scope.options.crosswordProgress = [];

			scope.options.clues.vertical.contentMainClass = 'vertical';
			scope.options.clues.horizontal.contentMainClass = 'horizontal';

			// Init vertical words
			angular.forEach(scope.options.words.vertical, function(wordObj, key){
				// Beginning of the word
				setColsNRows(wordObj.positions.begin);
				// Ending of the Word
				setColsNRows(wordObj.positions.end);

				scope.options.totalWords++;

				// Init words in global object and crossword object
				wordObject = { id: key, word: wordObj.word, direction: true, items: [] };

				for (var i = wordObj.positions.begin.y; i <= wordObj.positions.end.y; i++) {
					if (angular.isUndefined(scope.options.crossword[i])) {
						scope.options.crossword[i] = [];
					}

					if (i === wordObj.positions.begin.y) {
						var target = {
							x: wordObj.positions.begin.x,
							y: i + 1,
							id: 'item_' + (i + 1) + '_' + wordObj.positions.begin.x
						};
						scope.options.crossword[i][wordObj.positions.begin.x] = { 
							num: key,
							direction: true,
							target: target
						};
						scope.options.clues.vertical.clues[key].x = target.x;
						scope.options.clues.vertical.clues[key].y = target.y;
						scope.options.clues.vertical.clues[key].id = target.id;
						// console.log(scope.options.clues.vertical[key]);
						continue;
					}

					crosswordItem = {
						x: wordObj.positions.begin.x,
						y: i,
						letter: wordObj.word[(i - 1) - wordObj.positions.begin.y]
					}

					if (angular.isUndefined(scope.options.crossword[i][wordObj.positions.begin.x])) {
						scope.options.crossword[i][wordObj.positions.begin.x] = crosswordItem;
						scope.options.crossword[i][wordObj.positions.begin.x].itemIds = [];
					} 
					
					scope.options.crossword[i][wordObj.positions.begin.x].itemIds.push({
						index: (i - 1) - wordObj.positions.begin.y,
						wordId: scope.options.totalWords
					});

					crosswordItem.itemId = scope.options.totalWords;

					wordObject.items.push(crosswordItem);

					crosswordItem = null;
				}

				scope.options.wordsGroup.push(wordObject);

				wordObject = null;
			});

			// Init horizontal words
			angular.forEach(scope.options.words.horizontal, function(wordObj, key){

				// Beginning of the word
				setColsNRows(wordObj.positions.begin);
				// Ending of the Word
				setColsNRows(wordObj.positions.end);

				scope.options.totalWords++;

				// Init words in global object and crossword object
				wordObject = { id: key, word: wordObj.word, direction: false, items: [] };

				for (var i = wordObj.positions.begin.x; i <= wordObj.positions.end.x; i++) {
					if (angular.isUndefined(scope.options.crossword[wordObj.positions.begin.y])) {
						scope.options.crossword[wordObj.positions.begin.y] = [];
					}

					if (i === wordObj.positions.begin.x) {
						var target = {
							x: i + 1,
							y: wordObj.positions.begin.y,
							id: 'item_' + wordObj.positions.begin.y + '_' + (i + 1)
						};
						scope.options.crossword[wordObj.positions.begin.y][i] = {
							num: key,
							direction: false,
							target: target
						};
						scope.options.clues.horizontal.clues[key].x = target.x;
						scope.options.clues.horizontal.clues[key].y = target.y;
						scope.options.clues.horizontal.clues[key].id = target.id;
						continue;
					}

					crosswordItem = {
						x: i,
						y: wordObj.positions.begin.y,
						letter: wordObj.word[(i - 1) - wordObj.positions.begin.x],
					}

					if (angular.isUndefined(scope.options.crossword[wordObj.positions.begin.y][i])) {
						scope.options.crossword[wordObj.positions.begin.y][i] = crosswordItem;
						scope.options.crossword[wordObj.positions.begin.y][i].itemIds = []
					}

					scope.options.crossword[wordObj.positions.begin.y][i].itemIds.push({
						index: (i - 1) - wordObj.positions.begin.x,
						wordId: scope.options.totalWords
					});
					
					crosswordItem.itemId = scope.options.totalWords;

					wordObject.items.push(crosswordItem);

					crosswordItem = null;
				}

				scope.options.wordsGroup.push(wordObject);

				wordObject = null;
			});

			// Fill empty cells
			for (var r = 0; r <= rows; r++) {
				for (var c = 0; c <= cols; c++) {
					if (angular.isDefined(scope.options.crossword[r][c])) { continue; }

			
					scope.options.crossword[r][c] = {
						empty: true
					};
				}	
			}
		
			function setColsNRows (positions) {
				cols = (cols < positions.x) ? positions.x : cols;
				rows = (rows < positions.y) ? positions.y : rows;
			};

			// Events
			scope.options.selectCell = function (target, direction, $event) {
				var $currentTarget = angular.element($event.currentTarget),
					$parent = $currentTarget.parent('td'),
					wordItem = scope.options.crossword[target.y][target.x],
					word = null, hasActiveWord = false;

				if (scope.options.activeWord) {
					angular.forEach(scope.options.activeWord.items, function(item, key){
						scope.options.crossword[item.y][item.x].activeRow = false;
						scope.options.crossword[item.y][item.x].focusCell = false;

						if (target.x === item.x && target.y === item.y) hasActiveWord = true;
					});

					resetCluesItem(scope.options.activeWord, scope.options.activeWord.direction, false);
					if (!hasActiveWord) scope.options.activeWord = null;
				}

				if (wordItem.itemIds.length > 1 && angular.isDefined(direction) && null != direction) {
					word = (direction) ? scope.options.wordsGroup[wordItem.itemIds[0].wordId] : scope.options.wordsGroup[wordItem.itemIds[1].wordId];
				} else if (1 === wordItem.itemIds.length) {
					word = scope.options.wordsGroup[wordItem.itemIds[0].wordId];
				}

				if (null != word) {
					if (null === scope.options.activeWord) scope.options.activeWord = word;
					angular.forEach(word.items, function(item, key){
						scope.options.crossword[item.y][item.x].activeRow = true;
					});

					resetCluesItem(word, word.direction, true);
				}

				scope.options.crossword[target.y][target.x].focusCell = true;
				
				if('label' === $event.currentTarget.localName) $currentTarget.addClass('rubberBand');
				else $parent.addClass('rubberBand');

				$timeout(function () {
					if('label' === $event.currentTarget.localName) $currentTarget.removeClass('rubberBand');
					else $parent.removeClass('rubberBand');
				}, 700);

				if (null === direction) { return; }

				var $target = (target.id) ? angular.element('#' + target.id) : angular.element('#item_' + target.y + '_' + target.x);

				$target.focus();
				$timeout(function () {
					console.log($target);
					$target.select();
				}, 100);

			};

			// Function to update user progress with the crossword
			scope.options.updateWordProgress = function (item) {
				// Validate existence
				if (angular.isUndefined(item.value) || '' === item.value) { return; }

				// Uppercase value
				item.value = item.value.toUpperCase();

				// Remove first characters if there are more than one
				if(item.value.length > 1) { item.value = item.value[item.value.length - 1]; }

				if(!item.value.match("^[A-ZÑ]+$")){
					item.value = '';
					return;
				}

				angular.forEach(item.itemIds, function(itemId, key){
					if (angular.isUndefined(scope.options.crosswordProgress[itemId.wordId]))
						scope.options.crosswordProgress[itemId.wordId] = [];

					scope.options.crosswordProgress[itemId.wordId][itemId.index] = item.value;
				});

				if (null === scope.options.activeWord) { return; }

				var direction = null,
					target = null;

				if (1 === item.itemIds.length) {
					direction = scope.options.wordsGroup[item.itemIds[0].wordId].direction;
				}
				else
					direction = scope.options.activeWord.direction;

				target = getNextItem(item, direction);

				if (!target) { return; }

				var itemEvent = { currentTarget: '#item_' + item.y + '_' + item.x };
				scope.options.selectCell(target, direction, itemEvent);
			};

			// Function to block spacebar key, tab key and gives arrow keys functionality
			scope.options.cellKeyDown = function (item, $event) {
				// Block spacebar and tab key
				if ($event.keyCode === keyCodes.spacebar || $event.keyCode === keyCodes.tab)
					$event.preventDefault();

				// if (1 === item.itemIds.length) { return; }

				var target = null,
					direction = null;

				switch($event.keyCode) {
					case keyCodes.downArrow:
						direction = true;
						target = getNextItem(item, direction);
						break;
					case keyCodes.rightArrow:
						direction = false;
						target = getNextItem(item, direction);
						break;
					case keyCodes.upArrow:
						direction = true;
						target = getNextItem(item, direction, true);
						break;
					case keyCodes.leftArrow:
						direction = false;
						target = getNextItem(item, direction, true);
						break;
				}

				if (!target || null === target) { return; }

				scope.options.selectCell(target, direction, $event);
			};

			// Function to find next target item
			function getNextItem (item, direction, inverse) {
				// Get parent word and item index
				var word = {},
					itemIndex = -1,
					nextItem = null;

				if (item.itemIds.length > 1 && angular.isDefined(direction) && null != direction) {
					word = (direction) ? scope.options.wordsGroup[item.itemIds[0].wordId] : scope.options.wordsGroup[item.itemIds[1].wordId];
					itemIndex = (direction) ? item.itemIds[0].index : item.itemIds[1].index;
				} else {
					word = scope.options.wordsGroup[item.itemIds[0].wordId];
					itemIndex = item.itemIds[0].index;
				}

				if (direction != word.direction) { return false; }

				if (inverse && 0 <= (itemIndex - 1)) {
					nextItem = word.items[itemIndex - 1];
				} else if (!inverse && word.items.length >= (itemIndex + 1)) {
					nextItem = word.items[itemIndex + 1];
				}

				if (null === nextItem || angular.isUndefined(nextItem)) { return false; }

				return scope.options.crossword[nextItem.y][nextItem.x];
			};

			function resetCluesItem (word, direction, active) {
				switch(direction) {
					case true:
						scope.options.clues.vertical.clues[word.id].active = active;
						break;
					case false:
						scope.options.clues.horizontal.clues[word.id].active = active;
						break;
				}
			};

			scope.options.onBlurCell = function (item, $event) {
				item.focusCell = false;
			};

			// Function to validate the entire crossword
			scope.options.onValidate = function ($event) {
				var $button = angular.element($event.currentTarget);

				if (scope.options.wordsGroup.length != scope.options.crosswordProgress.length) {
					$button.addClass('shake');

					$timeout(function () {
						$button.removeClass('shake');
					}, 600);

					return;
				}

				var rightAnswers = 0;

				angular.forEach(scope.options.crosswordProgress, function(word, key){
					if (word.join('') === scope.options.wordsGroup[key].word) {
						rightAnswers++;
					}
				});

				var data = {
					num_items: scope.options.wordsGroup.length,
					right_answers: rightAnswers
				};

                updateProgressService(
                        gon.course_structure.class_name,
                        gon.course_structure.grade,
                        gon.course_structure.lesson_guide,
                        gon.course_structure.lesson_num,
                        scope.options.hasGrade
                );

                updateProgressService.update(gon.lesson_structure[scope.$root.routeIndex].url_name, scope.$root.nextItem, data).then(function (data) {
                    // TODO: congrats message
                    if (scope.options.hasGrade) {
                        var userProgress = angular.fromJson(data.user_progress);
                        scope.options.progress = userProgress.lesson_progress[gon.course_app][scope.options.progress.url_name];
                    	scope.$root.lessonProgress = userProgress.lesson_progress[gon.course_app];
	                    scope.options.stage = data.activity_progress.stage;
	                    scope.options.grade = data.activity_progress.grade;
	                    scope.options.failed = data.activity_progress.failed;
	                    scope.options.done = data.activity_progress.done;
                        scope.$root.activeMessage = true;
                    } else {
                    	scope.$root.lessonProgress = data.lesson_progress[gon.course_app];
                    	scope.options.done = true;
                    }

                    if (scope.options.done) {
                    	scope.$root.isNextEnabled = true;
                	}
                });
			};

			scope.options.clues.horizontal.selectCell = scope.options.selectCell;
			scope.options.clues.vertical.selectCell = scope.options.selectCell;
		}
	};
}])
;
