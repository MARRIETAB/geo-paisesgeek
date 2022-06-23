//------------------SIN TERMINAR!-----------------------

let form = document.querySelector('form');

form.addEventListener('submit', function (e) {

    e.preventDefault();
   
    mostrarAlerta()
    form.reset();
});


function mostrarAlerta(){

    swal({
        title: "Ups!", 
        text: "Asegúrate que todos los campos estén correctamente diligenciados!", 
        timer: 4000,
        buttons:false
    });
}
    
//Swal.fire("Tu cita ha sido agendada, prnto uno de nuestros asesores se comunicará contigo","success");

