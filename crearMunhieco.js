function mastil(){
    pincel.beginPath();
    pincel.moveTo(100, 350);
    pincel.lineTo(100, 10);
    pincel.stroke();
  }
  function extremoMastil(){
    pincel.beginPath();
    pincel.moveTo(100, 10);
    pincel.lineTo(400, 10);
    pincel.stroke();
  }
  function puntaMastil(){
    pincel.beginPath();
    pincel.moveTo(400, 10);
    pincel.lineTo(400, 30);
    pincel.stroke();
  }  
  function cabeza(){
    pincel.beginPath();
    pincel.fillStyle="black";
    pincel.arc(400, 70, 40, 0, 2 * Math.PI);
    pincel.fill();
  }  
  function cuerpo(){
    pincel.beginPath();
    pincel.moveTo(400, 110);
    pincel.lineTo(400, 250);
    pincel.stroke();
  }  
  function brazoIzquierdo(){
    pincel.beginPath();
    pincel.moveTo(400, 120);
    pincel.lineTo(300, 150);
    pincel.stroke();
  }  
  function brazoDerecho(){
    pincel.beginPath();
    pincel.moveTo(400, 120);
    pincel.lineTo(500, 150);
    pincel.stroke();
  }  
  function piernaIzquierda(){
    pincel.beginPath();
    pincel.moveTo(400, 250);
    pincel.lineTo(300, 320);
    pincel.stroke();
  }  
  function piernaDerecha(){
    pincel.beginPath();
    pincel.moveTo(400, 250);
    pincel.lineTo(500, 320);
    pincel.stroke();
  }  