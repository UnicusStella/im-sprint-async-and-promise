var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return fetch(newsURL)
    .then((res) => res.json())
    .then((data1) => {
      return fetch(weatherURL)
        .then((res) => res.json())
        .then((data2) => {
          return { news: data1.data, weather: data2 };
        });
    });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather,
  };
}
