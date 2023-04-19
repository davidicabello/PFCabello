
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

// window.jsPDF = window.jspdf.jsPDF;

// $('#send_pdf').click(function () {
//     let doc = new jsPDF();
//     let nombre = $("#form4Example1").val();
//     let mail = $("#form4Example2").val();
//     let form = $("#form4Example3").val();
//     if (nombre === '' || mail === '' || form === '') {
//         return
//     } else {
//         doc.setFontSize(14);
//         doc.text(40, 30, nombre);
//         doc.text(40, 40, mail);
//         doc.text(40, 50, form);
//         doc.save('formulario.pdf');
//     }
// });


window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}
