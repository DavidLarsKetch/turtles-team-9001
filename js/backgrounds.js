(() => {
  function setBackgroundSource(src) {
    if (src == 'earthporn') {
      axios.get('http://www.reddit.com/r/earthporn/.json', {
        params: {
          show: 'all',
          limit: 50
        }
      })
      .then((response) => {
        var i = Math.floor(Math.random() * 49);
        var img = response.data.data.children[i].data;
        // console.log(response.data.data.children[i].data);
        // console.log(response.data.data.children[i].data.preview.images);
        document.querySelector('body').setAttribute("style", "background-image: url('" + img.preview.images[0].source.url + "')");
        document.getElementById('bgTitle').innerHTML = '<a href="http://reddit.com' + img.permalink + '" target="_blank">' + img.title.substring(0, 30).trim() + '...</a>';
        document.getElementById('bgUser').innerHTML = img.author + ' on <a href="https://www.reddit.com/r/EarthPorn/" target="_blank">r/EarthPorn</a>';
      });
    } else if (src == 'flickr') {
      axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=13a9cb0ba60113a74324c966811a0bec&group_id=364847%40N20&format=json&nojsoncallback=1&extras=owner_name')
      .then((response) => {
        var i = Math.floor(Math.random() * 99);
        var img = response.data.photos.photo[i];
        console.log(response.data.photos.photo[i]);
        document.querySelector('body').setAttribute("style", "background-image: url('https://farm" + img.farm + ".staticflickr.com/" + img.server + "/" + img.id + "_" + img.secret + "_h.jpg')");
        document.getElementById('bgTitle').innerHTML = '<a href="https://www.flickr.com/photos/' + img.owner + '/' + img.id + '" target="_blank">' + img.title.substring(0, 30).trim() + '...</a>';
        document.getElementById('bgUser').innerHTML = img.ownername + ' on <a href="https://www.flickr.com" target="_blank">Flickr</a>';
      });
    } else if (src == '500px') {
      axios.get('https://api.500px.com/v1/photos/search', {
        params: {
          rpp: 50,
          consumer_key: '4PKPTxlelNuMvCWpEmoEctVou76D46eoWq90Z0m3',
          only: 'Landscape',
          image_size: 2048
        }
      })
      .then((response) => {
        var i = Math.floor(Math.random() * 49);
        var img = response.data.photos[i];
        console.log(response.data.photos[i]);
        // console.log(response.data.data.children[i].data.preview.images);
        document.querySelector('body').setAttribute("style", "background-image: url('" + img.images[0].url + "')");
        document.getElementById('bgTitle').innerHTML = '<a href="http://500px.com' + img.url + '" target="_blank">' + img.description.substring(0, 30).trim() + '...</a>';
        document.getElementById('bgUser').innerHTML = img.user.username + ' on <a href="https://500px.com" target="_blank">500px</a>';
      });
    } else {
      console.log('Shit... something\'s wrong here....');
    }
  }

  if (window.localStorage.getItem('bgSrc')) {
    setBackgroundSource(window.localStorage.getItem('bgSrc'));
    document.querySelector('[value="' + window.localStorage.getItem('bgSrc') + '"]').setAttribute('checked', true);
  } else {
    setBackgroundSource('earthporn');
  }

  document.getElementById('imageSelectionToggle').addEventListener('click', () => {
    document.getElementById('info').classList.toggle('expand');
  });

  window.bgRefresh = function(input) {
    setBackgroundSource(input);
    console.log('Background refreshed: ' + input);
  }

  document.getElementById('imgSrc1').addEventListener('change', () => {
    if (!window.localStorage.getItem('bgSrc') || window.localStorage.getItem('bgSrc') != 'earthporn') {
      window.localStorage.setItem('bgSrc', 'earthporn');
      window.bgRefresh('earthporn');
      document.getElementById('info').classList.toggle('expand');
    }
  });
  document.getElementById('imgSrc2').addEventListener('change', () => {
    if (!window.localStorage.getItem('bgSrc') || window.localStorage.getItem('bgSrc') != 'flickr') {
      window.localStorage.setItem('bgSrc', 'flickr');
      window.bgRefresh('flickr');
      document.getElementById('info').classList.toggle('expand');
    }
  });
  document.getElementById('imgSrc3').addEventListener('change', () => {
    if (!window.localStorage.getItem('bgSrc') || window.localStorage.getItem('bgSrc') != '500px') {
      window.localStorage.setItem('bgSrc', '500px');
      window.bgRefresh('500px');
      document.getElementById('info').classList.toggle('expand');
    }
  });
})();
