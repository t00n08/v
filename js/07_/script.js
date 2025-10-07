function numeros() {
    let num = prompt("ingrese valor");
    if(num %2 ==0){
        alert("numero par")
    }else{
        alert("numero no par")
    }
}

function imc() {
    let peso = prompt("ingrese tu peso:");
    let altura = prompt("ingrese tu altuira:");
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc < 25) {
        alert("Peso normal");
    } else {
        alert("Sobrepeso");
    }
}

function pome() {
    let nota1 = prompt("ingrese tu nota:");
    let nota2 = prompt("ingrese tu peso:");
    let nota3 = prompt("ingrese tu peso:");
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 4.0) {
        alert("Reprobado");
      } else {
        alert("Aprobado");
      }
}



