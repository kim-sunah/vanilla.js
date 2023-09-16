const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}
function sayBye() {
    console.log("bye")
}
getClock()
setInterval(getClock, 1000)

setTimeout(sayBye, 2000)