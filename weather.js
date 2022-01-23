navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr)

function onGeoOk(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const divWeather = document.getElementById("weather")
        const newSpan = document.createElement("span")
        const newSpan2 = document.createElement("span")
        newSpan.classList.add("fade-in-box")
        divWeather.appendChild(newSpan)
        const weatherShow = document.querySelector("#weather span:first-child")
        weatherShow.innerText = `${data.weather[0].main} ${data.main.temp}℃ ${data.name}`;
    })
}
function onGeoErr(){
    alert("cant")
}



const API_KEY = "6e6c49afe4fb50796340640b8a02d18d"

