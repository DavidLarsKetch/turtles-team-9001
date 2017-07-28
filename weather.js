// Variables
var lat;
var lon;


// Code to be executed immediately
(function(){
  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      isItRaining();
    });
  } else {
    /* geolocation IS NOT available */
    console.log("Executing Plan B.");
  };
})();


function isItRaining() {
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: lat,
      lon: lon,
      APPID: "b38e53f0c663c60a0f289cb29826d117"
    }
  })
  .then(function (response) {
    console.log(response);
    var responseBody = document.createElement('p');
    responseBody.innerHTML = "It is " + Math.round(response.data.main.temp - 273.15) + " degrees Celcius and " + response.data.weather[0].description + " in " + response.data.name + ".";
    document.getElementById('results').appendChild(responseBody);
  })
  .catch(function (error) {
    console.log(error);
  });
}

document.getElementById('button').addEventListener("click", isItRaining);
