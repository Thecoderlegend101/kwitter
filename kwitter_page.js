room_name = localStorage.getItem('roomname')
document.getElementById("name").innerHTML = room_name
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxwOCb75tEYFIaPJv2aohqx9yUsq1fA18",
    authDomain: "kwitter-b60ff.firebaseapp.com",
    databaseURL: "https://kwitter-b60ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-b60ff",
    storageBucket: "kwitter-b60ff.appspot.com",
    messagingSenderId: "541328931011",
    appId: "1:541328931011:web:a5fe2618a0f2b475e5ca76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function send() {
    msg = document.getElementById('msg').value
    room_name = localStorage.getItem('roomname')
    user_name = localStorage.getItem('username')
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0

    })
    document.getElementById('msg').value = ""

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose" && childKey != "leader") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
      name = message_data['name'];
      message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> <b>"+ name +"</b><img class='user_tick' ></h4>";
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
    localStorage.removeItem('leader')
    window.open('main_page.html', '_self')
}