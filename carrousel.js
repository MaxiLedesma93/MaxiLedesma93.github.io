
let indiceCarrusel=0;
function correCarru(){
    varTemp= setInterval(carruDer, 3000);
    

}
window.addEventListener('load', function(){
    let fotosurl= ["img/bff12ea928bef5c5a502f23e0ee2e6e1.jpg", "img/Fondant.jpg",
    "img/tortadeCasamiento.jpg", "img/Ganache.jpg"];
    let img = document.getElementById("imgCarrusel");
    img.src = fotosurl[indiceCarrusel];
    let varTemp;
    correCarru();
});


    function carruDer() {
        clearInterval(varTemp);
        let fotosurl= ["img/bff12ea928bef5c5a502f23e0ee2e6e1.jpg", "img/Fondant.jpg",
        "img/tortadeCasamiento.jpg", "img/Ganache.jpg"];
        let img = document.getElementById("imgCarrusel");
        indiceCarrusel++;
        if(indiceCarrusel<fotosurl.length){
        img.src = fotosurl[indiceCarrusel];
        
     
        }else{      
            indiceCarrusel=0;
            img.src = fotosurl[indiceCarrusel];
               
        }
        correCarru();
        

    };
    function carruIzq() {
        clearInterval(varTemp);
        let fotosurl= ["img/bff12ea928bef5c5a502f23e0ee2e6e1.jpg", "img/Fondant.jpg",
        "img/tortadeCasamiento.jpg", "img/Ganache.jpg"];
        let img = document.getElementById("imgCarrusel");
        img.src = fotosurl[indiceCarrusel];
        indiceCarrusel--;

        if(indiceCarrusel>=0){
        
            img.src = fotosurl[indiceCarrusel];     
        }else{      
            indiceCarrusel=fotosurl.length-1; 
            img.src = fotosurl[indiceCarrusel];
        }
        correCarru();

    };
    
    







