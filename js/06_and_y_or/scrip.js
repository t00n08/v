function acceso(){  
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let aceptaTerminos = true; 
    if (edad >= 18 && aceptaTerminos) {
        alert("acceso permitido");
    } else {
        alert("acceso denegado");
    }
}

function descuento() { 
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let esEstudiante = false;
    if (edad >= 60 || esEstudiante) {
        alert("Descuento aplicado");
    } else {
        alert("No tienes descuento")
    }
}

function user() { 
    let usuario = prompt("Ingresa tu usuario:");
    let contraseña = prompt("Ingresa tu contraseña:");
    if (!usuario || !contraseña) {
        alert("Error: Debes ingresar usuario y contraseña");
    } else {
        alert("Inicio de sesión exitoso")
    }
}

function encender() { 
    let energiaSuficiente = true;
    let interruptorEncendido = true;
    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
    }
}

function accesoa() {
    let bloqueado = false;
    let tieneCredenciales = true;
    if (!bloqueado || !tieneCredenciales) {
        alert("Acceso denegado");
    } else {
        alert("Acceso permitido");
    }
}