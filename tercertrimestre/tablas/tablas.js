function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (let j = 1; j <= numero; j++) {
        const tabla = document.createElement("div");
        tabla.className = "tabla";

        for (let i = 0; i <= 10; i++) {
            tabla.innerHTML += j + " X " + i + " = " + j * i + "<br>";
        }

        resultadoDiv.appendChild(tabla);
    }
}