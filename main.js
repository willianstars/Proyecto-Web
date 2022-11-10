const express = require(' express ')
const dotenv = require(' dotenv ')
//const morgan = require('morgan')

dotenv.config()

const app2 = express()

const env = process.env

// require(' dotenv ').config()


app2.use(express.urlencoded());
app2.use(express.json());
app2.use(morgan('build'))
app2.set('puerto', env.PORT)
getDate.use(env.USER)
getDate.use(env.PASSWD)

app2.listen(app2.get('puerto'), () => {
  console.log('servidor iniciado: ', app2.get('puerto'))
})

const getDate = () => {
  const correo = correo.val();
  const password = password.val();
  if (correo && password) {
    // alert('Todos los campos estan bien');
    if (correo === {USER} && password === {PASSWD}) {
      location.href = "./login-Config/index.html";
    } else {
      alert("Correo y Contraseña Fallida!");
    }
  } else {
    alert("Ingrese todos los campos");
  }
};
