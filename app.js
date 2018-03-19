//User constructor
  function User (username, email) {
    this.username = username
    this.email = email

  }

// message constructor
  function Message (text, User) {
      this.text = text
      this.createdAT = new Date()
      this.User = User
      // ^don't know if you can assign the user like this (object oriented)
  }



var Chat = (function() {

//Users list
  let users = []

//message record list
  let messages = []

  let module = {}

// User joining chat
  module.joinChat = function(User) {

    let userAlreadyConnected = false

    for (let i = 0; i < users.lenght; i++) {
        if(users[i] == User) {
          userAlreadyConnected = true
        }
      }
      //the joining works, but the same user can be joing again

      if (userAlreadyConnected) {
      console.log('User is already connected', User)

    } else {
      users.push(User)
      console.log(User.username + ' is joining chat')
    }
}

//a user needs to be able to leave
module.leaveChat = function(User) {
    users.splice(users.indexOf(User), 1)
    console.log(User.username + ' left chat')
    console.log(users)
}

// method for creating a new message
    module.sendChat = function(Message) {
      if (Message != null) {
        messages.push(Message)
        console.log("Show all messages: ", messages)
      }
      else {
        console.log("not able to send message")
      }
  }



    //searching within messages
    //Note: We are kind of confused on the method as a whole, how it works
    //But also with the parameter of the function (we tried searchkeyword also)
    module.searchMessages = function() {
      let searchKeyword = "Testing"
      let results = messages.filter(search => {
        if (search.messages.indexOf(searchKeyword) != -1) {
          console.log(results);
        } else {
          console.log('Search was not found')
        }
      })
          }

/* Note: We tried different ways too
let keyword = "Testing again"

    module.searchChat = function(keyword) {

      let results = messages.filter(m => {

          return m.message.indexOf(keyword) !== -1
      } )
    }
*/


//CENSOR MESSAGES: ...long shot..
// again we don't really understand the method, how it could work and what it should do
module.censorMessages = function() {
    let badMessages = messages.filter(m => {
      if (m.text == "fuck") {
        console.log(badMessages)
      }
    })
}

    /*let badWords = false
    for (let i = 0; i < messages.lenght; i++) {
        if(messages[i] == message) {

        }
    } */



//End of module
  return module;
})()




//FOR TESTING:
let user1 = new User("Nat", "email@asd.se");
let user2 = new User("Lena", "email@asd.se");
let user3 = new User("Test", "test@asd.se");

//Chat.joinChat(user1)

let message1 = new Message("Testing if it works", user1);
let message2 = new Message("Testing again", user1);
let message3 = new Message("fuck", user1);
Chat.sendChat(message1)
Chat.sendChat(message2)
Chat.sendChat(message3)

console.log(Chat.joinChat(user1));
console.log(Chat.joinChat(user2));
