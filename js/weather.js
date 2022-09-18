const API_KEY = '4a7fc725f0327e470a62e530c54f2871'
//https://api.openweathermap.org/data/2.5/weather?lat=33.7149952&lon=-117.7780224&appid=4a7fc725f0327e470a62e530c54f2871
const weather = document.querySelector("#weather span:first-child"); 
const city = document.querySelector("#weather span:last-child")

function onGeoSuccess(position) {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
    city.innerText = data.name; 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`})
    console.log(url)    
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
