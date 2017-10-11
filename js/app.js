var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'SignupController' 
    })   
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupController'
    })
    .when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SignupController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);