
function facebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        document.getElementById("sendBtn").removeAttribute('class','hide')
        // var x = document.getElementById("btnss");
        // x.setAttribute('class','hide')

    
        //ye off tag firebase database k neche hai
    // })
    // firebase database //
var sendBtn = document.querySelector("#sendBtn")
var xyz = document.getElementById("userName").innerHTML = user.displayName;
var userMessage = document.querySelector("#message")
var deleteAll = document.querySelector("#deleteAll")



sendBtn.addEventListener('click', function(){
    
    var userMessageInput = userMessage.value;
    var key = firebase.database().ref('student').push().key

firebase.database().ref('student/' + key ).set({
    name: xyz,
    message: userMessageInput,
    key: key,
   
})
})
///// yeh facebook .then k off tag hai 
})
////////////


firebase.database().ref("student").on("child_added", (data) => {


    let ul = document.getElementById("chatting"); 
    let li = document.createElement("li");
    /////////// delete button ///
    let btn = document.createElement("BUTTON")
    btn.setAttribute("class", "setting"); 
    btn.innerHTML = 'Delete'
    li.setAttribute("id", "li");
    // btn.setAttribute("id",data.val().key)
    btn.setAttribute("onclick","clickMe()")

    li.innerHTML = data.val().name + " : " + data.val().message;
    ul.appendChild(li);
    ///// delete btn ///
    ul.appendChild(btn);
    document.getElementById("message").value = "";

})
/////////////////////////////////////////////

     }
    ////////////////////////////
    // })


    var logout = document.querySelector("#logOut")
    logout.addEventListener('click', function(){
        firebase.auth().signOut().then(function() {
            document.getElementById('message').innerHTML = '';
           var btn = document.getElementById("sendBtn")
           btn.setAttribute('class','hide')
        document.getElementById('btnss')

            document.getElementById("userName").innerHTML = "Your Name:";
            console.log('logout')
          }).catch(function(error) {
              console.log('error')
           
          });
        });
   
        
    
    // let logout = () => {
    // var y = document.getElementById("btnss");
    // y.removeAttribute('class','hide')
    // firebase.auth().signOut()
    // document.getElementById("userName").innerHTML = "Your Name:"
    // console.log("logout")
    
    //   }

    
    
      function deleteAll(){
        let ul = document.getElementById("chatting"); 
        firebase.database().ref("student").remove();
         ul.innerHTML = "";
    
    } 

// function deleteAll(){
//     firebase.database().ref("student").remove();
//    ul.innerHTML = "";

// } 

// var x = document.getElementById("btnss");
        // x.removeAttribute('class','hide')
        // firebase.auth().signOut()
        // var message = document.getElementById("message");
        // message.removeAttribute('class','hide-to')
    
        // console.log("logout")

    // var delBtn = document.createElement('button')
    // delBtn.setAttribute('class','del-btn')
    // delBtn.setAttribute("onclick","dltBtn(this)")
    // li.appendChild(delBtn)
    
    // function dltBtn(e){
    //     e.parentNode.remove()
    // }

    //// logout btn ///
// function logOut(){
// document.getElementById("logOut")
//     firebase.auth().signOut()
//   .then(function() {
  
//     console.log("signout")

    
//   })
//   .catch(function(error) {
//     console.log(error.message)
//   });
  
//   }


