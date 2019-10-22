const lat = "Latitude: ";
const long = "Longitude: ";

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("registrarPonto").onclick = function() {
    getPosition();
  };
});

let getPosition = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( position =>{
      onSuccess(position)
    }, error => {
      onError(error)
    }
    );
  }
};

let onError = function (error){
  document.getElementById("errorMessage").innerHTML = 'Motivo: ' + error.message;
}

let onSuccess = function(position) {

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  document.getElementById('startLat').innerHTML = `${lat} ${latitude}`;
  document.getElementById('startLon').innerHTML =  `${long} ${longitude}`;

};



