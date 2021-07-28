const { reject } = require('underscore');

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return new Promise((resolve, reject) => {
    resolve(
      fetch(newsURL)
        .then((response) => response.json())
        .then((newsData) =>
          fetch(weatherURL)
            .then((response) => response.json())
            .then((weather) => {
              newsData.news = newsData.data;
              delete newsData.data;
              let obj = { ...newsData, weather };
              console.log(obj);
              return obj;
            })
        )
    );
  });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather,
  };
}
