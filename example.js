
function facebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        var x = document.getElementById("btnss");
        x.setAttribute('class','hide')
        
        //////////////////////////////////////////////////////////
        // var userName = document.querySelector("#userName")
        // userName.innerHTML = user.displayName;
        ///////////////////////////////////////////////////////////
        ////firebase database///
    //    var xyz = document.getElementById("userName").innerHTML = user.displayName;
    //   console.log(xyz)
    //   var message = document.getElementById("message").value;
      
    
    //   firebase.database().ref("chatapp").push().set({
    //       "sender": xyz,
    //       "message": message
    //   })
///////////////////////////////////////////////////////////////////////////////////////
    //  var xyz = document.getElementById("userName").innerHTML = user.displayName;
    //   console.log(xyz)
    //   var message = document.getElementById("message").value;
    //   var sendBtn = 
    
    //   firebase.database().ref("chatapp").push().set({
    //       "sender": xyz,
    //       "message": message
    //   })
////////////////////////////////////////////////////////////////////////////////////////
var sendBtn = document.querySelector("#sendBtn")

var xyz = document.getElementById("userName").innerHTML = user.displayName;
var userMessage = document.querySelector("#message")

sendBtn.addEventListener('click', function(){
  
    var userMessageInput = userMessage.value;
    var key = firebase.database().ref('student').push().key

firebase.database().ref('student/' + key ).set({
    name: xyz,
    message: userMessageInput,
    key: key,
   })
//////////////////not working//////////////////////////////////
// document.getElementById("chatting").value = "";
// document.getElementById("chatting").focus();

   ///////////////////////////////////////////////////////////////////
//    firebase.database().ref('student').on('child_added', function(snapshot){
//        var html = "";
//        html += "<li>";
//        html += snapshot.val().name + ": " + snapshot.val().message;

//        html +="</li>";
//        document.getElementById("chatting").innerHTML += html;
//    });
//get data on li

firebase.database().ref("student").on("child_added", (data) => {


    let ul = document.getElementById("chatting");
    let li = document.createElement("li");
    li.setAttribute("id", "li");

    li.innerHTML = data.val().name + " : " + data.val().message;
    ul.appendChild(li);
    document.getElementById("message").value = "";

    

})

      }).catch(function(error) {
          console.log(error.message)
        
    }  
      )}
    )}
    