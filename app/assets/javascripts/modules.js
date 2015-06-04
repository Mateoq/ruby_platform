// Module than integrates the dependencies in each lesson.
var modules = angular.module('modules', [
  // Angular modules
  'ngRoute',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngAria',
  'ngAudio',
  'com.2fdevs.videogular',
  'com.2fdevs.videogular.plugins.controls',
  'com.2fdevs.videogular.plugins.overlayplay',
  'com.2fdevs.videogular.plugins.poster',
  'com.2fdevs.videogular.plugins.buffering',
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

