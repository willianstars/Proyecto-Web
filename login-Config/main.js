const dotenv = require('dotenv')

dotenv.config()

const env = process.env

$(function () {});

const getDate = () => {
  const correo = {USER}.val();
  const password = {PASSWD}.val();
  if (correo && password) {
    // alert('Todos los campos estan bien');
    if (correo === {USER} && password === {PASSWD}) {
      location.href = "../env";
    } else {
      alert("Correo y Contraseña Fallida!");
    }
  } else {
    alert("Ingrese todos los campos");
  }
};