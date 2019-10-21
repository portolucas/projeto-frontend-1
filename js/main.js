document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("registrarPonto").onclick = function() {
    getPosition();
  };
});

var getPosition = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(positionObj);
  }
};

var positionObj = function(position) {
  document.getElementById('startLat').innerHTML = 'Latitude: ' + position.coords.latitude;
  document.getElementById('startLon').innerHTML = 'Longitude: ' + position.coords.longitude;
};




