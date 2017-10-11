var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'SignupConroller'
    }).
    when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupConroller'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessConroller'
    }).
    otherwise({
      redirectTo: '/signup'
    });
 
}]);