function mayor(){
    this.style.fontSize="16pt";
}

function menor(){
    this.style.fontSize="12pt";
}


window.onload = function(){
        document.getElementById('texto').addEventListener('mouseover', mayor);
        document.getElementById('texto').addEventListener('mouseout', menor);
}