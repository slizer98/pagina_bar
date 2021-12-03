
const serverUrlShow = 'http://127.0.0.1:8000/';
const pathReservacionGet = 'reservaciones/';
const id = localStorage.getItem('idReservacion');
const showReservation = document.getElementById('show-reservation');
let lista = document.getElementById("lista-reservacion");
let borrar = document.querySelector(".bborrar");
let editar = document.querySelector(".beditar");


// Agregar li al ul
let li = document.createElement("li");
fetch(`${serverUrlShow}${pathReservacionGet}?mesa_id=${id}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            let li = document.createElement("li");
            li.innerHTML = `
                <div>
                    <h4>Nombre:<h4>
                    <p>${element.nombre}</p>
                </div>
                <div>
                    <h4>Apellido:<h4>
                    <p>${element.apellido}</p>
                </div>
                <div>
                    <h4>Fecha de reservacion:<h4>
                    <p>${element.fecha_reserva}</p>
                </div>
                <div>
                    <h4>Telefono:<h4>
                    <p>${element.telefono}</p>
                </div>
                <div>
                    <h4>Personas:<h4>
                    <p>${element.personas}</p>
                </div>
                <div>
                    <h4>comentarios<h4>
                    <p>${element.comentarios}</p>
                </div>

            `;
            lista.appendChild(li);
        });
    })

borrar.addEventListener('click', () => {
    let result = confirm("Estas seguro de borrar?");
    if (result) {
        fetch(`${serverUrlShow}${pathReservacionGet}?mesa_id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                localStorage.clear();

                console.log(data);
                window.location.href = "./index.html";
            })
    }
})

// reedirigir a editar
editar.addEventListener('click', () => {
    window.location.href = "./editar.html";
})