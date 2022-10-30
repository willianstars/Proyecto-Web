class TemperaturA {
    static FormulACelcius = (fahrenheit) => {
        return ((fahrenheit* 9/5) + 32);
    }
    static FormulAFahrenheit = (celcius) => {
        return ((celcius -32) * (5/9));
    }
    static evaluar = () => TemperaturA ? "Esta bien" : "Esta mal";
}