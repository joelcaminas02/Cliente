function mayor(){
    this.style.fontSize="16pt";
}

function menor(){
    this.style.fontSize="12pt";
}
//de forma semantica
window.onload = function(){
    document.getElementById('texto').onmouseout= menor;
    document.getElementById('texto').onmouseover= mayor;
}