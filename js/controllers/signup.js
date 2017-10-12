myApp.controller('SignupController', 
  ['$scope', 'Authentication',
  function($scope, Authentication){

  
  $scope.login = function() {
    Authentication.login($scope.user);
  };

  $scope.signup = function() {
    Authentication.signup($scope.user);

  }; // end of signup
  
}]); // end of controller
