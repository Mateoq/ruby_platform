// Module than integrates the dependencies in each lesson.
var modules = angular.module('modules', [
  // Angular modules
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',

  // Application modules
  'appManagerDirectives',
  'appManagerServices',
  'prTemplates',
  'templates'

]);

