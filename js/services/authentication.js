myApp.factory('Authentication', ['$rootScope', '$location', '$firebaseObject', '$firebaseAuth', function($rootScope, $location, $firebaseObject, $firebaseAuth) {

  // Create a variable to reference firebase DB
  var ref = firebase.database().ref();
  // Create variable to reference firebase authentication
  var auth = $firebaseAuth();

  // Method that detects when a user is logged userInfo
  auth.$onAuthStateChanged(function(authUser) {
    if(authUser) {
      var userRef = ref.child('users').child(authUser.uid);
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
    } else {
      $rootScope.currentUser = '';
    }
  })


  return {
    login: function(user) {
      auth.$signInWithEmailAndPassword(
        user.email,
        user.password
      ).then(function(user){
        $location.path('/success')
      }).catch(function(error){
        $rootScope.message = error.message;
      }); //signInwithEmailAndPassword
    }, //login
    signup: function(user) {
      auth.$createUserWithEmailAndPassword(
        user.email, 
        user.password
    ).then(function(regUser) {
      var regRef = ref.child('users')
        .child(regUser.uid).set({
          date: firebase.database.ServerValue.TIMESTAMP,
          regUser: regUser.uid,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        }) // userInfo
      $rootScope.message = "Hello " + user.firstname + ". You now have access to magic!"; 
    }).catch(function(error) {
      $rootScope.message = error.message;
    }); //end of $createUserWithEmailAndPassword
    } //signup
  }; //return

}]); //end of factory