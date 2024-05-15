const city = document.querySelector("#weather .city");
const weather = document.querySelector("#weather .description");
const weatherIcon = document.querySelector("#weather .weather_icon");
const temp = document.querySelector("#weather .temp");
const humidity = document.querySelector("#weather .humidity");

city.innerText = "Loading...";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  // 로딩중
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;//내 위치
      weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)// 날씨 아이콘
      weather.innerText = `${data.weather[0].main}`;// 날씨
      temp.innerText = `${parseFloat(data.main.temp).toFixed(1)}℃ /`;// 섭씨
      humidity.classList.add('on');
      humidity.innerText = `${data.main.humidity}%`;// 습도
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);