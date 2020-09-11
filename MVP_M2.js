
'use strict';

//Get user input data from HTML:
const userName = document.getElementById("userName");
const passWord = document.getElementById("password");

// Correct account data (username and password)
let accountData = {correctId : "test", 
      correctPass : "1234"  
    };

// To create login() function
function login() {
    const user={
        userId: userName.value,
        userPass: passWord.value
    };
    // Log in if username and password are
    if (user.userId === accountData.correctId && 
        user.userPass === accountData.correctPass) {       
        localStorage.setItem("user_copy", JSON.stringify(user));
        
        let original = localStorage.getItem("user_copy");
        let obj = JSON.parse(original);

        document.getElementById('logInPage').style.visibility="hidden";
        document.getElementById('welcomePage').style.visibility="visible";

    } else {
        document.getElementById('logInPage').style.visibility="hidden";
        document.getElementById('failedPage').style.visibility="visible";
    }
}

// To create logout() function
function logout() {
    document.getElementById('logInPage').style.visibility="visible";
    document.getElementById('welcomePage').style.visibility="hidden";
    location.reload();
    localStorage.clear();
    console.log(localStorage);
}

// To create backToLogin() function
function backToLogin() {
    document.getElementById('logInPage').style.visibility="visible";
    document.getElementById('welcomePage').style.visibility="hidden";
    location.reload();
    localStorage.clear();
    console.log(localStorage);
}