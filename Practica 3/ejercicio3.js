function sumar(){
    valor = parseInt(document.getElementById('caja').value);
    valor = valor+10;

    document.getElementById('caja').value = valor;

}

function reiniciar(){
    valor = document.getElementById('caja').value;
    valor = 0;

    document.getElementById('caja').value = valor;

}