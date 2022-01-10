var firebaseConfig = {
      apiKey: "AIzaSyAqmSKAWnsQyUhYEuafaRbuCdA36R3qg1g",
      authDomain: "kwitter-c6dbd.firebaseapp.com",
      databaseURL: "https://kwitter-c6dbd-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6dbd",
      storageBucket: "kwitter-c6dbd.appspot.com",
      messagingSenderId: "83662404758",
      appId: "1:83662404758:web:7d7c89a74fdea32cd9d6b7"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
