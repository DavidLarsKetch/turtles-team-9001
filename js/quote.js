// return a quote
function getQuote() {
  // get quote from api
  return axios.get('http://quotes.stormconsultancy.co.uk/random.json')
  .then(function(response) {
    return response.data.quote;
  })
  .catch(function(error) {
    console.log(error);
  });
}

(async function putQuote(quote) {
  const div = document.getElementById('quote');
  const paragraph = document.createElement('p');
  paragraph.textContent = await getQuote();
  div.appendChild(paragraph);
})();
