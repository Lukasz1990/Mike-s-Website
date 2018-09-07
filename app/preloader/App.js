(function() {
  var preloader = document.querySelector("preloader");
  var loading = 0;
  var id = setInterval(frame, 64);

  function frame() {
    if (loading == 80) {
      clearInterval(id);
      window.open("index.html", "_self");
    } else {
      loading = loading + 1;
    }
  }
})();
