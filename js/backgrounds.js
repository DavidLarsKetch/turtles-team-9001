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
    } else if (src == '500px') {
    } else {
      console.log('Shit... something\'s wrong here....');
    }
  }

  if (window.localStorage.getItem('bgSrc')) {
    setBackgroundSource(window.localStorage.getItem('bgSrc'));
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
    }
  });
  document.getElementById('imgSrc2').addEventListener('change', () => {
    if (!window.localStorage.getItem('bgSrc') || window.localStorage.getItem('bgSrc') != 'flickr') {
      window.localStorage.setItem('bgSrc', 'flickr');
      window.bgRefresh('flickr');
    }
  });
  document.getElementById('imgSrc3').addEventListener('change', () => {
    if (!window.localStorage.getItem('bgSrc') || window.localStorage.getItem('bgSrc') != '500px') {
      window.localStorage.setItem('bgSrc', '500px');
      window.bgRefresh('500px');
    }
  });
})();
