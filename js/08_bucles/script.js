function numeros() {
    let i = 1
    let n = prompt("ingre");
    let array = []
while (i <=n) {
    array.push(i);
  i++;
}
alert(`contando:${array.join("-")}`)
}

function imc() {
    let i = 1
    let n = parseInt(prompt("ingresa"));
    let array = []
while (i <=n) {
    array.push(n);
  n--;
}
alert(`contando:${array.join("-")}`)
}


function im() {
    
    let array = [];
    for (let count = 10; count >= 1; count-- ){
        array.push(count);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function cien() {
    let array = [];
    for (let m = 100; m >= 1; m-- ){
        array.push(m);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function suma() {
  let sumas = 0;
  let array = [];
  for (let i = 1; i <= 5; i++ ){
      suma += i;
      array.push(i);
  }
  alert(sumas);
}


