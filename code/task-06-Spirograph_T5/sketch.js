  const sketchWidth = 500;
  const sketchHeight = 500;
  
  let button; // Button PNG
  var Regler = []; 
  var currentTime = new Date().toISOString().slice(0, 10);
  
function setup() {
  createCanvas(sketchWidth, sketchHeight);  
  pixelDensity (10); // 10fache Auflösung pngs

// Text
  let div = createDiv(currentTime);
  div.style('font-size', '10px');
  div.position(sketchWidth+20, 30);  

  let div2 = createDiv("Rate your day");
  div2.style('font-size', '16px');
  div2.position(sketchWidth+20, 50); 

  let div3 = createDiv("Mood?");
  div3.style('font-size', '16px');
  div3.position(sketchWidth+20, 90); 
  
  let div4 = createDiv("Happiness?");
  div4.style('font-size', '16px');
  div4.position(sketchWidth+20, 170);

  let div5 = createDiv("Creativity?");
  div5.style('font-size', '16px');
  div5.position(sketchWidth+20, 250);

  let div6 = createDiv("Ratio");
  div6.style('font-size', '16px');
  div6.position(sketchWidth+20, 330);

  let div7 = createDiv("Color");
  div7.style('font-size', '16px');
  div7.position(sketchWidth+20, 410);

// Button PNG Download, nur überlagerte Spirographen in Kreis als tiff/ svg
  button = createButton('Save as PNG');
  button.size (150);
  button.position(sketchWidth+20, 520);
  button.mousePressed(downloadImage);
  function downloadImage() {save(currentTime + '.png')} 

  // Slider Array
  for (var i = 0; i < 5; i++) {
    var slider = createSlider(1, 5, 0); // createSlider(Min:Zahl, Max:Zahl, Aktueller Wert*:Zahl, Schrittgröße*:Zahl);
    slider.size(170); 
    slider.position(520, 115 + i*80); //y Wert je nach Slider anders
    Regler.push(slider);    
  }

}

function draw() {
  colorMode(RGB);
  background(200); 
  strokeWeight(); 

  fill (210);
  circle (sketchHeight/2, sketchWidth/2, 400); 

// Slider Werte
  var context = canvas.getContext('2d'); 
  let val1 = Regler[0].value();
  let val2 = Regler[1].value(); 
  let val3 = Regler[2].value(); 
  let val4 = Regler[3].value(); 

// Spirograph1 = Mood -> OFFSET
  strokeWeight(1.5);
  stroke ("black");
  drawSpirograph1(context, 250, height/2,
  val1*25, // radius1
  val1*10,  // radius2 - Kreis Inlay = Umrandungskreis 
  val4*2 +10); // ratio - Anzahl der Umdrehungen
  context.stroke();

  function drawSpirograph1 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  // starting point (theta = 0)
  for (theta = 0; theta <= Math.PI * 4; theta += 0.001) { // 0.001 bspw zu 0.1 = eckiger -> könnte Slider sein
    x = cx + radius1 * Math.cos(theta* ratio) + (radius2) * Math.cos(theta* 20);
    y = cy + radius1 * Math.sin(theta* ratio) + (radius2) * Math.sin(theta*0.5);
    context.lineTo(x, y);
  }}

// Spirograph2 = Happiness 
  strokeWeight(1.5);
  stroke ("blue");
  drawSpirograph2(context, 250, height/2,
  val2*21, // radius1
  val2*15,  // radius2 - Kreis Inlay = Umrandungskreis 
  val4*15); // ratio - Anzahl der Umdrehungen
  context.stroke();

  function drawSpirograph2 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
  for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { 
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio) * Math.cos(theta * ratio * 2);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio) * Math.cos(theta * ratio * 2);
    context.lineTo(x, y);
  }}

// Spirograph3 = Creativity 
  strokeWeight(1.5);
  stroke ("purple");
  drawSpirograph3(context, sketchWidth/2, sketchHeight/2,
  val3*10+10, // radius1
  val3*5+20,  // radius2 - Kreis Inlay = Umrandungskreis 
  val4*9+20); // ratio - Anzahl der Umdrehungen
  context.stroke();

  function drawSpirograph3 (context, cx, cy, radius1, radius2, ratio) { 
    var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
    for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { 
      x = cx + radius1*2 * Math.cos(theta) + radius2*val3 * Math.cos(theta * ratio);
      y = cy + radius1*0.5 * Math.sin(theta) + radius2*val3 * Math.sin(theta * ratio);
      context.lineTo(x, y);
    }}

// Spirograph4 = Creativity 
strokeWeight(1.5);
stroke ("magenta");
drawSpirograph3(context, sketchWidth/2, sketchHeight/2,
val4*7 - 20, // radius1
val4*20,  // radius2 - Kreis Inlay = Umrandungskreis 
40); // ratio - Anzahl der Umdrehungen
context.stroke();

function drawSpirograph3 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
  for (theta = 0; theta <= Math.PI * 8; theta += 0.1) { 
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.sqrt(theta) * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sqrt(theta) * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }}

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
      // Random Erzeugung von 365 Ergebnissen für Post Plot
      // Null-Punkt der Regler definieren (wenn ganz links=0 dann trotzdem zeichnen)
      // mir fehlt jetzt doch die Spirale (es dreht sich nur ein Punkt auf einem Kreis um eine Kreisumlaufbahn)
        // bei Spir. formel im zweiten Teil statt noch einem Kreis bspw. ein Dreieck platzieren 