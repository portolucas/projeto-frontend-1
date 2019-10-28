const lat = "Latitude: ";
const long = "Longitude: ";

function onSuccess(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
  
    document.getElementById('startLat').innerHTML = `${lat} ${latitude}`;
    document.getElementById('startLon').innerHTML =  `${long} ${longitude}`;
  
  };  

  function onError (error){
    document.getElementById("errorMessage").innerHTML = 'Motivo: ' + error.message;
  }
  

export {lat, long, onSuccess, onError};