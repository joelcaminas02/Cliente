document.write('<h1>Bienvenidos a mi pagina</h1>');
//appCodeName dvuelve mozilla para todo
document.write('tu navegador es: '+navigator.userAgent);
if (window.confirm('Quires continuar?')==true){
    document.write('<br> continuamos...');
}else{
    document.write('<br> bye');
}