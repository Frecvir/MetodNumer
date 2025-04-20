function calcularTrapecio() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const n = parseInt(document.getElementById("n").value);
    const funcion = document.getElementById("funcion").value; // 👉 se obtiene la función desde el input

    if (!funcion || isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
        document.getElementById("trapecioResult").textContent = "Por favor, completa todos los campos correctamente.";
        return;
    }

    // Reemplazar el operador de potenciación '**' por 'Math.pow()'
    const funcionConPow = funcion.replace(/\*\*([0-9]+)/g, 'Math.pow($&, $1)');

    let h = (b - a) / n;
    let suma = 0;

    try {
        for (let i = 0; i <= n; i++) {
            let x = a + i * h;
            let fx = eval(funcionConPow.replace(/x/g, `(${x})`)); // Evaluar la función usando x
            if (i === 0 || i === n) {
                suma += fx;
            } else {
                suma += 2 * fx;
            }
        }

        let resultado = (h / 2) * suma;
        document.getElementById("trapecioResult").textContent = `Resultado del método del trapecio: ${resultado}`;
    } catch (error) {
        document.getElementById("trapecioResult").textContent = "⚠️ Error al evaluar la función. Revisa la sintaxis.";
        console.error(error);
    }
}


function calcularErrores() {
    const valorReal = parseFloat(document.getElementById("valorReal").value);
    const valorAprox = parseFloat(document.getElementById("valorAproximado").value);

    if (isNaN(valorReal) || isNaN(valorAprox)) {
        document.getElementById("absoluteError").textContent = "Por favor, ingresa valores numéricos válidos.";
        document.getElementById("relativeError").textContent = "";
        document.getElementById("percentageError").textContent = "";
        return;
    }

    const errorAbsoluto = Math.abs(valorReal - valorAprox);
    const errorRelativo = errorAbsoluto / Math.abs(valorReal);
    const errorPorcentual = errorRelativo * 100;

    document.getElementById("absoluteError").textContent = `Error Absoluto: ${errorAbsoluto}`;
    document.getElementById("relativeError").textContent
