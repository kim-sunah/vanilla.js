const clockContainer= document.querySelector(".js-clock"),
clockTitle= clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();
    const minites= date.getMinutes();
    const hours = date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${
        hours<10 ? `0${hours}`:hours}:${
        minites<10 ? `0${minites}`:minites}:${
        seconds<10 ? `0${seconds}`:seconds
}`;

}
function init(){
    getTime();
    setInterval(getTime,1000);
    //setInterval(fn, 1000)
    //첫번째 인자로 실행할 함수(fn)를 받고 그 함수를 실행하고 싶은 시간(1000)
}
init();