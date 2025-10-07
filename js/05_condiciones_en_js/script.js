function temperatura() {
    let clima = parseInt(prompt("Ingresa la temperatura: "));
    if (clima <= 0) {
        alert("Hace frío");
    } else if (clima <= 25) {
        alert("La temperatura es agradable")
    } else if (clima >= 25) {
        alert("hace calor");
    }
}

function usuarioe() {
    let usuario = prompt("Ingresa el usuario ")
    let contraseña = prompt("Ingresa tu contraseña ")
    if (usuario === "usuario123"&& contraseña === "secreto") {
        alert("usuario correcto")
    } else {
    alert("usuario incorrecto")
    }

}