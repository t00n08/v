function numerosNaturales() {
    let n = parseInt(prompt("Ingresa un número: "));
    let suma = 0;
    let array = [];
    for(let i = 1; i <= n; i++){
        suma += i; 
        array.push(i);
    }
    alert(`La suma de los primeros ${n} números es: ${suma}`);
}

function generarPares() {
    let array = []; 
    for (let i = 1; i <= 200; i++) { 
        if (i % 2 === 0) { 
            array.push(i); 
        }
    }
    alert("Los 100 primeros números pares son:" + " " + array.join(" - "));
}

function generarinPares() {
    let array = []; 
    for (let i = 1; i <= 200; i++) { 
        if (i % 2 === 1) { 
            array.push(i); 
        }
    }
    alert("Los 100 primeros números inpares son:" + " " + array.join(" - "));
}

function pom() {
    let nota1 = prompt("ingrese tu nota:");
    let nota2 = prompt("ingrese tu peso:");
    let nota3 = prompt("ingrese tu peso:");
    let nota4 = prompt("ingrese tu peso:");
    let nota5 = prompt("ingrese tu peso:");
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) ;
    for(let i = 1; i <= n; i++){
        suma += i; 
        array.push(i);
    }
    
}

function pome() {
    let nota1 = parseFloat(prompt("Ingrese tu nota 1:"));
    let nota2 = parseFloat(prompt("Ingrese tu nota 2:"));
    let nota3 = parseFloat(prompt("Ingrese tu nota 3:"));
    let nota4 = parseFloat(prompt("Ingrese tu nota 4:"));
    let nota5 = parseFloat(prompt("Ingrese tu nota 5:"));
    
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) + 0; 
    
    alert( promedio);
}    