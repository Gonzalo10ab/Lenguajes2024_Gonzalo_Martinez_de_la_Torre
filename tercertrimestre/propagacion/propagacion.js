const padre = document.getElementById('padre');
const hijo1 = document.getElementById('hijo1');
const hijo2 = document.getElementById('hijo2');

padre.addEventListener('click', () => {
    alert("Clic en PADRE");
});

hijo1.addEventListener('click', (e) => {
    e.stopPropagation();
    alert("Clic en HIJO 1 (con stopPropagation)");
});

hijo2.addEventListener('click', () => {
    alert("Clic en HIJO 2 (sin stopPropagation)");
});

const enlace = document.getElementById('enlace');
const toggle = document.getElementById('toggle');
let bloqueado = true;

enlace.addEventListener('click', (e) => {
    if (bloqueado) {
        e.preventDefault();
        alert("preventDefault activado. El enlace está bloqueado.");
    }
});

toggle.addEventListener('click', () => {
    bloqueado = !bloqueado;
    alert(`El enlace ahora está ${bloqueado ? "bloqueado" : "activo"}`);
});