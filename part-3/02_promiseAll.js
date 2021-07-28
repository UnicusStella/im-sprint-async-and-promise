var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다

  let newsData = fetch(newsURL)
    .then((response) => response.json())
    .then((newsdata) => {
      return newsdata.data;
    });
  let weatherData = fetch(weatherURL)
    .then((response) => response.json())
    .then((weatherdata) => {
      return weatherdata;
    });

  return Promise.all([newsData, weatherData]).then((value) => {
    const obj = {};
    obj.news = value[0];
    obj.weather = value[1];
    return obj;
  });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
