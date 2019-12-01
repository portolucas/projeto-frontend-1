import "./img/apple-touch-icon.png";
import "./img/favicon-32x32.png";
import "./img/favicon-142x142.png";
import "./img/favicon-144x144.png";
import "./img/favicon-192x192.png";
import "./img/favicon-512x512.png";
import "../dist/css/index.css";
import { lat, long, onSuccess, onError } from "./position";

lat;
long;

document
  .getElementById("registrarPonto")
  .addEventListener("click", getPosition);

function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        onSuccess(position);
      },
      error => {
        onError(error);
      }
    );
  }
}

onSuccess(position);
onError(error);
