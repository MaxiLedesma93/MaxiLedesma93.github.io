function validar(){
    let nombre = document.getElementById("nombre");
    let mail = document.getElementById("mail");
    let msj = document.getElementById("msj");
    let listaErrores= document.getElementById("listaErrores");
    let listaEnviados= document.getElementById("listaEnviados");
    nombre.classList.remove("errorCampo");
    mail.classList.remove("errorCampo");
    msj.classList.remove("errorCampo");
    let item;
    let flag= true;
    let exprReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; 
    if(nombre.value==""){
        item= document.createElement("li");
        item.innerHTML="nombre invalido:  " + nombre.value ;
        listaErrores.appendChild(item);
        nombre.classList.add("errorCampo");
        flag=false;
    } 
    if(!exprReg.test(mail.value)){   
        item= document.createElement("li");     
        item.innerHTML="mail invalido:  " + mail.value ;
        listaErrores.appendChild(item);
        mail.classList.add("errorCampo");
        flag=false;
    }
    if(msj.value == ""|| (msj.value.length > 200)){   
        item= document.createElement("li");        
        item.innerHTML="mensaje invalido:  " + msj.value ;
        listaErrores.appendChild(item);
        msj.classList.add("errorCampo");
        flag=false;
        
    }
    if(flag){
        
        item=document.createElement("li");
        item.innerHTML="Envio Correcto: ";
        listaEnviados.appendChild(item);
        item=document.createElement("li");
        item.innerHTML="Nombre: "+ nombre.value ;
        listaEnviados.appendChild(item);
        item= document.createElement("li");
        item.innerHTML="e-mail: "+ mail.value;
        listaEnviados.appendChild(item);
        item= document.createElement("li");
        item.innerHTML="Mensaje: "+ msj.value;
        listaEnviados.appendChild(item);
        limpiar();
                    
                    

    }
    
    return false;
};
function limpiar(){
    let nombre= document.getElementById("nombre");
    nombre.value="";
    let mail= document.getElementById("mail");
    mail.value="";
    let msj= document.getElementById("msj");
    msj.value="";

}
    