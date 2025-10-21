function convertir() {
    const tipo = document.getElementById("conversion").value; // "cel" o "fare"

    // Todos los <p> con id="fa" (temperaturas)
    const temperaturas = document.querySelectorAll('[id="fa"]');

    temperaturas.forEach(p => {
        // Extraemos el número de la temperatura (quitamos el °)
        let tempStr = p.textContent.trim();
        let tempNum = parseInt(tempStr);

        if (tipo === "fare") {
            // Celsius a Fahrenheit
            let f = Math.round((tempNum * 9 / 5) + 32);
            p.textContent = f + "°";
        } else if (tipo === "cel") {
            // Fahrenheit a Celsius
            let c = Math.round((tempNum - 32) * 5 / 9);
            p.textContent = c + "°";
        }
    });
}

function coockie() {
    const ele = document.getElementById("grande");
    ele.remove();
}
