function pulse() {
  document.querySelector('.pulsar').className = "pulsar";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector('.pulsar').className = "pulsar pulse";
    });
  });
}
function clickB() {
  document.querySelector('.animated').className = "animated";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector('.animated').className = "animated click";
    });
  });
}