const form=document.querySelector(".js-form"),
input=form.querySelector("input");
greeting=document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CH="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handelSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CH);
    form.addEventListener("submit",handelSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CH);
    greeting.classList.add(SHOWING_CH);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
        askForName();
    }else{
        //she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();



