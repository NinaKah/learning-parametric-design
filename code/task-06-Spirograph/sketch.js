function preload(){// preload assets
}

function setup() {
  createCanvas(400, 400);
  background(10, 110, 140); // noch zu klären, aber von mir festgelegt (optional dark & light mode)
  // angleMode(DEGREES); 

  // Wenn ich über die Eingabefelder was schreiben möchte, mache ich das dann am beste in HTML?
  textField = createInput('Datum'); // wsl unnötig bei meinem Projekt bzbw. Datum würde autom. generiert werden -> gibt es das? 
  textField.position(420, 100); // position of the input
  textField.size(100); // size of input

  slider = createSlider(0, 200, 50, 10); // Wenn ich mehrere Slider habe, wie benenne ich sie? 
  slider.position(420, 150);
  slider.size(100);
}

function draw() {

  var context = canvas.getContext('2d'); // was heißt das context? Was definiert das? Und worfür steht das 2d? 
  //Bzw. in anderem Bsp:  "var ctx = document.getElementById('myCanvas').getContext('2d');" was heißt das? Muss ich was verknüpfen?

  drawSpirograph(context, canvas.width/2, canvas.height/2, // warum funktioniert das mit der Hälfte nicht? (200, 200 geht)
  200, //Radius Kreis Umlaufbahn
  60,  // Radius Kreis Inlay 
  20); //Anzahl der Umdrehungen/ Abstand/ Geschwindigkeit ?

  function drawSpirograph(context, cx, cy, radius1, radius2, ratio) {
    var x, y, theta; // für was steht theta? Ist das immer die Spanne von 0 bis 2PI by default?
  
    // Move to starting point (theta = 0)
    context.beginPath();
    context.moveTo(cx + radius1 + radius2, cy);
  
    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= Math.PI * 2; theta += 0.01) {
      x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
      y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
      context.lineTo(x, y);
    }

    context.stroke();
    stroke (90, 220, 210); // Farbe soll über Regler bestimmt werden 
    strokeWeight(2); //Kontur lege ich fest
  }


}