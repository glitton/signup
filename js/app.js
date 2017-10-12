var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.run(['$rootScope', '$location', function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(event, next, previous, error){
    if(error == 'AUTH_REQUIRED') {
      $rootScope.message = "You need to be logged in to access the page";
      $location.path('/login');
    } //AuthRequired
  }); //routeChangeError
}]) //run

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
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      } //resolve
    })
    .when('/logout', {
      templateUrl: 'views/logout.html',
      controller: 'LogoutController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);