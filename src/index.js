import './img/favicon.ico';
import '../dist/css/index.css';
import {lat, long, onSuccess, onError} from './position';

lat;
long;

document.getElementById("registrarPonto").addEventListener('click', getPosition);

function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( position => {
      onSuccess(position)
    }, error => {
      onError(error)
    }
    );
  }
};

onSuccess(position);
onError(error);





