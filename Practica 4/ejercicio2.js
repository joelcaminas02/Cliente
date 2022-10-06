function añadir(){
    console.log("terst");
        par=document.createElement("li");
        cont=document.createTextNode("tiburon");
        par.appendChild(cont);
        document.getElementById("lista").appendChild(par);
        console.log(cont);
        
    }
    function insertar(){
        
        // ASI NO FUNCIONA --->
        //nuevo_parrafo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo.'));
        par=document.createElement("li");
        cont=document.createTextNode("capibara");
        par.appendChild(cont);
        segundo_p = document.getElementById('lista').getElementsByTagName('li')[1];
       
        document.getElementById('lista').insertBefore(par,segundo_p);
      
        }
    function reemplazar(){
        
        par=document.createElement("li");
        textnode = document.createTextNode("Gato");
        par.appendChild(textnode);
        //item=document.getElementById("padre").childNodes[0];
        //item.replaceChild(textnode,item.childNodes[0]);
        segundo_p = document.getElementById('lista').getElementsByTagName('li')[0];
        
        document.getElementById('lista').replaceChild(par,segundo_p);
        }
    function borrar(){
        
        segundo_p = document.getElementById('lista').getElementsByTagName('li')[0];
        document.getElementById('lista').removeChild(segundo_p)
        
    }
    function clonar(){
        
        clon =  document.getElementById('padre').cloneNode(true);
        document.body.appendChild(clon);
    }
    function sublistaLeon(){
        par = document.createElement("ul");
        par2 = document.createElement("li");
        cont=document.createTextNode("capibara");
        par.appendChild(par2).appendChild(cont);
        document.getElementById('leon').appendChild(par);

    }
    function sublistaPantera(){
            parrafo = document.createElement('ul');
            parrafo.innerHTML = '<li>gato</li>'
            document.getElementById('pantera').appendChild(parrafo);
     }