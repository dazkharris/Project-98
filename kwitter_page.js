var firebaseConfig = {
    apiKey: "AIzaSyB18w0s3CU-r1n5gXnoXZEsMZJvLfUFvvw",
    authDomain: "kwitter-3337f.firebaseapp.com",
    databaseURL: "https://kwitter-3337f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3337f",
    storageBucket: "kwitter-3337f.appspot.com",
    messagingSenderId: "1049664871097",
    appId: "1:1049664871097:web:28f0053547bbc465a71968",
    measurementId: "G-6MHMGN70V1"
};

firebaseConfig.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItam("room_name");

function send() {
    msg = document.getElementById("msg").nodeValue;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = shildSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data["name"];
                message - message_data["message"];
                like = message_data["like"];
                name_with_tag = "<h4>" + name + "<img class='user_tick'src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning'id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphiicon-thumbs-up'>Like:" + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code 
            }
        });
    });
}
getData();