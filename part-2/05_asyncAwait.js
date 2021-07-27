const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  let newArr = [];
  let x = await getDataFromFilePromise(user1Path).then((data) =>
    JSON.parse(data)
  );
  let y = await getDataFromFilePromise(user2Path).then((data) =>
    JSON.parse(data)
  );

  newArr.push(x, y);

  return newArr;
};

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait,
};
