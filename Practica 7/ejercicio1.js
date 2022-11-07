window.onload = function(){
    document.getElementById('formulario').onsubmit = validar
}

function validar(e){
    if(this.nombre.value == '' || this.apellidos.value == '' || this.email.value == '') {
        e.preventDefault()
        alert('campos vacios')
    }else{
        alert('enviado')
    }
}