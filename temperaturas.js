// Función para realizar la conversión de temperatura
function convertirTemperatura() {
    // 1. Obtener la temperatura ingresada
    var campoTemperatura = document.getElementById('temperatura');
    var valorIngresado = campoTemperatura.value;

    // 4. Validaciones: Verificar que el campo no esté vacío
    if (valorIngresado.trim() === '') {
        alert('Por favor, ingresa una temperatura antes de continuar.');
        campoTemperatura.focus();
        return;
    }

    var temperatura = parseFloat(valorIngresado);

    if (isNaN(temperatura)) {
        alert('Por favor, ingresa un número válido.');
        campoTemperatura.focus();
        return;
    }

    // 2. Identificar el tipo de conversión seleccionado
    var tipoConversion = document.getElementById('tipoConversion').value;
    var resultado = 0;
    var unidadOrigen = '';
    var unidadDestino = '';
    var nombreConversion = '';

    // 3. Realizar la operación correspondiente
    if (tipoConversion === 'c-f') {
        // De Celsius a Fahrenheit: (Celsius * 9 / 5) + 32
        resultado = (temperatura * 9 / 5) + 32;
        unidadOrigen = '°C';
        unidadDestino = '°F';
        nombreConversion = 'Celsius a Fahrenheit';
    } else if (tipoConversion === 'f-c') {
        // De Fahrenheit a Celsius: (Fahrenheit - 32) * 5 / 9
        resultado = (temperatura - 32) * 5 / 9;
        unidadOrigen = '°F';
        unidadDestino = '°C';
        nombreConversion = 'Fahrenheit a Celsius';
    }

    // Formatear el resultado a máximo 2 decimales si no es entero
    var resultadoFinal = Number.isInteger(resultado) ? resultado : resultado.toFixed(2);

    // 5. Presentación del resultado
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `
        <div class="card-resultado">
            <p><strong>Temperatura ingresada:</strong> ${temperatura} ${unidadOrigen}</p>
            <p><strong>Tipo de conversión:</strong> ${nombreConversion}</p>
            <p><strong>Resultado:</strong> ${resultadoFinal} ${unidadDestino}</p>
        </div>
    `;
}

// Evento al presionar el botón Convertir
document.addEventListener('DOMContentLoaded', function() {
    var btnConvertir = document.getElementById('btnConvertir');
    if (btnConvertir) {
        btnConvertir.addEventListener('click', convertirTemperatura);
    }
});
