const seta = document.getElementById("seta");
const destinos = document.querySelectorAll(".destino");
const mensaje = document.getElementById("mensaje");

seta.addEventListener("dragstart", () => {
    seta.classList.remove("brillo");
});

destinos.forEach(destino => {
    destino.addEventListener("dragover", e => e.preventDefault());

    destino.addEventListener("dragenter", () => {
        destino.classList.add("hover");
    });

    destino.addEventListener("dragleave", () => {
        destino.classList.remove("hover");
    });

    destino.addEventListener("drop", e => {
        e.preventDefault();
        destino.classList.remove("hover");

        const zona = destino.querySelector(".zona-seta");
        zona.innerHTML = "";
        zona.appendChild(seta);

        seta.classList.add("brillo");

        const lugar = destino.getAttribute("data-lugar");
        mensaje.textContent = `La seta se fue a ${lugar}`;
    });
});