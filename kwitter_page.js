
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
  room_name = localStorage.getItem('roomname')
  
function send() {
    msg = document.getElementById('msg').value
    
    user_name = localStorage.getItem('username')
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0

    })
    document.getElementById('msg').value = ""

}
function loade() {
    document.getElementById("roomnam").innerHTML += room_name
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose"/* && childKey != "leader"*/) {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
      namee = message_data['name'];
      message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> <b>"+ namee +"</b><img class='user_tick' ></h4>";
    message_with_tag = "<h4 class='message_h4' style='color: grey'>" + message + "</h4>";
like_button ="<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span>Like: "+ like +" 👍</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function logsout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location.replace("index.html");
}
function updateLike(message_id)
{

	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}
function back() {
    
    window.open('main_page.html', '_self')
}