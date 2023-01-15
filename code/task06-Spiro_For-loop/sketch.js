  const sketchWidth = 500;
  const sketchHeight = 500;
  const AbstandThema = 50;
  const Abstand = 40;

  //const header = document.getElementById('Überschrift');

  var Regler = []; 
  
  let button; // Button PNG
  var currentTime = new Date().toISOString().slice(0, 10);

  let titles = ['Improve coding skills', 'title1', 'title2', 'title3'];
  //titles [zaehler];


function setup() {
  createCanvas(sketchWidth*2, sketchHeight*2);  
  pixelDensity (10); // 10fache Auflösung pngs

// Button PNG Download 
  button = createButton('Save as PNG');
  button.size (150);
  button.style('font-size', '10px');
  button.style('font-family', 'Trebuchet MS');
  button.position(sketchWidth+20, 520);
  button.mousePressed(downloadImage);
  function downloadImage() {save(currentTime + '.png')} 


// Titles Array für 4 verschieden Titel, Statt "improve coding -> Titles abrufen)"
// -> Vorschleife für Grid + Offset ifs innerhalb des Loops

let div1 = createDiv(titles [0]);
div1.style('font-size', '17px');
div1.style('font-family', 'Trebuchet MS'); 
div1.position(sketchWidth+10, 50+AbstandThema);
  let div1_2 = createDiv("Time spent");
  div1_2.style('font-size', '10px');
  div1_2.style('font-family', 'Trebuchet MS'); 
  div1_2.position(sketchWidth+35, AbstandThema+AbstandThema/2+Abstand*2);
  let div1_3 = createDiv("Specific Topic  <------>   Fundamental Skills");
  div1_3.style('font-size', '10px');
  div1_3.style('font-family', 'Trebuchet MS'); 
  div1_3.position(sketchWidth+35, AbstandThema+AbstandThema/2+Abstand*3);
  let div1_4 = createDiv("Intensity/ Flow/ Concentration");
  div1_4.style('font-size', '10px');
  div1_4.style('font-family', 'Trebuchet MS'); 
  div1_4.position(sketchWidth+35, AbstandThema+AbstandThema/2+Abstand*4)
// Slider Array 1 
let minValues = [0,1,1]; 
for (var i = 0; i < 3; i++) {
  var slider = createSlider(minValues[i], 5, 0); // createSlider(Min:Zahl, Max:Zahl, Aktueller Wert*:Zahl, Schrittgröße*:Zahl);
  slider.size(170); 
  slider.position(sketchWidth+35, AbstandThema*2 +35 + i*Abstand); 
  Regler.push(slider);    
}
  
//for (let i = 0; i < 4; i++) {
//if (zaehler ==0) {offsetx = sketchWidth+35; offsety=100;};
//if (zaehler ==1) {offsetx = sketchWidth+35; offsety=200;};
//if (zaehler ==2) {offsetx = sketchWidth+35; offsety=300;};
//if (zaehler ==3) {offsetx = sketchWidth+35; offsety=400;};
//}
}


function draw() {
  colorMode(RGB);
  //background(200); 
  clear();
  strokeWeight(); 

  fill (210); circle (sketchHeight/2, sketchWidth/2, 400); 
  fill (200); circle (sketchHeight/2, sketchWidth/2, 320); 
  fill (210);circle (sketchHeight/2, sketchWidth/2, 240);   
  fill (200); circle (sketchHeight/2, sketchWidth/2, 160);
  fill (210); circle (sketchHeight/2, sketchWidth/2, 80); 

// Slider Werte
  var context = canvas.getContext('2d'); 
  let val1 = Regler[0].value();
  let val2 = Regler[1].value(); 
  let val3 = Regler[2].value(); 

// Spirograph1 = Improve coding skills
 strokeWeight(0.4);
 stroke ("blue");
 drawSpirograph1(context, sketchWidth/2, sketchHeight/2,
 val2*8, // radius1
 val1*40,  // radius2 - Kreis Inlay = Umrandungskreis 
 val3*20); // ratio - Anzahl der Umdrehungen
 context.stroke();

 function drawSpirograph1 (context, cx, cy, radius1, radius2, ratio) { 
 var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
 for (theta = 0; theta <= Math.PI * 2; theta += 0.0001) { // auf 0.0001 setzen zum Schluss damit Linien sauber sind
   x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio) * Math.cos(theta * ratio * 2);
   y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio) * Math.cos(theta * ratio * 2);
   context.lineTo(x, y);
 }}

// Spirograph2 = Educate on artificial intelligence
  //  strokeWeight(0.4);
  //  stroke ("black");
  //  drawSpirograph2(context, 250, height/2,
  //  val1*25, // radius1
  //  val1*10,  // radius2 - Kreis Inlay = Umrandungskreis 
  //  val4*2 +10); // ratio - Anzahl der Umdrehungen
  //  context.stroke();
  //
  //  function drawSpirograph2 (context, cx, cy, radius1, radius2, ratio) { 
  //  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  // starting point (theta = 0)
  //  for (theta = 0; theta <= Math.PI * 4; theta += 0.001) { // 0.001 bspw zu 0.1 = eckiger -> könnte Slider sein
  //    x = cx + radius1 * Math.cos(theta* ratio) + (radius2) * Math.cos(theta* 20);
  //    y = cy + radius1 * Math.sin(theta* ratio) + (radius2) * Math.sin(theta*0.5);
  //    context.lineTo(x, y);
  //  }}

// Spirograph3 = Practice digital drawing 
  //  strokeWeight(1.5);
  //  stroke ("purple");
  //  drawSpirograph3(context, sketchWidth/2, sketchHeight/2,
  //  val3*10+10, // radius1
  //  val3*5+20,  // radius2 - Kreis Inlay = Umrandungskreis 
  //  val4*9+20); // ratio - Anzahl der Umdrehungen
  //  context.stroke();
  //
  //  function drawSpirograph3 (context, cx, cy, radius1, radius2, ratio) { 
  //    var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
  //    for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { 
  //      x = cx + radius1*2 * Math.cos(theta) + radius2*val3 * Math.cos(theta * ratio);
  //      y = cy + radius1*0.5 * Math.sin(theta) + radius2*val3 * Math.sin(theta * ratio);
  //      context.lineTo(x, y);
  //    }}

// Spirograph4 = Get into generative art
  //  strokeWeight(1.5);
  //  stroke ("magenta");
  //  drawSpirograph3(context, sketchWidth/2, sketchHeight/2,
  //  val4*7 - 20, // radius1
  //  val4*20,  // radius2 - Kreis Inlay = Umrandungskreis 
  //  40); // ratio - Anzahl der Umdrehungen
  //  context.stroke();
  //  
  //  function drawSpirograph3 (context, cx, cy, radius1, radius2, ratio) { 
  //    var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
  //    for (theta = 0; theta <= Math.PI * 8; theta += 0.1) { 
  //      x = cx + radius1 * Math.cos(theta) + radius2 * Math.sqrt(theta) * Math.cos(theta * ratio);
  //      y = cy + radius1 * Math.sin(theta) + radius2 * Math.sqrt(theta) * Math.sin(theta * ratio);
  //      context.lineTo(x, y);
  //    }}
}










