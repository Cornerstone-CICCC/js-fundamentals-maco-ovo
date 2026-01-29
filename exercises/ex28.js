/*
Create an object called facebookProfile. 
The object should have 3 properties:

- your name
- the number of friends you have, and
- an array of messages you've posted (as strings)

The object should also have 4 methods:

- postMessage(message) - adds a new message string to the array
- deleteMessage(index) - removes the message corresponding to the index provided
- addFriend() - increases the friend count by 1
- removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: 'John',
    numberOfFriend: 3,
    postedMessage: ["one", "two", "three"],
    postMessage: function (message){
        return this.postedMessage.push(message);
    },
    deleteMessage: function (index){
        return this.postedMessage.splice(index,1);
    },
    addFriend: function () {
        return this.numberOfFriend++
    },
    removeFriend: function () {
        return this.numberOfFriend--
    }
}

console.log(facebookProfile);

// test functions
//  postMessage
facebookProfile.postMessage("I went to school today.")
console.log("Add messages:\n",facebookProfile.postedMessage);

//  deleteMessage
facebookProfile.deleteMessage(1);
console.log("Delete messages:\n", facebookProfile.postedMessage);

//  addFriend
facebookProfile.addFriend()
console.log("Add a friend: ", facebookProfile.numberOfFriend);

// removeFriend
facebookProfile.removeFriend();
console.log("Remove a friend: ", facebookProfile.numberOfFriend);
