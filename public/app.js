//User constructor
function User (username, password) {
  this.username = username
  this.password = password
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
      }
      else {
        users.push(User)
  //For writing the connected users to the html-list:
        let newUser = document.createElement('li')
        newUser.innerHTML = User.username
        document.querySelector("#chat-users").appendChild(newUser)

        console.log(User.username + ' is joining chat', users)
      }

  }

  //a user needs to be able to leave
  module.leaveChat = function(User) {
      users.splice(users.indexOf(User), 1)
      console.log(User.username + ' left chat')
      console.log(users)
    }

    //method for showing all methods
  module.displayMessages = function(messages) {

    /*
        messages.forEach(message) {
          let singleMessage = document.createElement('li')
          singleMessage.innerHTML = message.text
      }  */

    //just for testing part 3:
    //it is probably not the right place to put it
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => {
      // Display the fetched messages in the browser:
      //forEach
          data.forEach(message => {
            let newMessage = document.createElement('p')
            newMessage.innerHTML = `<b>${message.user}:</b> ${message.text}`
            //adding message to List
            document.querySelector("#chat-window").appendChild(newMessage)
            console.log("fetch messages method is run")
          })

      })
      //end of test^



  }

    // method for creating a new message
    module.oldSendChat = function(message) {
      //censoring variables
      let badWords = false
      let censoredWords = 'fuck'

      if (message.text.indexOf(censoredWords) != -1) { //using text variable to find words in the message.
        badWords = true;
        console.log('it found a bad word')
      }

      if (message.text != null && badWords == false) {

        messages.push(message)
        //creating a new message
        let newMessage = document.createElement('p') //A method he jused: insertAdjecentHTML -('beforeend', ...)
        newMessage.innerHTML = `<b>${message.user}:</b> ${message.text}` //this could be a way where we could display user + message
        //adding message to List
        document.querySelector("#message").appendChild(newMessage)
        //creating a blank field for next message --> IT DOESNT WORK, WHY?
        //messageValue = ' '
        console.log("Show all messages: ", messages)



      } else {
        badMessages.push(Message)
        //creating a new message
        let newBadMessage = document.createElement('p')
        //message response variable
        let badMesageResponse = 'Message is not allowed, try again.'
        //adding badMessageResponse to the element created
        newBadMessage.innerHTML = badMesageResponse
        //adding message to List
        document.querySelector('#message').appendChild(newBadMessage)
        //creating a blank field for next message --> IT DOESNT WORK
        //message.value = ''
        console.log("Message is not allowed", badMessages)

        }
    }

//new sendChat method connecting with API
    module.sendChat = function(message) {
      //just for testing part 3 (part 2 of it):
      //fetching message from the API
              fetch('/api/messages', {
                    method: 'post',
                    credentials: 'include',
                    body: JSON.stringify(message),
                    headers: {
                        'content-type': 'application/json'
                    }
              })
                .then(response => response.json())
                .then(data => {
                    // server status ok
                    if (data.status == "OK") {
                      //html
                      let newMessage = document.createElement('p') //A method he jused: insertAdjecentHTML -('beforeend', ...)
                      newMessage.innerHTML = `<b>${message.user}:</b> ${message.text}` //this could be a way where we could display user + message
                      //adding message to List
                      document.querySelector("#chat-window").appendChild(newMessage)
                      //creating a blank field for next message --> IT DOESNT WORK, WHY?
                      //messageValue = ' '
                      console.log("Show all messages: ", messages)
                    }
                    // Do something when the message was saved
                    // Perhaps clear the input field or remove a loading indicator
                    document.querySelector('#chatMessage').value = ' '
                    console.log('is this happeing?')

                })

    }


    //searching within messages
  module.searchMessages = function(searchValue) {
      //making a new array with the messages from matching searchString either for text or user
      let results = messages.filter(currentMessage => {
        //condition of search: author and content
        console.log("search was done"); // SHOWS THAT THE METHOD IS NOT RUN IN THE HTML
        return (currentMessage.text.indexOf(searchValue) != -1) || (currentMessage.User.username.indexOf(searchValue) != -1)

      })

      //returning the array:
      return results;

  }


//End of module
  return module;
})()


//For adding to the HTML Document:

//New message:
//selecting form
let messageForm = document.querySelector('#chat-form')
//adding eventListener to form calling sendChat method
messageForm.addEventListener('submit', function(event) {
  event.preventDefault()
  // this should create the new instance of message
  let messageValue = document.querySelector('#chatMessage').value
  let message = new Message(messageValue, 'userFake')
  //calling method to send message
  Chat.sendChat(message)

})

//Searching:
let messageSearch = document.querySelector('#search-form')
messageSearch.addEventListener('submit', function(event) {
  event.preventDefault()
  //selecting input value
  let searchValue = document.querySelector('#search-input').value
  //calling method
  console.log("method is called")
  let results = Chat.searchMessages(searchValue)
  console.log("search results", results)

  results.forEach(result => {
      //here we can write how it should be displayed
      //but we can see now in the console that it works

      //I just added something so we can see it in the html
      let each = document.createElement('li')
      each.innerHTML = `<b>${result.user}:</b> ${result.text}`
      document.querySelector('#results-list').appendChild(each)
  })

})


//FOR TESTING:
/* let user1 = new User("Nat", "123456");
let user2 = new User("Lena", "1234");
let user3 = new User("Test", "56789");


let message1 = new Message("Testing if it works", user1);
let message2 = new Message("Testing again", user1);
let message3 = new Message("fuck", user1);

Chat.sendChat(message1)
Chat.sendChat(message2)
Chat.sendChat(message3)
Chat.sendChat(new Message('Hohoho', user2));

Chat.joinChat(user1);
Chat.joinChat(user2); */

Chat.displayMessages()

//Chat.searchMessages(); */
