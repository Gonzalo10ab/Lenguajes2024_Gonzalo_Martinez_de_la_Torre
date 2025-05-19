document.addEventListener("DOMContentLoaded", () => {
    const producto = document.getElementById("producto");
    const precio = document.getElementById("precio");
    const cantidad = document.getElementById("cantidad");
    const botonAdd = document.getElementById("botonAdd");
    const lista = document.getElementById("lista");
    const sumaTotal = document.getElementById("sumaTotal");
    const reiniciar = document.getElementById("reiniciar");

    let total = 0;

    botonAdd.addEventListener("click", () => {
        const nombre = producto.value.trim();
        const precioVal = parseFloat(precio.value);
        const cantidadVal = parseInt(cantidad.value);

        if (!nombre || isNaN(precioVal) || isNaN(cantidadVal)) return;

        const subtotal = precioVal * cantidadVal;
        total += subtotal;
        sumaTotal.textContent = total;

        const item = document.createElement("div");
        item.classList.add("lista-item");
        item.innerHTML = `<span>${nombre}: Cantidad ${cantidadVal} Subtotal: ${subtotal}€</span> <button class="borrar">❌</button>`;

        item.querySelector(".borrar").addEventListener("click", () => {
            total -= subtotal;
            sumaTotal.textContent = total;
            item.remove();
        });

        lista.appendChild(item);
    });

    reiniciar.addEventListener("click", () => {
        lista.innerHTML = "<h2>Lista</h2>";
        total = 0;
        sumaTotal.textContent = total;
    });
});