window.onload = function (){
    document.getElementById('nombre').focus();
    document.getElementById('aficion').onchange = aficiones
    document.getElementById('obs').onkeypress = validar
    document.getElementById('formulario').onsubmit = validarForm
}

function aficiones(){
    var lista = document.getElementById('aficion')
    var indice = lista.selectedIndex;
    var opcion = lista.options[indice];

    alert ('La longitud de la lista es '+ document.getElementById('aficion').length+'\n El indice seleccionado es el '+(indice+1)+ '\n El valor del indice seleccionado es '+ opcion)
}

function validar(e){
    if(document.getElementById('obs').length >= 150){
        alert('no puedes añadir mas caracteres')
        e.preventDefault()
    }
}
function validarForm(){
    if(/^\d{9}$/.test(document.getElementById('telefono').value) == false){
        alert('no has puesto 9 digitos')
    }else if(/^\d{9}$/.test(document.getElementById('dni').value)){
        alert('no has puesto nada ')
    }
}