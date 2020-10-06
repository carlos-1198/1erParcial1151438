const requestURL = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const datos = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
  console.log(datos);
}