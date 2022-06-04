// var firebaseConfig = {
//     apiKey: "AIzaSyBOuHIi16dxC4mK9uqs-n9Gd0LzAs4zXF0",
//     authDomain: "kwitter-708cb.firebaseapp.com",
//     projectId: "kwitter-708cb",
//     storageBucket: "kwitter-708cb.appspot.com",
//     messagingSenderId: "122376216378",
//     appId: "1:122376216378:web:aa46df7f44d894eb41ba03",
//     measurementId: "G-PSMM9PK1G2"
//   };
  
//   // Initialize Firebase
//   var app = initializeApp(firebaseConfig);
//   var analytics = getAnalytics(app);
// //ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBOuHIi16dxC4mK9uqs-n9Gd0LzAs4zXF0",
  authDomain: "kwitter-708cb.firebaseapp.com",
  projectId: "kwitter-708cb",
  storageBucket: "kwitter-708cb.appspot.com",
  messagingSenderId: "122376216378",
  appId: "1:122376216378:web:aa46df7f44d894eb41ba03",
  measurementId: "G-PSMM9PK1G2"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();