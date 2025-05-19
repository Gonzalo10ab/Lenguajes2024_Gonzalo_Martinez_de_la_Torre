const zona = document.getElementById("zona");
const registro = document.getElementById("registro");
const circulo = document.getElementById("circulo");

function logEvento(texto, clase = "info") {
    const hora = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.textContent = `[${hora}] ${texto}`;
    p.classList.add(clase);
    registro.appendChild(p);
    registro.scrollTop = registro.scrollHeight;
}

function limpiarRegistro() {
    registro.innerHTML = "";
    logEvento("Historial limpiado", "highlight");
}

zona.addEventListener("mouseenter", () => logEvento("El cursor entró en el div", "success"));
zona.addEventListener("mouseleave", () => logEvento("El cursor salió del div", "warn"));
zona.addEventListener("click", () => logEvento("Click dentro del div", "click"));
zona.addEventListener("dblclick", () => logEvento("Doble click en el div", "click"));
zona.addEventListener("mousedown", () => logEvento("Botón presionado dentro del div", "click"));
zona.addEventListener("mouseup", () => logEvento("Botón soltado dentro del div", "click"));
zona.addEventListener("mousemove", () => logEvento("Movimiento dentro del div", "info"));

window.addEventListener("resize", () => logEvento("La ventana ha cambiado de tamaño", "highlight"));
window.addEventListener("scroll", () => logEvento("Scroll detectado", "highlight"));
window.addEventListener("blur", () => logEvento("La ventana ha perdido el foco", "warn"));
window.addEventListener("focus", () => logEvento("La ventana ha recuperado el foco", "success"));

logEvento("La página se ha recargado", "info");

circulo.addEventListener("dragstart", () => logEvento("Se ha comenzado a arrastrar el círculo", "click"));
circulo.addEventListener("dragend", (e) => {
    const zonaRect = zona.getBoundingClientRect();
    const dentro = e.clientX >= zonaRect.left && e.clientX <= zonaRect.right && e.clientY >= zonaRect.top && e.clientY <= zonaRect.bottom;
    if (dentro) {
        logEvento("El círculo fue soltado dentro del div", "success");
    } else {
        logEvento("El círculo fue soltado fuera del div", "warn");
    }
});