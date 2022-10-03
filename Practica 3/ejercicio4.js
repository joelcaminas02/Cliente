numero = prompt('Introduce un numero');
max = 10;
min = 1;
numeroAleatorio = Math.floor(Math.random()*(max-min+1)+min);
if (numero == numeroAleatorio){
    alert('El numero aleatorio es igual al introducido')
}else {
    alert('El numero aleatorio era' + numeroAleatorio)
}