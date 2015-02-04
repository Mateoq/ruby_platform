// Module than integrates the dependencies in each lesson.
var modules = angular.module('modules', [
  // Angular modules
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'ngResource',
  'ngSanitize',
  'ngAudio',
  // 'multi-transclude',

  // Application modules
  'appManagerDirectives',
  'appManagerServices',
  'prTemplates',
  'prServices',
  'templates'

]);

