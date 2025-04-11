// build facebook page


var database = [
    {
        username: 'andrei',
        password: 'supersecret'
    }
];

var newsfeed = [
    {
        username: 'Bobby',
        timeline: 'So tired from all that learning!'
    },
    {
        username: 'Sally',
        timeline: 'Javascript is so cool!'
    },
    {
        username: 'Mitch',
        timeline: 'Javascript is pretyy cool!'
    }
];

function signIn(username, password) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    }
    else {
        alert('Sorry, wrong username and password');
    }
}
var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
        // console.log(userNamePrompt);