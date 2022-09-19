var mes = prompt('Introduce un mes del año').toLowerCase;

    if(mes == 'enero' || mes == 'diciembre' || mes == 'febrero'){
        alert('Estamos en invierno');
    }else if (mes == 'marzo' || mes == 'abril' || mes == 'mayo'){
        alert('Estamos en primavera')
    }else if (mes == 'septiembre' || mes == 'octubre' || mes == 'noviembre'){
        alert('Estamos en otoño');
    }else if ( mes == 'junio' || mes == 'julio' || mes == 'agosto'){
        alert('Estamos en verano');
    }else{
        alert('Has puesto un mes erroneo');  
    }
