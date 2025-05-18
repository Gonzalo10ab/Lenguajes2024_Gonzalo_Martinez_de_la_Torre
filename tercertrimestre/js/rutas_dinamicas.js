// Obtenemos la ruta actual del archivo HTML y la separamos por "/"
const partes = window.location.pathname.split("/");

// Buscamos la carpeta "tercertrimestre" como punto de referencia
const idx = partes.indexOf("tercertrimestre");

// Inicializamos la base para las rutas relativas
let base = "";

// Si encontramos "tercertrimestre", calculamos cuántos niveles hay que subir
if (idx !== -1) {
    const profundidad = partes.length - (idx + 1); // cuántas carpetas hay después
    base = "../".repeat(profundidad); // ejemplo: "../" o "../../"
}

// Cargamos el navbar desde la carpeta de componentes
fetch(base + "tercertrimestre/componentes/navbar.html")
    .then(res => res.text()) // Convertimos la respuesta a texto
    .then(data => {
        // Reemplazamos todos los {{BASE}} por la ruta base real
        const navbar = data.replace(/{{BASE}}/g, base);
        // Insertamos el navbar procesado en el contenedor correspondiente
        document.getElementById("navbar-container").innerHTML = navbar;
    });

// Cargamos el footer desde la carpeta de componentes
fetch(base + "tercertrimestre/componentes/footer.html")
    .then(res => res.text()) // Convertimos la respuesta a texto
    .then(data => {
        // Insertamos directamente el footer en su contenedor
        document.getElementById("footer-container").innerHTML = data;
    });