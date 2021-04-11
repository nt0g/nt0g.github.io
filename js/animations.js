function pulse() {
  document.querySelector('.pulsar').className = "pulsar";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector('.pulsar').className = "pulsar pulse";
    });
  });
}
