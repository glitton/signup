myApp.factory('Authentication', 
  ['$rootScope', '$location', '$firebaseObject', '$firebaseAuth', 
  function($rootScope, $location, $firebaseObject, $firebaseAuth) {

  // Create a variable to reference firebase DB
  var ref = firebase.database().ref();
  // Create variable to reference firebase authentication
  var auth = $firebaseAuth();
  var myObject;

  // Method that detects when a user is logged userInfo
  auth.$onAuthStateChanged(function(authUser) {
    if(authUser) {
      var userRef = ref.child('users').child(authUser.uid);
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
    } else {
      $rootScope.currentUser = '';
    }
  });

  myObject = {
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

    logout: function() {
      return auth.$signOut();
    }, //logout

    requireAuth: function() {
      return auth.$requireSignIn();
    }, //requireAuth

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
        myObject.login(user);
    }).catch(function(error) {
      $rootScope.message = error.message;
    }); //end of $createUserWithEmailAndPassword
    } //signup
  }; //return

  return myObject;


}]); //end of factory


    