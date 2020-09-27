
'use strict';

// Correct account data (username and password)
const accountData = {correctId : "test", correctPass : "1234"};
//To get access to title and content element in HTML
let title = document.getElementById('title');
let content = document.getElementById("content");

checkLogined();
//To create checkLogined() when username and password already exist in localStorage:
function checkLogined() {
    if (localStorage.username === accountData.correctId && 
        localStorage.password === accountData.correctPass) {       
        welcomePage();
    } 
    else{
        loginPage();
    }
}
//To create loginPage() as start page:
function loginPage() {
    title.innerHTML = "LoginPage";
    content.innerHTML = "";
    let usernameField=document.createElement("INPUT");
    let passwordField=document.createElement("INPUT");
    usernameField.setAttribute("type","text");
    usernameField.setAttribute("id","userName");
    usernameField.setAttribute("placeholder","Input your username");
    passwordField.setAttribute("type","text");
    passwordField.setAttribute("id","passWord");
    passwordField.setAttribute("placeholder","Input your password");
    content.appendChild(usernameField);
    content.appendChild(passwordField);
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "<b>Login</b>";
    btn.setAttribute("id", "Login");
    btn.onclick = () => loginBtn()
    content.appendChild(btn);
    console.log(btn);
}

// To create login() function
function loginBtn() {
    let userName = document.getElementById("userName");
    let passWord = document.getElementById("passWord");
    let user={
        userId: userName.value,
        userPass: passWord.value
    };
    // Log in if username and password are correct:
    if (user.userId === accountData.correctId && 
        user.userPass === accountData.correctPass) {       
        welcomePage();
        localStorage.setItem("username", user.userId);
        localStorage.setItem("password", user.userPass);
    } else {
        loginFailed();
    };
};
// To create welcomePage() when userinputs are correct:
function welcomePage() {
    title.innerHTML = "WelcomePage";
    content.innerHTML = "";
    let textField=document.createElement("P");
    textField.setAttribute("type","text");
    textField.setAttribute("id","welcomeText");
    textField.innerHTML = "Click on button to lagout and clear localStrotage!";
    content.appendChild(textField);
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "<b>Logout</b>";
    btn.setAttribute("id", "logout");
    btn.onclick = () => logoutBtn();
    content.appendChild(btn);
}

// To create logoutBtn() to logout:
function logoutBtn() {
    loginPage();
    localStorage.clear();
};
//To create a function when login fails:
function loginFailed() {
    title.innerHTML = "Login Failed!";
    title.style.color = "red";
    content.innerHTML = "";
    let textField=document.createElement("P");
    textField.setAttribute("type","text");
    textField.setAttribute("id","errorText");
    textField.innerHTML = "Click on button to go back to Login page!";
    content.appendChild(textField);
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "<b>Back</b>";
    btn.setAttribute("id", "backToLogin");
    btn.onclick = () => backToLogin();
    btn.style.color = "red";
    content.appendChild(btn);
}
// To create backToLogin() fo go to login page:
function backToLogin() {
    loginPage();
    localStorage.clear();
};