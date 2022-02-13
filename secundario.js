function soloLetras(event){
    var key=event.keyCode || event.which;
    var teclado=String.fromCharCode(key);
    var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    if(letras.indexOf(teclado)==-1){
        return false;
    }
      
 }
     var noEsta = 0;
     var siEsta = 0;
     var xLetra = 600;
     var arr = [];
     var botonCaptura = document.querySelector("#captura");
     botonCaptura.addEventListener("click",function(event){
         event.preventDefault();
         var letra = ingreso.value;
        // arr.push(letra);
         console.log(arr.length);
         var letraExiste = 0;
         var letraNoExiste = 0;
        if(arr.length<1){
          arr.push(letra);
          pincel.fillStyle="white";
          pincel.fillText(letra,xLetra,170);
          var x = 10;
         var y = 500;
         var contador = 0;
         for(var i = 0; i < palabraAl.length; i++){
            if(letra == palabraAl[i]){
              pincel.fillStyle="black";
              pincel.fillText(palabraAl[i],x,y-5);
              siEsta += 1;
            }
            else{
               contador += 1;
            }
            x += 100; 
         }
         if(contador == palabraAl.length){
           noEsta += 1;
           switch(noEsta){
             case 1:
               mastil();
               break;
             case 2:
               extremoMastil();
               break;
             case 3:
               puntaMastil();
               break;
             case 4:
               cabeza();
               break;
             case 5:
               cuerpo();
               break;
             case 6:
               brazoIzquierdo();
               break
             case 7:
               brazoDerecho();
               break;
             case 8:
               piernaIzquierda();
               break;
             case 9:
               piernaDerecha();
               break;    
           }
         }
         xLetra += 30;
         document.getElementById("ingreso").value="";
         ingreso.focus();
         if(siEsta == palabraAl.length){
               pincel.fillStyle="green";
               pincel.fillText("GANASTE!!!",600,100);
               document.getElementById("juego").style.display="none";
               document.getElementById("volver-inicio").style.display="block";
         }else{
           if(noEsta == 9){
               pincel.fillStyle="red";
               pincel.fillText("PERDISTE!!!",600,100);
               pincel.fillText("X",375,65);
               pincel.fillText("X",405,65);
               pincel.fillText("¬",390,95);
               document.getElementById("juego").style.display="none";
               document.getElementById("volver-inicio").style.display="block";
               alert("PERDISTE,la palabra era: "+palabraAl);
           }
         }
         }
         else{
             for(var i=0;i < arr.length;i++){
                if (letra == arr[i]){
                    letraExiste += 1;
                }else{
                    letraNoExiste += 1;
                }
              }
              if(letraExiste>0){
                alert(letra+" ya está ingresada");
                document.getElementById("ingreso").value="";
                ingreso.focus();
              }
              if (letraNoExiste==arr.length){
                   arr.push(letra);
                   pincel.fillStyle="white";
                   pincel.fillText(letra,xLetra,170);
                   var x = 10;
         var y = 500;
         var contador = 0;
         for(var i = 0; i < palabraAl.length; i++){
            if(letra == palabraAl[i]){
              pincel.fillStyle="black";
              pincel.fillText(palabraAl[i],x,y-5);
              siEsta += 1;
            }
            else{
               contador += 1;
            }
            x += 100; 
         }
         if(contador == palabraAl.length){
           noEsta += 1;
           switch(noEsta){
             case 1:
               mastil();
               break;
             case 2:
               extremoMastil();
               break;
             case 3:
               puntaMastil();
               break;
             case 4:
               cabeza();
               break;
             case 5:
               cuerpo();
               break;
             case 6:
               brazoIzquierdo();
               break
             case 7:
               brazoDerecho();
               break;
             case 8:
               piernaIzquierda();
               break;
             case 9:
               piernaDerecha();
               break;    
           }
         }
         xLetra += 30;
         document.getElementById("ingreso").value="";
         ingreso.focus();
         if(siEsta == palabraAl.length){
               pincel.fillStyle="green";
               pincel.fillText("GANASTE!!!",600,100);
               document.getElementById("juego").style.display="none";
               document.getElementById("volver-inicio").style.display="block";
         }else{
           if(noEsta == 9){
               pincel.fillStyle="red";
               pincel.fillText("PERDISTE!!!",600,100);
               pincel.fillText("X",375,65);
               pincel.fillText("X",405,65);
               pincel.fillText("¬",390,95);
               document.getElementById("juego").style.display="none";
               document.getElementById("volver-inicio").style.display="block";
               alert("PERDISTE,la palabra era: "+palabraAl); 
           }
         } 
              }
          }
      
       });