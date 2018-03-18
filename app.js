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
      //I was wondering this too, I remember we did something like it with JSP but I dont remember how.
  }

//the browser just kept complaining that the user was undefined when
//I wanted to test other stuff - so I tried moving it back up so it would shut up ;)
//and then it did the same when I wanted to test message function - and Chat.Message doesn't work


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

      if (userAlreadyConnected) {
      console.log('User is already connected', User)
      //This should be changed back - if userAlreadyConnected is true we shouldn't add the user
      // Thats what I was a little confused --> I was thinking if the
    } else {
      users.push(User)
      console.log(User.username + ' is joining chat')
    }
}

//a user needs to be able to leave
module.leaveChat = function(User) {
  //let userIsConnected = true
  //if (user == userIsConnected) {
//MY SUGGESTION - and it works somewhat :-D
    users.splice(users.indexOf(User), 1)
    console.log(User.username + ' left chat')
    console.log(users) //just for seeing that the user has actually been removed from the array
}

// method for creating a new message
    module.sendChat = function(Message) {
      if (Message != null) {
        messages.push(Message)
      } else {
      console.log("Show all messages: ", messages)
    }
  }

//Just a test to show the messages in the chat - it works!
//(I think we need to create functions in order to see the messages outside the module)
  module.showMessages = function() {
    if(Message != null) {
      console.log(messages)
    }else {
      console.log("not working")
    }
  }


    //searching within messages
    module.searchMessages = function(messages) {
      let searchKeyword = prompt('What are you searching for?', ' ')
      let results = messages.filter(search => {
        if (search.messages.indexOf(searchKeyword) != -1) {
          return results;
        } else {
          console.log('Search was not found')
        }
      })
          }

/* I THOUGHT I HAD AN idea.. BUT IT WENT AWAY AGAIN...
DID YOUR'S WORK? --> I can't figure out a way to show the messages array, so I'm not sure if it works. (NN)
let keyword = "Testing again"

    module.searchChat = function(keyword) {

      let results = messages.filter(m => {

          return m.message.indexOf(keyword) !== -1
      } )
    }
*/


//CENSOR MESSAGES: ...long shot..
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

//Chat.joinChat(user1)

let message1 = new Message("Testing if it works", user1);
let message2 = new Message("Testing again", user1);
let message3 = new Message("fuck", user1);
Chat.sendChat(message1)
Chat.sendChat(message2)
Chat.sendChat(message3)

console.log(Chat.joinChat(user1));
console.log(Chat.joinChat(user2));

Chat.searchMessages();



/*

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
 */
