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
  alert(
    "Your Latitude is: " +
      position.coords.latitude +
      " and your Longitude is " +
      position.coords.longitude
  );
};
