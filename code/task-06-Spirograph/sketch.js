function preload(){// preload assets
}

function setup() {
  createCanvas(400, 400);
  background(10, 110, 140); // noch zu klären, aber von mir festgelegt (optional dark & light mode)
  // angleMode(DEGREES); 

  // Wenn ich über die Eingabefelder was schreiben möchte, mache ich das dann am beste in HTML?
  textField = createInput('Datum'); // wsl unnötig bei meinem Projekt bzbw. Datum würde autom. generiert werden -> gibt es das? 
  textField.position(420, 100); 
  textField.size(100); 

  slider = createSlider(0, 5, 1, 1); // Slider mit 5 Schritten 
  // Wenn ich später mehrere Slider habe, wie benenne ich sie unterschiedlich? 
  slider.position(420, 150);
  slider.size(190);
  // Problem: Mein Slider setzt sich nicht mehr zurück
}

function draw() {

  var context = canvas.getContext('2d'); // was heißt das context? Was definiert das? Und worfür steht das 2d? 
  //Bzw. in anderem Bsp:  "var ctx = document.getElementById('myCanvas').getContext('2d');" was heißt das? Muss ich was verknüpfen?

  let val = slider.value();
  drawSpirograph(context, canvas.width/2, canvas.height/2, // warum funktioniert das mit der Hälfte nicht? (200, 200 geht)
  200, // Radius Kreis Umlaufbahn
  60,  // Radius Kreis Inlay 
  val*10); //Anzahl der Umdrehungen/ Abstand/ Geschwindigkeit ?
  // wsl muss ich bei manchen Formen dann die 5 Schritte aus dem Slider auf die Zahl übertragen - wie mache ich das? (Bspw Radius Kreisumlaufbahn zwischen 50 un 250 mgl)

  function drawSpirograph(context, cx, cy, radius1, radius2, ratio) { // Ich will ja mehrere Spirographen übereinander zweichnen, wie gehe ich das am besten an?
    
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