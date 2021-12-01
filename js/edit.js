const serverUrlEdit = 'http://127.0.0.1:8000/';
const pathReservacionEdit = 'reservaciones/';
let formulario = document.getElementById('formulario');
const modalCompra = document.querySelector('.modal-compra');
const removeReservation = document.querySelector('.btn');


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
        localStorage.setItem('idReservacion', data.id);
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
