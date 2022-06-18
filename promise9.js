function fnc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("작업이 종료되었습니다. 그 다음을 수행해도 된다. ");
    }, 1000);
  });
}
