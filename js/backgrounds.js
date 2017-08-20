(() => {
  axios.get('http://www.reddit.com/r/earthporn/.json', {
    params: {
      show: 'all',
      limit: 50
    }
  })
    .then((response) => {
      var i = Math.floor(Math.random() * 49);
      var img = response.data.data.children[i].data;
      console.log(response.data.data.children[i].data);
      document.querySelector('body').setAttribute("style", "background-image: url('" + img.url + "')");
      document.getElementById('bgTitle').innerHTML = '<a href="http://reddit.com' + img.permalink + '" target="_blank">' + img.title.substring(0, 30).trim() + '...</a>';
      document.getElementById('bgUser').innerHTML = img.author + ' on <a href="https://www.reddit.com/r/EarthPorn/" target="_blank">r/EarthPorn</a>';
    });
})();
