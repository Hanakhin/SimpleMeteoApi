
let api = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"




function fetchWeather() {
    const lat = document.getElementById('latitudeInput').value;
    const lon = document.getElementById('longitudeInput').value;

    if (lat && lon) {
        getWeather(lat, lon)
            .then(weatherData => {
                console.log('Weather data:', weatherData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Please enter both latitude and longitude.');
    }
}

async function getWeather(lat, lon) {
    const apiKey = '';
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(apiCall);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();

    let city = document.getElementById('city')
    city.innerText = data.name

    let country = document.getElementById("country")
    country.innerText = data.sys.country

    let cityTemp = document.getElementById("cityTemp")
    cityTemp.innerText = Math.ceil((data.main.temp/10).toFixed(2))

    let feelsLike = document.getElementById("feelsLike")
    feelsLike.innerText = Math.ceil((data.main.feels_like/10).toFixed(2))

    let humidity = document.getElementById("humidity")
    humidity.innerText = data.main.humidity

    let cityWeather = document.getElementById("cityWeather")
    cityWeather.innerText = data.weather[0].main

    let container = document.getElementById('weatherContainer');
    container.setAttribute('style', 'display:flex');

}



async function getMyWeather(){
    const apiKey= '83199ab8906693f93547f28bedff65d6';

    navigator.geolocation.getCurrentPosition(async position => {
        const coords = position.coords
        let lat = coords.latitude
        let lon = coords.longitude
        let apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        const response = await fetch(apiCall);
        const data = await response.json();

        console.log(data)

        let city = document.getElementById('city')
        city.innerText = data.name

        let country = document.getElementById("country")
        country.innerText = data.sys.country

        let cityTemp = document.getElementById("cityTemp")
        cityTemp.innerText = Math.ceil((data.main.temp/10).toFixed(2))

        let feelsLike = document.getElementById("feelsLike")
        feelsLike.innerText = Math.ceil((data.main.feels_like/10).toFixed(2))

        let humidity = document.getElementById("humidity")
        humidity.innerText = data.main.humidity

        let cityWeather = document.getElementById("cityWeather")
        cityWeather.innerText = data.weather[0].main

        let container = document.getElementById('weatherContainer');
        container.setAttribute('style', 'display:flex');


        if(data.main.temp >=20){
            let weatherIcon = document.getElementById('weatherIcon')
            weatherIcon.setAttribute('class','fas fa-sun')
        }

    })


}