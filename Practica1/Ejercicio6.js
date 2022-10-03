var cadena = prompt('Introduce una cadena');

var longitud = cadena.length;
var cadenaarray = cadena.split(" ");


document.write('La cadena mide: '+ longitud);
document.write('<br>'+cadena.toUpperCase());
document.write('<br>'+cadena.toLowerCase());
document.write('<br>'+cadena);

for (var i = 0; i<cadenaarray.length;i++){
    document.write('<br>'+cadenaarray[i]);
}
var cadenareverse = cadenaarray.reverse();
for(var i= 0;i<cadenareverse.length;i++){
    document.write('<br>'+cadenareverse[i]);
}