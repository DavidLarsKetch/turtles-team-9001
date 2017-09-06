(function getQuestion() {
    // get question from api
    return axios.get('https://api.github.com/repos/h5bp/Front-end-Developer-Interview-Questions/readme')
    .then(function(response) {
      console.log(response.data.content);
    })
    .catch(function(error) {
      console.log(error);
    });
})()