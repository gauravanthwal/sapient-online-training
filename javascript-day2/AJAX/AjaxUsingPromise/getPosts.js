function getPosts() {
  return new Promise((resolve, reject) => {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
        // callback(null, xmlHttpReq.responseText);
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
        // callback('Something Went Wrong', xmlHttpReq.responseText);
        reject("Something Went Wrong !");
      }
    };
    xmlHttpReq.send();
  });
}
