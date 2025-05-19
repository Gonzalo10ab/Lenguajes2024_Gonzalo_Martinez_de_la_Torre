
const resultado = document.getElementById("resultado");
const cajas = document.querySelectorAll(".caja");

let total = cajas.length;
let vacios = 0;
let conContenido = 0;

cajas.forEach(div => {
    if (div.innerText.trim() === "") vacios++;
    else conContenido++;
});

resultado.innerHTML = `
      <p>Total de &lt;div&gt;: ${total}</p>
      <p>Con contenido: ${conContenido}</p>
      <p>Vacíos: ${vacios}</p>
    `;

const tarjeta = document.getElementById("tarjeta");

function modificar(clase) {
    tarjeta.classList.toggle(clase);
}

function quitar(clase) {
    tarjeta.classList.remove(clase);
}

function agregar(clase) {
    tarjeta.classList.add(clase);
}