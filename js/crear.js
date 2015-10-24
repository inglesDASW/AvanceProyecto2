var boton = document.getElementById("generar");



var cantidad = 0;




    var tipo = "texto";




function iniciar(){

    if(boton.addEventListener){
        boton.addEventListener("click", function(){

      tipo= document.frm.tipos.options[document.frm.tipos.selectedIndex].value;
        if(tipo=="texto"){

            tipoTexto();
            
        
        }else if(tipo=="fecha"){
            tipoFecha();
        
        }else if(tipo=="contra"){
            tipoContra();
        
        }else if(tipo=="boton"){
            tipoBoton();

        }





        },false);


    }else if (boton.attachEvent){
        boton.attachEvent("onclick", function(){
tipo= document.frm.tipos.options[document.frm.tipos.selectedIndex].value;
        if(tipo=="texto"){
            tipoTexto();
            
        
        }else if(tipo=="fecha"){
            tipoFecha();
        
        }else if(tipo=="contra"){
            tipoContra();
        
        }else if(tipo=="boton"){
            tipoBoton();

        }


            });
    }
}



function tipoTexto(){

cantidad++;
  var nuevohijo = document.createElement('input');
  nuevohijo.type = 'text';
  nuevohijo.name = 'nombre' + cantidad;
  nuevohijo.id = 'nombre' + cantidad;
  document.getElementById('insertar').appendChild(nuevohijo);
  document.getElementById('insertar').appendChild(document.createElement('br'));
 

}

function tipoFecha(){

cantidad++;
  var nuevohijo = document.createElement('input');
  nuevohijo.type = 'date';
  nuevohijo.name = 'nombre' + cantidad;
  nuevohijo.id = 'nombre' + cantidad;
  document.getElementById('insertar').appendChild(nuevohijo);
  document.getElementById('insertar').appendChild(document.createElement('br'));
 

}

function tipoContra(){
cantidad++;
  var nuevohijo = document.createElement('input');
  nuevohijo.type = 'password';
  nuevohijo.name = 'nombre' + cantidad;
  nuevohijo.id = 'nombre' + cantidad;
  document.getElementById('insertar').appendChild(nuevohijo);
  document.getElementById('insertar').appendChild(document.createElement('br'));
 


}


function tipoBoton(){
cantidad++;
  var nuevohijo = document.createElement('input');
  nuevohijo.type = 'button';
  nuevohijo.name = 'nombre' + cantidad;
  nuevohijo.id = 'nombre' + cantidad;
  document.getElementById('insertar').appendChild(nuevohijo);
  document.getElementById('insertar').appendChild(document.createElement('br'));
 


}








if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}
