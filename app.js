// user constructor
function User (username, email) {
  this.username = username
  this.email = email
}

var Chat = (function() {
  //Users
  let users = []
  let messages = []

  let module = {}

  module.joinChat = function(user) {
    console.log('user is trying to join', user)

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

    }
    module.sendChat = function (message) {
//
      messages.push(message)
    }

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

/*let user1 = new User("name", "email@asd.se");
let user2 = new User("name", "email@asd.se");

Chat.joinChat(user1) */
