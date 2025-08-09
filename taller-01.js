console.log("Primer Punto: Convertidor de Temperatura");

function convertidorTemp(celsius) {
    return celsius * (9/5) + 32;
}
console.log(convertidorTemp(-40)); 

console.log("Segundo Punto: resolvedor")

function resolvedor(a,b,c, signo) {

    if(signo == true){
        return (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    }else{
            return (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    }
}
console.log(resolvedor(1,5,4,true));
console.log(resolvedor(1,5,4,false));

console.log("Tercer Punto: Mejor Paridad");

function mejorParidad(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(mejorParidad(4));

console.log("Cuarto Punto: peorParidad");

function peorParidad(num) {
    switch (num) {
        case 1:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
        case 2:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 3:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 4:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 5:                 
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 6:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 7:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 8:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 9:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
            
        case 10:
                if(num % 2 == 0) { return "Par";} 
                else {return "Impar";}
        default:
            break;
    }
}
console.log(peorParidad(4));
