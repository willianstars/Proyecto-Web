import { Temperatura } from "./temperatura";
import { Conversor } from "./conversor";

const temp = new Temperatura(130, 55);
const conv = Conversor;
console.log(temp.celtofa());
console.log(temp.fatocel());
console.log(conv.clptocop(1000));
console.log(conv.coptoclp(3000));
const frutas = [
    {
        "nombre": "Manzana",
        "Precio": 4500,
        "Stock": 300
    },
    {
        "nombre": "Papaya",
        "Precio": 2500,
        "Stock": 30
    },
    {
        "nombre": "Piña",
        "Precio": 6500,
        "Stock": 20
    }
];

document.writeln('Cantidad de frutas: ',frutas.length, '<br>')

//componente que agrega filas y columnas
const tabla = (Indice, nombre, Precio, Stock) => {
    return `
        <tr>
            <td>${Indice}</td>
            <td>${nombre}</td>
            <td>${Precio}</td>
            <td>${Stock}</td>
        </tr>
    `;
}

document.write(`
    <table>
        <thead>
        <th scope="col">Indice</th>
        <th scope="col">Fruta</th>
        <th scope="col">Precio</th>
        <th scope="col">Stock</th>
        </thead>
    <tbody>
`)

let elemt = "";



for (i=0; i<frutas.length; i++){
    elemt += tabla(i, frutas[i].nombre, frutas[i].Precio, frutas[i].Stock);
}

let z = 0;

while(z < frutas.length){
    elemt += tabla(z, frutas[z].nombre, frutas[z].Precio, frutas[z].Stock);
    i++;
};


document.write(elemt);

document.write(`
    </tbody>
    </table>
`);
import { Componentes } from "./componentes";

const app = document.createElement('div');
app.id = 'root';
document.body.appendChild(app);

//encontraremos desviacion del cierre, se utiliza para q no se solapen las comillas
//innerHtml envia codigo Html mas no Componentes
app.appendChild(Componentes.boton('soy un boton', 'btn-info', 'onclick="alert(\'hola mundo\')"'));
app.appendChild(Componentes.boton('Inicio', 'btn-warning', "onclick=\"location.href='https://www.google.com'\""));
app.appendChild(Componentes.boton1('Soy un boton', 'btn' ));
