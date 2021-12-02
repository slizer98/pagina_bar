const serverUrlEdit = 'http://127.0.0.1:8000/';
const pathReservacionEdit = 'reservaciones/';
const id = localStorage.getItem('idReservacion');
let formulario = document.getElementById('formulario');
const modalCompra = document.querySelector('.modal-compra');
const removeReservation = document.querySelector('.btn');


document.getElementById('nombre').value = localStorage.getItem('nombre');
document.getElementById('apellido').value = localStorage.getItem('apellido');
document.getElementById('telefono').value = localStorage.getItem('telefono');
document.getElementById('personas').value = localStorage.getItem('personas');
document.getElementById('fecha').value = localStorage.getItem('fehca');
document.getElementById('comentarios').value = localStorage.getItem('comentarios');



formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Formulario enviado');

    let datos = new FormData(formulario);
    let data = {
        nombre: datos.get('nombre'),
        apellido: datos.get('apellido'),
        fecha_reserva: datos.get('fecha').toString(),
        telefono: datos.get('telefono'),
        personas: datos.get('personas'),
        comentarios: datos.get('comentario'),
        
    }
    console.log(data);
    // Acualizar reservacion
    fetch(`${serverUrlEdit}${pathReservacionEdit}?mesa_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        data.status = 1
        if(data.status == 1){
            modalCompra.style.display = 'block';
            setTimeout(function(){
                modalCompra.style.display = 'none';
            }, 2000);
            formulario.reset();
            setTimeout(function(){
                window.location.href = 'index.html';
            }, 1500);
        }
    })
});


