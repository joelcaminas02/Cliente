var resultado = 0;
var numeros = [7,8,2,9,10];
for(var i = 0; i<5 ; i++){
    if(numeros[i] > 8){
        resultado = resultado + numeros[i];
    }
}
alert('La suma es de '+ resultado);
