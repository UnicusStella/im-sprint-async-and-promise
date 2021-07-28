var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다

  let obj = {};

  let newsData = await fetch(newsURL).then((response) => response.json());

  let weatherData = await fetch(weatherURL).then((response) => response.json());

  obj.news = newsData.data;
  obj.weather = weatherData;

  return obj;
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
