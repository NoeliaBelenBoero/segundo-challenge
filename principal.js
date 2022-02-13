document.getElementById("volver-inicio").style.display="none";
palabra.focus();
const palabrasAleatorias = ["ESCUELA","SOL","ARBOL","CASA","ALURA","CHALLENGE","ORACLE","ONE","PAIS","XILOFON","FUEGO"];
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var botonInicio = document.querySelector("#inicio-juego");
botonInicio.addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("pantalla-inicio").style.display= "none";
    ingreso.focus();
    pincel.fillStyle = "cornflowerblue";
    pincel.fillRect(0,0,1500,550);
    var indiceAleatorio = Math.round(Math.random()*palabrasAleatorias.length);
    palabraAl =palabrasAleatorias[indiceAleatorio];
    //Base del ahorcado
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.moveTo(100, 350);
    pincel.lineTo(0, 400);
    pincel.lineTo(200, 400);
    pincel.fill();
    //Guiones
    function dibujarGuion(x,y){
         pincel.moveTo(x,y);
         pincel.lineTo(x+50,y);
         pincel.stroke();
    }

    pincel.font = "bold 30px verdana";
    var x = 10;
    var y = 500;
    for(var i = 0; i < palabraAl.length; i++){
        dibujarGuion(x,y);
        x += 100;
    }
});
