function validar(){
    let nombre = document.getElementById("nombre");
    let mail = document.getElementById("mail");
    let msj = document.getElementById("msj");
    let listaErrores= document.getElementById("listaErrores");
    let listaEnviados= document.getElementById("listaEnviados");
    listaErrores.innerHTML="";
    let item= document.createElement("li");
    let exprReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; 
    if(nombre.value==""){
        item.innerHTML="nombre invalido:  " + nombre.value ;
        listaErrores.appendChild(item);
    }else if(!exprReg.test(mail.value)){        
                item.innerHTML="mail invalido:  " + mail.value ;
                listaErrores.appendChild(item);
            }else if(msj.value == ""|| (msj.value.length > 200)){           
                    item.innerHTML="mensaje invalido:  " + msj.value ;
                    listaErrores.appendChild(item);
                }else{
                    listaEnviados.innerHTML="Envio correcto: ";
                    item.innerHTML="Nombre: "+ nombre.value ;
                    listaEnviados.appendChild(item);
                    item= document.createElement("li");
                    item.innerHTML="e-mail: "+ mail.value;
                    listaEnviados.appendChild(item);
                    item= document.createElement("li");
                    item.innerHTML="Mensaje: "+ msj.value;
                    listaEnviados.appendChild(item);

                }
    
    return false;
};
    