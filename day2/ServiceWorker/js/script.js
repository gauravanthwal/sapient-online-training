if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      this.navigator.serviceWorker.register("serviceWorker.js").then(
        function () {
          console.log("Service Worker registered !");
        },
        function () {
          console.log("Error registering service worker !");
        }
      );
    });
  }
  
  