const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")

const link = document.querySelector("a");
const USERNAME_KEY = "username"
const saveUsername = localStorage.getItem(USERNAME_KEY)

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden")
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(saveUsername){
    greeting.innerText = "Hello " + saveUsername;
    greeting.classList.remove("hidden")
    document.querySelector("#todo-div").classList.remove("hidden")
}

if(saveUsername === null){
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove("hidden")
}else{
    paintGreetings(saveUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);