// user constructor
function User (username, email) {
  this.username = username
  this.email = email
}
// message constructor
function Message (text, date, User) {
  this.text = text
  this.createdAT = new Date()
  this.User = User
}

var Chat = (function() {
  //Users
  let users = []
  let messages = []

  let module = {}

  module.joinChat = function(user) {

    let userAlreadyConnected = false

    for (let i = 0; i < users.lenght; i++) {
        if(users[i] == user) {
          userAlreadyConnected = true
        }
    }

    if (userAlreadyConnected) {
      console.log('user already connected', user)
    } else {
      //add the user
      users.push(user)
      console.log('user is trying to join', user)

    }
  }

    module.sendChat = function (message) {
//
      messages.push(message)
      console.log("show all messages:", messages)
    }



  module.helloWorld = function () {
    console.log('Hello World')
  }

  /*let messages = []
  ...
  module.sendChat = function (message)
  */

  return module

})()


//FOR TESTING:
let user1 = new User("name", "email@asd.se");
let user2 = new User("name", "email@asd.se");

Chat.joinChat(user1)

let message1 = new Message("Testing if it works", "15.03.18", user1);
Chat.sendChat(message1)
//console.log(messages); --> doesn't work because the array is declared w/block scope





//***NOTES: SEARCHING***
//as the drinks of a specific price search

function ChatMessage(message, user) {
    this.createdAT = new Date()
}

//search function in the module
//and then:
let keyword = "2"       //is case sensitive!

let results = messages.filter(m => {
  //if the current message matches what we are looking for
  return m.message == keyword
  //in order for it to searcg for a part of the message, not only containing 2, but more:
  return m.message.indexOf(keyword) !== -1  //-1 for when there is no match - not true
                      //when ever this returns true it means it's matching the keyword

        //if we want it to be not case sensitive you can do it differently
        //to begin with this is fine!   We could use a search method

} )
