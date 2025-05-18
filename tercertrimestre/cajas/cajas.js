function calcular() {
    const ancho = +document.getElementById("ancho").value;
    const alto = +document.getElementById("alto").value;
    const largo = +document.getElementById("largo").value;
    const material = document.getElementById("material").value;

    const precioBase = +document.getElementById("precioBase").value;
    const incPlastico = +document.getElementById("incPlastico").value;
    const incCarton = +document.getElementById("incCarton").value;
    const incMadera = +document.getElementById("incMadera").value;
    const iva = +document.getElementById("iva").value;

    const resultado = document.getElementById("resultado");

    if (ancho < 5 || alto < 5 || largo < 5 || ancho > 100 || alto > 100 || largo > 100) {
        resultado.innerHTML = "<span style='color:red;'>Dimensiones fuera de rango (5-100 cm)</span>";
        return;
    }

    const dimensiones = [ancho, alto, largo].sort((a, b) => a - b);
    if (dimensiones[2] / dimensiones[0] > 5) {
        resultado.innerHTML = "<span style='color:red;'>Las dimensiones son desproporcionadas (factor > 5)</span>";
        return;
    }

    const volumen = ancho * alto * largo;
    const superficie = 2 * (ancho * alto + ancho * largo + alto * largo);

    let incremento = 0;
    if (material === "Plástico") incremento = incPlastico;
    if (material === "Cartón") incremento = incCarton;
    if (material === "Madera") incremento = incMadera;

    const precioSinIVA = (superficie / 10000) * precioBase * (1 + incremento / 100);
    const precioConIVA = precioSinIVA * (1 + iva / 100);

    resultado.innerHTML = `
        <strong>Dimensiones:</strong> ${ancho} x ${alto} x ${largo} cm<br>
        <strong>Volumen:</strong> ${volumen.toFixed(2)} cm³<br>
        <strong>Superficie:</strong> ${superficie.toFixed(2)} cm²<br>
        <strong>Material:</strong> ${material}<br>
        <strong>Precio sin IVA:</strong> ${precioSinIVA.toFixed(2)} €<br>
        <strong>Precio con IVA:</strong> ${precioConIVA.toFixed(2)} €
      `;
}