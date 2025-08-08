let variable1;
let hola;
const variable2 = 0;


variable1 = 1;
console.log(typeof variable1);
console.log(typeof hola);

let F = "Formula";
let uno =1;

console.log(F+ uno);
console.log(uno +F);


function suma(a,b){
    return a+b;
}
console.log(suma(1,2))

const suma2 = function (a,b){
    return a +b ;
}

const suma3 = (a,b) =>{
    return a+b
}

let variablesospechosa = 19;
if ( variablesospechosa >18){
    console.log("todo bien")
}

let cedula = 114284195;
//con === se usa para valor y tipo igual
// con == aaceptas cualquier chocora
let accesoPermitido = cedula ===  114284195

if (cedula == "114284195") {
console.log("Acceso permitido.");
} else {
console.log("Acceso denegado.");
}

console.log("for");

const maxFactorial = 5;
let factorial = 1;

for (let i = 1; i <= maxFactorial; i++) {
factorial *= i;
}

console.log(factorial); // 120

