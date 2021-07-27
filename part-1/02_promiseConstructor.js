const sleep = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('에러'));
    }, wait);
  });
};
