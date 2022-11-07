function contarEnlaces(){
    var arrayRef = document.getElementsByTagName('a')
    alert(arrayRef.length)
}

function  sacarHref(){
    var stringConst = ""
    Array.from(document.getElementsByTagName('a')).forEach(link => {
        stringConst += link.getAttribute('href')
    });
    alert(stringConst);
}

function hrefParrafo(){
    var stringConst = "";
    for (let i = 0; i < 3; i++) {
        stringConst= "";
        Array.from(document.getElementsByTagName('p')[i].getElementsByTagName('a')).forEach(link => {
            stringConst += link.getAttribute('href')});
        alert('parrafo '+(i+1)+' '+ stringConst);
        
        
    }
}