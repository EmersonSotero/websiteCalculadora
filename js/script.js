function calcularValores(){
    var numbOne =  document.getElementById("txtvalor1").value;
    var numbTwo =  document.getElementById("txtvalor2").value;
    var option =  document.getElementById("cbxOperacao").value;
        var resultado;

    switch(option){
        case "+":
            resultado = +numbOne + +numbTwo;
            break;
        
        case "-":
            resultado = numbOne - numbTwo;
            break;
        
        case "*":
            resultado = numbOne * numbTwo;
            break;
        
        case "/":
            resultado = numbOne / numbTwo;
            break;
    }

    document.getElementById("txtresultado").innerHTML= resultado;
        
}