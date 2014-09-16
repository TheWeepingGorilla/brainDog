var brainDog = angular.module('brainDog', ['ngRoute', 'templates']);

brainDog.config(function ($routeProvider) {
   $routeProvider
      .when('/',
        {
          controller: 'BrainDogsCtrl',
          templateUrl: 'views/BrainsDogs.html'
        })
 });
