var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([data1, data2]) => {
      return Promise.all([data1.json(), data2.json()]);
    })
    .then(([news, weather]) => {
      return { news: news.data, weather: weather };
    });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
