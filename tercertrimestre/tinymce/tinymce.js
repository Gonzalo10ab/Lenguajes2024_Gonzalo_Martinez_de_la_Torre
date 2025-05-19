tinymce.init({
    selector: '#editor',
    height: 300,
    menubar: false,
    plugins: 'lists link',
    toolbar: 'undo redo | bold italic | bullist numlist | link'
});

function pasarADiv() {
    const contenido = tinymce.get("editor").getContent();
    document.getElementById("resultado").innerHTML = contenido;
}

function generarPDF() {
    const contenido = document.getElementById("resultado");
    html2pdf().set({
        margin: 10,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(contenido).save();
}