// 1. No access to window/document
// 2. No access to global variables from main thread
// 3. No access to local/sessionStorage
// 4. Have access to XMLHttpRequest/fetch/IndexedDB

var largeArray = [];
onmessage = function (e) {
  for (let i = 0; i < 7000; i++) {
    largeArray[i] = [];
    for (let j = 0; j < 6000; j++) {
      largeArray[i][j] = Math.random();
    }
  }
  postMessage(largeArray[3000][3000]);
};
