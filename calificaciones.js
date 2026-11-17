// Función para calcular el promedio y evaluar al estudiante
function calcularPromedio() {
    // Obtener referencias a los campos del formulario
    var campoNombre = document.getElementById('nombre');
    var campoCal1 = document.getElementById('calificacion1');
    var campoCal2 = document.getElementById('calificacion2');
    var campoCal3 = document.getElementById('calificacion3');

    var nombre = campoNombre.value.trim();
    var val1 = campoCal1.value.trim();
    var val2 = campoCal2.value.trim();
    var val3 = campoCal3.value.trim();

    // A. Validación de información
    if (nombre === '') {
        alert('Por favor, ingresa el nombre del estudiante.');
        campoNombre.focus();
        return;
    }

    if ((campoCal1.validity && campoCal1.validity.badInput) ||
        (campoCal2.validity && campoCal2.validity.badInput) ||
        (campoCal3.validity && campoCal3.validity.badInput)) {
        alert('Por favor, ingresa únicamente números válidos en las calificaciones.');
        return;
    }

    if (val1 === '' || val2 === '' || val3 === '') {
        alert('Por favor, ingresa las tres calificaciones antes de continuar.');
        if (val1 === '') {
            campoCal1.focus();
        } else if (val2 === '') {
            campoCal2.focus();
        } else {
            campoCal3.focus();
        }
        return;
    }

    var cal1 = Number(val1);
    var cal2 = Number(val2);
    var cal3 = Number(val3);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert('Por favor, ingresa únicamente números válidos en las calificaciones.');
        return;
    }

    if (cal1 < 0 || cal1 > 10) {
        alert('La primera calificación debe estar entre 0 y 10.');
        campoCal1.focus();
        return;
    }

    if (cal2 < 0 || cal2 > 10) {
        alert('La segunda calificación debe estar entre 0 y 10.');
        campoCal2.focus();
        return;
    }

    if (cal3 < 0 || cal3 > 10) {
        alert('La tercera calificación debe estar entre 0 y 10.');
        campoCal3.focus();
        return;
    }

    // B. Calcular el promedio
    var promedio = (cal1 + cal2 + cal3) / 3;
    var promedioFormateado = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);

    // C. Determinar el resultado (APROBADO / REPROBADO) usando if, else if y else
    var estado = '';
    var claseEstado = '';

    if (promedio >= 6 && promedio <= 10) {
        estado = 'APROBADO';
        claseEstado = 'estado-aprobado';
    } else if (promedio < 6) {
        estado = 'REPROBADO';
        claseEstado = 'estado-reprobado';
    } else {
        estado = 'REPROBADO';
        claseEstado = 'estado-reprobado';
    }

    // D. Mostrar una observación de acuerdo con el promedio
    var observacion = '';

    if (promedio >= 9 && promedio <= 10) {
        observacion = 'Excelente desempeño';
    } else if (promedio >= 8) {
        observacion = 'Muy buen desempeño';
    } else if (promedio >= 7) {
        observacion = 'Buen desempeño';
    } else if (promedio >= 6) {
        observacion = 'Desempeño suficiente';
    } else {
        observacion = 'Necesita mejorar';
    }

    // 4. Presentar los resultados dentro de la página web
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `
        <div class="card-resultado">
            <p><strong>Estudiante:</strong> ${nombre}</p>
            <p><strong>Calificación 1:</strong> ${cal1}</p>
            <p><strong>Calificación 2:</strong> ${cal2}</p>
            <p><strong>Calificación 3:</strong> ${cal3}</p>
            <p><strong>Promedio obtenido:</strong> ${promedioFormateado}</p>
            <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
            <p><strong>Observación:</strong> ${observacion}</p>
        </div>
    `;
}

// Asignar evento al botón Calcular promedio
document.addEventListener('DOMContentLoaded', function() {
    var btnCalcular = document.getElementById('btnCalcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularPromedio);
    }
});
