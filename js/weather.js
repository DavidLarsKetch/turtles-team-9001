// Variables
var lat, lon, lastKnownCityId;
var cookieJar = chrome.storage.local;
// var tempIcons = {
//   '01d': '',
//   '02d': '',
//   '03d': '',
//   '04d': '',
//   '09d': '',
//   '10d': '',
//   '11d': '',
//   '13d': '',
//   '50d': '',
//   '01n': '',
//   '02n': '',
//   '03n': '',
//   '04n': '',
//   '09n': '',
//   '10n': '',
//   '11n': '',
//   '13n': '',
//   '50n': ''
// };

function geoFallback() {
  cookieJar.get('lastKnownCityId', (data) => {
    catsAndDogs(data.lastKnownCityId);
  });
};

// Code to be executed immediately
(() => {
  if (navigator.geolocation) {
    // geolocation IS available
    console.log('HTML5 Geolocation API is available...')
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log('Geolocation successful!')
      console.log(position);
      catsAndDogs();
    }, (error) => {
      // ...but it didn't work...
      console.log('Geolocation unsuccessful. Executing Plan B...')
      console.log(error);
      geoFallback();
    });
  } else {
    // geolocation IS NOT available
    console.log("HTML5 Geolocation API is not available. Executing Plan B...");
    geoFallback();
  };
})();


function catsAndDogs(city) {
  if (!city) {
    // Get location based on API data
    console.log('No city ID passed, retreiving weather data based on geolocation coordinates.');
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: lat,
        lon: lon,
        APPID: "b38e53f0c663c60a0f289cb29826d117"
      }
    })
    .then((response) => {
      console.log('Weather data retreived!');
      console.log(response);
      lastKnownCityId = response.data.sys.id;
      cookieJar.set({'lastKnownCityId': lastKnownCityId});
      document.getElementById('tempC').innerHTML = Math.round(response.data.main.temp - 273.15) + "&deg;C";
      document.getElementById('tempCity').innerHTML = response.data.name;
      var iconId = response.data.weather[0].icon;
      var classString = "icon icon" + iconId;
      document.getElementById('tempIcon').className = classString;
    })
    .catch((error) => {
      console.log('There was an error retreiving weather data:')
      console.log(error);
    });
  } else {
    console.log('City was passed, this part of the function is not set up yet...');
  };
};

// document.getElementById('button').addEventListener("click", isItRaining);
