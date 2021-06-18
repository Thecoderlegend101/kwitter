// Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyBAJxIXQVUPp6pu1U5N1fKTuvF1dYx7YvA",
    authDomain: "kwitter-77100.firebaseapp.com",
    databaseURL: "https://kwitter-77100-default-rtdb.firebaseio.com",
    projectId: "kwitter-77100",
    storageBucket: "kwitter-77100.appspot.com",
    messagingSenderId: "154542587022",
    appId: "1:154542587022:web:3f37988f7d28eb79fbdddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig)

  function getData() {roomname = []; firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    roomname.push(Room_names);
    rows = "<div class='room_name' id="+Room_names+" onclick='redirectroom(this.id)' > #" + Room_names + "</div><hr>"
    document.getElementById('output').innerHTML += rows
   


   //End code
   });});}
getData();

function logout() {
  localStorage.removeItem('username')
  localStorage.removeItem('roomname')
  window.open('index.html', '_self')
}
function load() {
  document.getElementById('header').innerHTML = 'Welcome to Kwitter, ' + localStorage.getItem('username') + "!"
}

i = 0
function addroom() {
  //for (k = 0; k < roomname.length; k++) {
    room_name = document.getElementById('addroom').value;
    if (roomname.includes(room_name) == false) {
      localStorage.setItem('roomname', room_name)
      //leader = localStorage.getItem("username")
      //localStorage.setItem('leader', leader)
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name",
        //leader : leader
      });
      
      window.location = "kwitter_page.html"
      //break
    }
    else {
      alert("Room already exists")
      //break
    }
    }

function redirectroom(name) {
  console.log(name)
  localStorage.setItem('roomname', name)
  window.location = "kwitter_page.html"
}
function join() {
  for (k = 0; k < roomname.length; k++) {
  roomnname = document.getElementById('joinroom').value
  if (roomname.includes(roomnname)) {
  localStorage.setItem("roomname", roomnname)
  window.open('kwitter_page.html', "_self")
  break
  }
  else {
    alert("Room does not exist")
    break
  }
  }

}

