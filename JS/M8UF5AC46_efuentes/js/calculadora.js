function afegir(x) {
    if(x.value == 1) {
        document.calculadora.result.value += "1";
    } else if(x.value == 2) {
        document.calculadora.result.value += "2";
    } else if(x.value == 3) {
        document.calculadora.result.value += "3";
    } else if(x.value == 4) {
        document.calculadora.result.value += "4";
    } else if(x.value == 5) {
        document.calculadora.result.value += "5";
    } else if(x.value == 6) {
        document.calculadora.result.value += "6";
    } else if(x.value == 7) {
        document.calculadora.result.value += "7";
    } else if(x.value == 8) {
        document.calculadora.result.value += "8";
    } else if(x.value == 9) {
        document.calculadora.result.value += "9";
    } else if(x.value == 0) {
        document.calculadora.result.value += "0";
    } else if(x.value == "+") {
        document.calculadora.result.value += "+";
    } else if(x.value == "-") {
        document.calculadora.result.value += "-";
    } else if(x.value == "*") {
        document.calculadora.result.value += "*";
    } else if(x.value == "/") {
        document.calculadora.result.value += "/";
    } else if(x.value == "=") {
        document.calculadora.result.value = eval(document.calculadora.result.value);
    } else if(x.value == "c") {
        document.calculadora.result.value = "";
    } else if(x.value == ".") {
        document.calculadora.result.value += ".";
    }
    
}