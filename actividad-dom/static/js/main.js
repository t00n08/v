const estudiantes = [];

function capitalizarNombre(nombre) {
    return nombre
        .trim()
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}


function mostrarResumenJornadas() {
    const contadorJornadas = { Mañana: 0, Tarde: 0 };

    for (const estudiante of estudiantes) {
        contadorJornadas[estudiante.jornada]++;
    }

    const resumenElement = document.getElementById('resumenJornadas');
    resumenElement.textContent = `Registrados: ${contadorJornadas.Mañana} en Mañana, ${contadorJornadas.Tarde} en Tarde`;
}

function procesarFormularioEstudiante(event) {
    event.preventDefault();

    const resultadoElement = document.querySelector('#formEstudiante + .resultados .resultado');
    const errorElement = document.querySelector('#formEstudiante + .resultados .error');

    resultadoElement.textContent = '';
    errorElement.textContent = '';

    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const cursoSelect = document.getElementById('curso');
    const jornadaRadios = document.getElementsByName('jornada');
    const reglamentoCheckbox = document.getElementById('aceptaReglamento');
    
    const nombre = capitalizarNombre(nombreInput.value);
    const edad = parseInt(edadInput.value);
    const curso = cursoSelect.value;
    
    let jornada = '';
    for (const radio of jornadaRadios) {
        if (radio.checked) {
            jornada = radio.value;
            break;
        }
    }
    
    const aceptaReglamento = reglamentoCheckbox.checked;
    
    const errores = [];
    
    if (nombre.length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres.');
    }
    
    if (isNaN(edad) || edad < 14 || edad > 100) {
        errores.push('La edad debe estar entre 14 y 100 años.');
    }
    
    if (!curso) {
        errores.push('Debe seleccionar un curso.');
    }
    
    if (!jornada) {
        errores.push('Debe seleccionar una jornada.');
    }
    
    if (!aceptaReglamento) {
        errores.push('Debe aceptar el reglamento estudiantil.');
    }
    
    if (errores.length > 0) {
        errorElement.textContent = errores.join(' ');
    } else {
        const estudiante = { nombre, edad, curso, jornada };
        estudiantes.push(estudiante);

        resultadoElement.textContent = `¡Bienvenido/a ${nombre}! Has sido registrado/a en ${curso} (${jornada}) a los ${edad} años.`;

        mostrarResumenJornadas();

        document.getElementById('formEstudiante').reset();
    }
}

function limpiarFormularioEstudiante() {
    document.getElementById('formEstudiante').reset();
    
    // Limpiar mensajes
    document.querySelector('#formEstudiante + .resultados .resultado').textContent = '';
    document.querySelector('#formEstudiante + .resultados .error').textContent = '';
}

document.getElementById('formEstudiante').addEventListener('submit', procesarFormularioEstudiante);
document.getElementById('limpiarEstudiante').addEventListener('click', limpiarFormularioEstudiante);

const notas = [];

function agregarNota() {
    const notaInput = document.getElementById('nota');
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    const listaNotas = document.getElementById('listaNotas');
    
    errorElement.textContent = '';

    const nota = parseFloat(notaInput.value);
    
    if (isNaN(nota) || nota < 1.0 || nota > 7.0) {
        errorElement.textContent = 'La nota debe ser un número entre 1.0 y 7.0';
        return;
    }
    
    notas.push(nota);
    
    const li = document.createElement('li');
    li.textContent = `Nota: ${nota.toFixed(1)}`;
    listaNotas.appendChild(li);
    notaInput.value = '';
    notaInput.focus();
}

function eliminarUltimaNota() {
    if (notas.length > 0) {
        notas.pop();
        const listaNotas = document.getElementById('listaNotas');
        listaNotas.removeChild(listaNotas.lastChild);
    }
}

function limpiarTodasLasNotas() {
    notas.length = 0;
    
    const listaNotas = document.getElementById('listaNotas');
    listaNotas.innerHTML = '';
    
    document.getElementById('nota').value = '';
    
    const resultadoElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .resultado');
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    resultadoElement.textContent = '';
    errorElement.textContent = '';
}

function calcularPromedio() {
    const resultadoElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .resultado');
    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    
    resultadoElement.textContent = '';
    errorElement.textContent = '';
    
    if (notas.length === 0) {
        errorElement.textContent = 'Debe agregar al menos una nota para calcular el promedio.';
        return;
    }
    
    let suma = 0;
    for (const nota of notas) {
        suma += nota;
    }
    
    const promedio = suma / notas.length;
    
    const estado = promedio >= 4.0 ? 'Aprobado' : 'Reprobado';
    const claseEstado = promedio >= 4.0 ? 'aprobado' : 'reprobado';
    
    
    resultadoElement.innerHTML = `
        <strong>Total de notas:</strong> ${notas.length}<br>
        <strong>Promedio:</strong> ${promedio.toFixed(2)}<br>
        <strong class="${claseEstado}">Estado: ${estado}</strong>
    `;
}


function borrarPromedio() {
    const resultadoElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .resultado');
    resultadoElement.textContent = '';
    

    const errorElement = document.querySelector('#formNotas + .notas-agregadas + .resultados .error');
    errorElement.textContent = '';
}

document.getElementById('agregarNota').addEventListener('click', agregarNota);
document.getElementById('calcularPromedio').addEventListener('click', calcularPromedio);
document.getElementById('eliminarUltima').addEventListener('click', eliminarUltimaNota);
document.getElementById('borrarPromedio').addEventListener('click', borrarPromedio);
document.getElementById('limpiarTodo').addEventListener('click', limpiarTodasLasNotas);

document.getElementById('nota').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        agregarNota();
    }
});