function GetPosts(callback) {
    // AJAX
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
        callback(null, xmlHttpReq.responseText);
      }
      else if(xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200){
        callback('Something Went Wrong', xmlHttpReq.responseText);
      }
    };
    xmlHttpReq.send();
  }