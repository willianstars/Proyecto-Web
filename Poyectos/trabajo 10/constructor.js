class Temperatura {

    constructor (celcius, fahrenheit){
        this.celcius = celcius;
        this.fahrenheit = fahrenheit;
    }

    FormulaCelcius = () => {
        return ((this.fahrenheit * 9/5) + 32);
    }
    
    FormulaFahrenheit = () => {
        return ((this.celcius -32) * (5/9));
    }

    
        
}