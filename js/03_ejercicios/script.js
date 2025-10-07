console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararvariables() {
    let ahora = parseInt(prompt("Ingrese Año Actual: ")); //prompt solicita que el usuario ingrese datos, parseInt convierte string a numero
    let fecha_nac = parseInt(prompt("Ingresar Año Nacimiento: "));
    let edad = ahora - fecha_nac;
    alert("Edad es: " + edad + ".");
}

    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarvalores() {
        let var1 = prompt("Ingresa un valor: ");
        let var2 = var1;
        alert ("El valor de var2 es: " + var2 + ".");
    };
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizaroperaciones() {
        let num1 = parseInt(prompt("Ingresa un valor: "));
        let num2 = parseInt(prompt("Ingresa un valor: "));
        let num3 = parseInt(prompt("Ingresa un valor: "));
        let suma = num1 + num2 + num3;
        let resta = num1 - num3;
        let multiplicacion = num2 * num3;
        let division = num1 / 120;
        alert ("Resultados: \n suma:" + suma + "\n resta:" + resta + "\n multiplicacion:" + multiplicacion + "\n division:" + division);
    } 

// Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularcadenas() {
        let calle = prompt("Ingresa la dirección: ");
        let n_casa = parseInt(prompt("Imgresa el número de casa: "));
        let cadena = calle + n_casa;
        alert("La dirección es: "+calle+""+n_casa+"\n"+calle.length)
        alert(cadena.length);
        alert(cadena.length-3);
        }