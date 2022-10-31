class Calculadora {
    //el objeto constructor se encarga de crear las variables globales que se utilizaran dentro de la clase y sus funciones internas

    //this haces referencia a elementos que forman parte del objeto principal
    // ejemplo this.num1 es una variable global de calculadora, mientras que num1 es un parametro
    
    constructor (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }


    
    suma = () => {
        return (this.num1 + this.num2);
    }
    multiplicar = () => {
        return (this.num1 * this.num2);
    }

    // funcion de objeto estatico, es libre del constructor
    static cInt = () => {
        return parseInt (num1);
    }

}