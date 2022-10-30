var val1 = 0;
var val2 = 0;
var operador = "";
var displ = document.getElementById("pantallax");

function clearing(){
    displ.value = 0;
    val1 = 0;
    val2 = 0;
    operador = "";
}
function numbers(num){
    if(parseInt(displ.value) === 0){
        displ.value = num;
    } else {
        displ.value += num;
    }
}
function operadores(opera){
    val1 = displ.value;
    if(opera == "+"){
        operador = "+";
    } else if (opera == "-"){
        operador = "-";
    } else if (opera == "*"){
        operador = "*";
    } else if(opera == "/"){
        operador = "/";
    }
    displ.value = 0;
}
function igual(){
    val2 = displ.value;
    if(operador == "+"){
        displ.value = parseInt(val1) + parseInt(val2);
    } else if (operador == "-"){
        displ.value = parseInt(val1) - parseInt(val2);
    } else if (operador == "*"){
        displ.value = parseInt(val1) * parseInt(val2);
    } else if (operador == "/"){
        displ.value = parseInt(val1) / parseInt(val2);
    }
    val1 = displ.value;
}