const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let newArr = [];
  return getDataFromFilePromise(user1Path).then((user1) => {
    return getDataFromFilePromise(user2Path).then((user2) => {
      newArr.push(user1, user2);
      return newArr.map(JSON.parse);
    });
  });
};
// test
/* return getDataFromFilePromise(user1Path).then(
    (user1) => newArr.push(user1),
    getDataFromFilePromise(user2Path).then(
      (user2) => newArr.push(user2),
      newArr.map(JSON.parse)
    )
  );
}; */

// another
/* getDataFromFilePromise(user1Path).then((user1) => newArr.psush(user1))
    getDataFromFilePromise(user2Path).then((user2) => newArr.psush(user2),newArr.push(user1, user2),newArr.map(JSON.parse);)
}; */

readAllUsersChaining();

module.exports = {
  readAllUsersChaining,
};
