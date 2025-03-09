// Agrega un evento al formulario cuando se envíe
document.getElementById('interpolationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se recargue al enviarlo

    // Obtiene los valores ingresados por el usuario y los convierte a números decimales (float), necesitamos los valores en float para evitar errores
    const x = parseFloat(document.getElementById('x').value); 
    const X0 = parseFloat(document.getElementById('X0').value);
    const fX0 = parseFloat(document.getElementById('fX0').value);
    const X1 = parseFloat(document.getElementById('X1').value);
    const fX1 = parseFloat(document.getElementById('fX1').value);

    // Esta es la formula de interpolación lineal para aplicarlo a las variables ya guardadas
    // f(x) = f(X0) + (f(X1) - f(X0)) * ((x - X0) / (X1 - X0))
    const fX = fX0 + (fX1 - fX0) * ((x - X0) / (X1 - X0));

    // Calcula el error absoluto como la diferencia entre f(X1) y f(X0) este código es para hacer que no tenga numeros negativos
    const absoluteError = Math.abs(fX1 - fX0);
    
    // Calcula el error relativo dividiendo el error absoluto entre el valor absoluto de f(x)
    // Si f(x) es 0, no se relaiza la división para evitar rebundancia
    const relativeError = absoluteError / Math.abs(fX) || 0;

    // Convierte el error relativo a porcentaje multiplicandolo por 100
    const percentageError = relativeError * 100;

    // Muestra los resultados en la página
    document.getElementById('fX').innerText = `f(${x}) estimado: ${fX.toFixed(5)}`; // se modifica el 2 a 5 para obtener mas decimales de .toFixed(5)
    document.getElementById('absoluteError').innerText = `Error absoluto: ${absoluteError.toFixed(2)}`;
    document.getElementById('relativeError').innerText = `Error relativo: ${relativeError.toFixed(4)}`;
    document.getElementById('percentageError').innerText = `Error porcentual: ${percentageError.toFixed(2)}%`;
});