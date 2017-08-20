(() => {
  axios.get('http://www.reddit.com/r/earthporn/.json?show=all&limit=50')
    .then(function(res){console.log(res.data.data.children)});
})();
