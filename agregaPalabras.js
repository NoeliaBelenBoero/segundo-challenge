var botonAgrega = document.querySelector("#agregar-palabra");
botonAgrega.addEventListener("click",function(event){
     event.preventDefault();
     var nuevaPalabra = palabra.value;
     var palabraExiste = 0;
     var palabraNoExiste = 0;
     for(i=0;i<palabrasAleatorias.length;i++){
         if (nuevaPalabra == palabrasAleatorias[i]){
            palabraExiste += 1;
         }else{
            palabraNoExiste += 1;
         }
     }
     if(palabraNoExiste == palabrasAleatorias.length){
         palabrasAleatorias.push(nuevaPalabra);
     }
     if(palabraExiste > 0){
         alert(nuevaPalabra+" ya existe en la base de datos");
     }
     document.getElementById("palabra").value="";
     palabra.focus();
});
