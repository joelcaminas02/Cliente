var contador= 0;
var resultado =0;
for (var i = 0; i<5;i++){
   var numero =  parseInt(prompt ('Introduce un numero') );
   resultado += numero;
   if(numero > 100){
       contador++;
   }
}

alert("el resultado es "+ resultado+ "\n Hay "+contador+" numeros mayor de 100");