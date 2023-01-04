function preload(){// preload assets
}
const sketchWidth = 800;
const sketchHeight = 500;

var Regler = []; 

function setup() {
  createCanvas(sketchWidth, sketchHeight);

 // Themen Text -> da Eingabefeld, ersetzt durch Text in Drawfunktion
      //for (var i = 0; i < 3; i++) {
      //  var textField = createInput('efsvs');
      //  textField.position(520, 100 + i*80); 
      //  textField.size(170); // autom. Länge? und va. kein Eingabefeld
      //}

  // Slider Array
  for (var i = 0; i < 4; i++) {
    var slider = createSlider(0, 5, 1); // Slider mit 5 Schritten, createSlider(Min:Zahl, Max:Zahl, Aktueller Wert*:Zahl, Schrittgröße*:Zahl);
    slider.size(170); 
    slider.position(520, 115 + i*80); //y Wert je nach Slider anders
    Regler.push(slider);    
  }
}

function draw() {
  colorMode(RGB);
  background(240); 
  noStroke ();
  circle (250, 250, 400); 

  //Text
  textSize(15);
  text("Rate your day from 1 [:(] to 5 [:)]", 520, 60);
  textSize(12);
  text("Mood?", 520, 100);
  text("Happiness?", 520, 180);
  text("Creativity?", 520, 260);
  text("Sleep?", 520, 340);

  var context = canvas.getContext('2d'); 
  let val1 = Regler[0].value();
  let val2 = Regler[1].value(); 
  let val3 = Regler[2].value(); 
  let val4 = Regler[3].value(); 

  drawSpirograph1(context, 250, height/2, // Sitzt nicht ganz mittig?
  val1*18, // radius1
  val1*15,  // radius2 - Kreis Inlay = Umrandungskreis 
  val1*17); // ratio - Anzahl der Umdrehungen
  context.stroke();
  strokeWeight(1); 
  stroke (200, 100, 255);

  drawSpirograph2(context, 250, height/2,
  val2*27, // radius1
  val2*20,  // radius2 - Kreis Inlay = Umrandungskreis 
  val2*15); // ratio - Anzahl der Umdrehungen
  context.stroke();
  strokeWeight(1); 
  stroke (100, 100, 255);

  drawSpirograph3(context, 250, height/2,
  val3*23, // radius1
  val3*6,  // radius2 - Kreis Inlay = Umrandungskreis 
  val3*13); // ratio - Anzahl der Umdrehungen
  context.stroke();
  strokeWeight(1); 
  stroke (10, 250, 255); 

  drawSpirograph4(context, 250, height/2,
  val4*27, // radius1
  val4*9,  // radius2 - Kreis Inlay = Umrandungskreis 
  val4+10*9); // ratio - Anzahl der Umdrehungen
  context.stroke();
  strokeWeight(1); 
  stroke (255, 255, 25);

// Spirograph1 = Mood 
function drawSpirograph1 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta;
  context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);  // starting point (theta = 0)

  for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { // 0.001 bspw zu 0.1 = eckiger -> könnte Slider sein
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}

// Spirograph2 = Happiness 
function drawSpirograph2 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta;
  context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);  

  for (theta = 0; theta <= Math.PI * 2; theta += 0.01) { // 0.001 bspw zu 0.1 = eckiger -> könnte Slider sein
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}

// Spirograph3 = Creativity 
function drawSpirograph3 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta;
  context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);  

  for (theta = 0; theta <= Math.PI * 2; theta += 0.02) { 
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}

// Spirograph4 = Sleep
function drawSpirograph4 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta;
  context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);  

  for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { 
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}

}





 // erster Slider Stroke Farbe mit lerp 
  //let c1 = (90, 220, 210); 
  //let c2 = (190, 220, 210);

  //colorMode(RGB);
  //stroke();
  //let from = color(218, 165, 32);
  //let to = color(72, 61, 139);
  //colorMode(RGB); // Try changing to HSB.
  //let val = slider.value(lerpColor(from, to, 0.5));


  //Open Tasks
      // Ausgabe Ergebnis als png/ tiff 
      // Random Erzeugung von 365 Ergebnissen für Post Plot
      // zstl. Datum autom. generieren mgl? 
      // Null-Punkt der Regler definieren (wenn ganz links=0 dann trotzdem zeichnen)
      // mir fehlt jetzt doch die Spirale (es dreht sich nur ein Punkt auf einem Kreis um eine Kreisumlaufbahn)
        // bei Spir. formel im zweiten Teil statt noch einem Kreis bspw. ein Dreieck platzieren 