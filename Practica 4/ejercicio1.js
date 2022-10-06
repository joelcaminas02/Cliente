function añadir(){
console.log("terst");
    par=document.createElement("p");
    cont=document.createTextNode("Parrafo añadido");
    par.appendChild(cont);
    document.getElementById("padre").appendChild(par);
    console.log(cont);
    
}
function insertar(){
    
    // ASI NO FUNCIONA --->
    //nuevo_parrafo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo.'));
    par=document.createElement("p");
    cont=document.createTextNode("Parrafo insertado");
    par.appendChild(cont);
    segundo_p = document.getElementById('padre').getElementsByTagName('p')[1];
   
    document.getElementById('padre').insertBefore(par,segundo_p);
  
    }
function reemplazar(){
    
    par=document.createElement("p");
    textnode = document.createTextNode("Parrafo reemplazado");
    par.appendChild(textnode);
    //item=document.getElementById("padre").childNodes[0];
    //item.replaceChild(textnode,item.childNodes[0]);
    segundo_p = document.getElementById('padre').getElementsByTagName('p')[1];
    
    document.getElementById('padre').replaceChild(par,segundo_p);
    }
function borrar(){
    
    segundo_p = document.getElementById('padre').getElementsByTagName('p')[1];
    document.getElementById('padre').removeChild(segundo_p)
    
}
function clonar(){
    
    clon =  document.getElementById('padre').cloneNode(true);
    document.body.appendChild(clon);
}