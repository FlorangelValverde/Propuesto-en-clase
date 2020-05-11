var op = prompt ("Elija una opcion: ");
   switch (parseFloat(op)) {
    case 1: var a= parseFloat(prompt("N1: "))
    var b = parseFloat(prompt("N2: "))
    document.write("La suma es: ",a+b);
        break;
    case 2: var a= parseInt(prompt("N1: "))
    var b = parseInt(prompt("N2: "))
    document.write("La resta es: ",a-b);
        break;
        case 3: var a= parseInt(prompt("N1: "))
        var b = parseInt(prompt("N2: "))
        document.write("La multiplicacion es: ",a*b);
        break;
        case 4: var a= parseInt(prompt("N1: "))
        var b = parseInt(prompt("N2: "))
        if (b==0) {
            document.write("Se intenta dividir entre cero");
        } else {
            document.write("La division es: ",a/b);
        }
        break;
        case 5: var a= parseInt(prompt("N1: "))
        document.write("La raíz cubica es: ",Math.pow(parseInt(a),1/3));
        break;
        case 6:  var a= parseInt(prompt("N1: "))
        var s =1;
        for (i=1; i<a+1;i++){
            s*=i;
        }
        document.write("Factorial: ",s);
        break;
        case 7: var a= parseInt(prompt("N1: "))
        document.write("Potencia: ", Math.pow(parseInt(a),2));
        break;
    default:
        break;
}


