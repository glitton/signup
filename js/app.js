var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

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
      controller: 'SuccessController'
    })
    .when('/logout', {
      templateUrl: 'views/logout.html',
      controller: 'LogoutController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);