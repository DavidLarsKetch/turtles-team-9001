(() => {
  axios.get('http://www.reddit.com/r/earthporn/.json', {
    params: {
      show: 'all',
      limit: 50
    }
  })
    .then((response) => {
      var i = Math.floor(Math.random() * 49);
      var imgURL = response.data.data.children[i].data.url;
      console.log(response.data.data.children[i].data);
      document.querySelector('body').setAttribute("style", "background-image: url('" + imgURL + "')");
    });
})();
