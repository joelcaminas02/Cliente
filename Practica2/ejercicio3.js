document.write('<h1>Bienvenidos a mi pagina</h1>');
var num = 0;
//appCodeName dvuelve mozilla para todo
if (navigator.userAgent.toLowerCase().indexOf('mozilla') > -1 == true){
    num = 1;
}else if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 == true){
    num = 2;
}else if(navigator.userAgent.toLowerCase().indexOf('opera') > -1 == true){
    num  = 3;
}else if(navigator.userAgent.toLowerCase().indexOf('msie') > -1 == true){
    num = 4;
}else{
    echo('error');
}
var navegador = '';
switch (num){
    case 1:
        navegador = 'mozilla';
        break;
    case 2:
        navegador = 'chrome';
        break;
    case 3:
        navegador = 'opera';
        break;
    case 4:
        navegador = 'Internet explorer';
        break;
    default:
        echo ('error');
}

document.write('tu navegador es: '+navegador);

if (window.confirm('Quires continuar?')==true){
    document.write('<br> continuamos...');
}else{
    document.write('<br> bye');
}
