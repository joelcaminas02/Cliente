function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}
window.addEventListener("load", function() {
    miformulario.codigo.addEventListener("keypress", function(){ 
        return soloNumeros(event);
        }, false);
    });
