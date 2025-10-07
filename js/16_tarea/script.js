function registro() { 
    let participantes = [];
    let nombre = prompt("Ingresa el nombre del participante (o 'salir' para terminar):");
    let cantidad = 0;
    while (nombre !== 'salir') {
        participantes.push(nombre);
        cantidad++;
        nombre = prompt("Ingresa el nombre del participante (o 'salir' para terminar):");
    }
    if (cantidad <= 5) {
        alert(`Resultado se muestra en la consola`);
        console.log("Total de participantes:", participantes.length);
        console.log("Lista de participantes:", participantes.join(", "));
    }
}

function caja() {
    let productos = ["frutilla", "carne", "leche", "pan"];
    for (let i = 0; i < 5; i++)
        if (productos.length > 0) {
    let vendido = productos.pop();
    console.log("Producto vendido:", vendido);
    } else {
        console.log("Sin stock");
    }
}
