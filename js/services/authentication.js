myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth) {

  // Create a variable to reference firebase DB
  var ref = firebase.database().ref();
  // Create variable to reference firebase authentication
  var auth = $firebaseAuth();

  return {
    login: function(user) {
      $$rootScope.message = "Welcome " + $$rootScope.user.email;
    }, //login
    signup: function(user) {
      auth.$createUserWithEmailAndPassword(
        user.email, 
        user.password
    ).then(function(regUser) {
        $rootScope.message = "Hello " + user.firstname + ". You now have access to magic!"; 
    }).catch(function(error) {
      $$rootScope.message = error.message;
    }); //end of $createUserWithEmailAndPassword
    } //signup
  }; //return

}]); //end of factory