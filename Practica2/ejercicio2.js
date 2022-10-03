var mes = prompt('Introduce un mes del año');

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'diciembre':
        alert('Estamos en invierno');
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        alert('Estamos en primavera');
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        alert('Estamos en verano');
        break;
    case 'octubre':
    case 'noviembre':
    case 'septiembre':
        alert('Estamos en otoño');
        break;

    default:
        alert('El mes introducido es incorrecto');
        break;
}