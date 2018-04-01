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
      //censoring variables
      let badWords = false
      let censoredWords = [
        'fuck',
        'shit',
        'crap',
      ]

      //selecting message input value
      let messageValue = document.querySelector('#chatMessage').value
      messageValue.innerHTML = Message.text
      let currentUser = document.querySelector('#user').value
      //currentUser.innerHTML = User.username - IT DOESNT WORK!

      if (messageValue.indexOf(censoredWords) != -1) { //using text variable to find words in the message.
          badWords = true;
          //console.log('it found a bad word')
      }

      if (messageValue != null && badWords == false) {
        //messages.push(messageValue)
        //creating a new message and User
        currentUser = document.createElement('b')
        let newMessage = document.createElement('p')
        newMessage.innerHTML = messageValue.value
        //selecting list-array to add new message
        messages = document.querySelector('#message')
        //adding message to List
        messages.appendChild(newMessage)
        //creating a blank field for next message
        messageValue.value = ''
        Message.preventDefault()
        console.log("Show all messages: ", Message)


      } else {
        //badMessages.push(Message)
        //creating a new message --> just an idea - it makes sense for me but it doesnt work
        let User = document.createElement('b')
        let newBadMessage = document.createElement('p')
        newBadMessage.innerHTML = MessageValue.value
        //selecting list to add new message
        badMessages = document.querySelector('#messageList')
        //adding message to List
        badMessages.appendChild(newBadMessage)
        //creating a blank field for next message
        messageValue.value = ''
        Message.preventDefault()
        //console.log("Message is not allowed", badMessages)

        }
    }


    //searching within messages
  module.searchMessages = function(searchString) {
      //making a new array with the messages from matching searchString either for text or user
      let results = messages.filter(currentMessage => {
        //condition of search: author and content
              console.log("search was done"); // SHOWS THAT THE METHOD IS NOT RUN IN THE HTML
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


let message1 = new Message("Testing if it works", user1);
let message2 = new Message("Testing again", user1);
let message3 = new Message("fuck", user1);

Chat.sendChat(message1)
Chat.sendChat(message2)
Chat.sendChat(message3)
Chat.sendChat(new Message('Hohoho', user2));

Chat.joinChat(user1);
Chat.joinChat(user2);

//Chat.searchMessages(); */
