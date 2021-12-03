
const serverUrl = 'http://127.0.0.1:8000/';
const pathReservacion = 'reservaciones/';
let formulario = document.getElementById('formulario');
const modalCompra = document.querySelector('.modal-compra');

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


fetch(`${serverUrl}${pathReservacion}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        data.status = 1;
        // console.log(data);
        localStorage.setItem('reservacion', true);
        
        localStorage.setItem('idReservacion', data.id);
        localStorage.setItem('nombre', data.nombre);
        localStorage.setItem('apellido', data.apellido);
        localStorage.setItem('fecha', data.fecha_reserva);
        localStorage.setItem('telefono', data.telefono);
        localStorage.setItem('personas', data.personas);
        localStorage.setItem('comentarios', data.comentarios);
        
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
