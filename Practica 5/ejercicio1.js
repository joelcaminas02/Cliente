document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formulario').addEventListener('submit', funcion);
});

function funcion(evento){
    evento.preventDefault();
    var clave = document.getElementById('dni').value;
    if(clave.length == 9){
        document.write('La clave es correcta');
    }else{
        document.write('Error');
    }
    this.submit();
}
