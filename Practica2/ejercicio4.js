myExternalWindow = window.open("ejercicio4.html", "myWindowName", "resizable");
var es_explorer = navigator.userAgent.toLowerCase().indexOf('mozilla') > -1;
    if(es_explorer){
        myExternalWindow.resizeTo(500, 500);
    }else{
        alert('Operacion no permitida');
    }
// Create resizable window
//myExternalWindow = window.open("file:///home/INFORMATICA/alu10471923/Escriptori/Cliente/Practica2/ejercicio4.html", "myWindowName", "resizable");
// Resize window to 500x500
//myExternalWindow.resizeTo(500, 500);
// Make window relatively smaller to 400x400
//myExternalWindow.resizeBy(-100, -100);
