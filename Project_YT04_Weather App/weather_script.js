const ApiKey = '2deffb0e766057eae51527f59d0f35e8';
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const cityName = document.querySelector('#cityName');
const btn = document.querySelector('#searchBtn');
const weatherIcon = document.querySelector('.weather-icon');

async function CheckWeather(inputBox) {

    //to assign the fetched api data to the var'response'
    const response = await fetch(`${ApiUrl}${inputBox}&appid=${ApiKey}`);
    //to asign the response to var 'data' into js object format(ie to make the api data it into js object code using json method )
    const data = await response.json();

    //if incorrect city name;
    if (data.cod === '404') {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }

    //correct city name;
    else {
        //to give results of the api data to the developer  
        console.log(data);

        //assign api data values to its respective elements
        document.querySelector('.City').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.wind').innerHTML = (data.wind.speed * 3.6).toFixed(2) + ' km/h';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';

        //assign icons according to current weather situation;
        if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png';
        }
        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
        }
        if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        }
        if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png';
        }
        if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png';
        }
        if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'images/snow.png';
        }
        if (data.weather[0].main === 'Smoke') {
            weatherIcon.src = 'images/mist.png';
        }

        //to reveal the hidden default display 
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

    }

}

// to assign event to search button and calling the above async function;
btn.addEventListener('click', () => {
    CheckWeather(cityName.value);
});
