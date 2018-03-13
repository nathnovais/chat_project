// user constructor
function User (username, email) {
  this.username = username
  this.email = email
}

var Chat = (function() {
  //Users
  let users = []

  let module = {}

  module.joinChat = function(user) {
    console.log('user is joining chat', user)
    users.push(user)
  }
}
  module.helloWorld = function () {
    console.log('Hello World')
  }
  return module

)
