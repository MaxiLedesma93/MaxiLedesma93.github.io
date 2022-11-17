
let indiceCarrusel=0;
function carruDer() {
    let fotosurl= ["img/bff12ea928bef5c5a502f23e0ee2e6e1.jpg", "img/Fondant.jpg", 
    "img/tortadeCasamiento.jpg", "img/Ganache.jpg"];
    let img = document.getElementById("imgCarrusel");
    if(indiceCarrusel<fotosurl.length){
        img.src = fotosurl[indiceCarrusel];
        indiceCarrusel++;
        
           
    }else{      
            indiceCarrusel=0;
            img.src = fotosurl[indiceCarrusel];
            indiceCarrusel++;
               
    }
    
};
function carruIzq() {
    let fotosurl= ["img/bff12ea928bef5c5a502f23e0ee2e6e1.jpg", "img/Fondant.jpg", 
    "img/tortadeCasamiento.jpg", "img/Ganache.jpg"];
    let img = document.getElementById("imgCarrusel");  
    if(indiceCarrusel>=0){
        
        img.src = fotosurl[indiceCarrusel];
        indiceCarrusel--;
        
           
    }else{      
            indiceCarrusel=fotosurl.length-1; 
            img.src = fotosurl[indiceCarrusel];
            indiceCarrusel--;   
    }
    
};





