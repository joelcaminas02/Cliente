function mayor(evento){
    
    //evento.type nos sirve para saber el tipo de evento que pasa al llamar a la funcion
    switch (evento.type) {
        case 'mouseout':
            this.style.fontSize="12pt";
            break;
        case 'mouseover':
            this.style.fontSize="16pt";
            break;
    }
}


window.onload = function(){
    document.getElementById('texto').onmouseout= mayor;
    document.getElementById('texto').onmouseover= mayor;
}