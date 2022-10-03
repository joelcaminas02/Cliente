var precio = parseFloat(prompt('Introduce el precio del producto'));

var iva = precio*0.21;
var total = precio+iva;
alert('El iva del procucto es '+iva.toFixed(2)+" y el total serian: "+total.toFixed(2));