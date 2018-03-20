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
}


var Chat = (function() {

//Users list
  let users = []

//message record list
  let messages = []

  let badMessages = []

  let module = {}

// User joining chat
  module.joinChat = function(User) {

    let userAlreadyConnected = false

      for (let i = 0; i < users.length; i++) {

          if(users[i].username === User.username) {
            userAlreadyConnected = true
          }
        }


        if (userAlreadyConnected) {
        console.log('Username is already taken or user is already connected', users)
      } else {
        users.push(User)
        console.log(User.username + ' is joining chat', users)
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
      //censoring message:
      let badWords = false

      if (Message.text.indexOf('fuck') != -1) { //using text variable to find words in the message.
          badWords = true;
          //console.log('it found a bad word')
      }

     if (Message != null && badWords == false) {
        messages.push(Message)
        console.log("Show all messages: ", messages)
      } else {
        badMessages.push(Message)
        console.log("Message is not allowed", badMessages)

      }
  }


    //searching within messages
    //Note: We are kind of confused on the method as a whole, how it works
  module.searchMessages = function(searchString) {
      //making a new array with the messages from matching searchString either for text or user
      let results = messages.filter(currentMessage => {
        //condition of search: author and content
        return (currentMessage.text.indexOf(searchString) != -1) || (currentMessage.User.username.indexOf(searchString) != -1)
      })
      return results;
  }


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
Chat.sendChat(new Message('Hohoho', user2));

Chat.joinChat(user1);
Chat.joinChat(user2);

//Chat.searchMessages();
