function procesarTexto() {
    const texto = document.getElementById("texto").value;
    const salida = document.getElementById("resultado");
    const palabras = texto.trim().split(/\s+/);

    const resultado = `Texto original: ${texto}
Longitud: ${texto.length}
Número de palabras: ${palabras.length}

Mayúsculas: ${texto.toUpperCase()}
Minúsculas: ${texto.toLowerCase()}
Capitalizado: ${texto.split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ")}

Primer carácter: ${texto.charAt(0)}
Último carácter: ${texto.charAt(texto.length - 1)}

Concatenando con " JS": ${texto.concat(" JS")}
Contiene "a": ${texto.includes("a") ? "Sí" : "No"}
Reemplazar "a" por "@": ${texto.replaceAll("a", "@")}
Subcadena (0-6): ${texto.substring(0, 6)}
`;
    salida.textContent = resultado;
}