const apiKey="e657b70e01f46841a68ad99f99d33b1b"
const weather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live it ",lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name
        weather.innerText= `${data.weather[0].main} / ${data.main.temp}`;
    });

}
function onGetError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGetError);
// onGeoOk({sexyObj})