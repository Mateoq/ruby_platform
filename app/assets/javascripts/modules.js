// Module than integrates the dependencies in each lesson.
var modules = angular.module('modules', [
  // Angular modules
  'ngRoute',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngAria',
  'ngAudio',
  // 'ngMaterial',
  // 'ui.bootstrap',
  'ng-directives-utils',
  // 'multi-transclude',

  // Application modules
  'appManagerDirectives',
  'appManagerServices',
  'prTemplates',
  'prServices',
  'templates'

]);

