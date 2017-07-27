function isItRaining() {
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: "Ottawa,ca",
      APPID: "b38e53f0c663c60a0f289cb29826d117"
    }
  })
  .then(function (response) {
    console.log(response);
    var responseBody = document.createElement('p');
    responseBody.innerHTML = JSON.stringify(response.data);
    document.getElementById('results').appendChild(responseBody);
  })
  .catch(function (error) {
    console.log(error);
  });
}

document.getElementById('button').addEventListener("click", isItRaining);
