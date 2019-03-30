var database = [{
        username: "Andrei",
        password: "supersecret",
    },
    {
        username: "Sally",
        password: "123",
    },
    {
        username: "Ingrid",
        password: "777",
    }
];

var newsFeed = [{
        username: "Bobby",
        timeline: "So tired from all that learning!",
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cooool!",
    },
    {
        username: "Mitch",
        timeline: "Javascript is pretty cool!",
    }
];



function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password) === true) {
        console.log(newsFeed)
    } else {
        alert("Sorry, wrong username and/or password!");
    }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);