const sketchWidth = 500;
const sketchHeight = 500;
const AbstandThema = 110; // y-Abstand zum Thema
const Abstand = 50; // Abstand zwischen Slidern bzw. Text
const AbstandSlider = 20;

let button; 
var currentTime = new Date().toISOString().slice(0, 10);

let titles = ['Improve coding skills', 'Educate on artificial intelligence', 'Practice digital drawing', 'Get into generative art'];
var Regler = []; 

function setup() {
  createCanvas(sketchWidth, sketchHeight);  
  pixelDensity (10); // 10fache Auflösung pngs

  // Button PNG Download 
  button = createButton('Save as PNG');
  button.size (100);
  button.style('font-size', '10px');
  button.style('font-family', 'Trebuchet MS');
  button.position(sketchWidth, 540);
  button.mousePressed(downloadImage);
  function downloadImage() {save(currentTime + '.png')} 

  // Grid Array für 4 Boxen 
  for (let d = 0; d < titles.length; d += 1) {
    let offsetX = 0;
    let offsetY = 0;

    if (d === 1) {
      offsetX = 350;
    } else if (d === 2) {
      offsetY = 200;
    } else if (d === 3) {
      offsetX = 350;
      offsetY = 200;
    }
 
    let div1 = createDiv(titles[d]);
    div1.style('font-size', '16px');
    div1.style('color', 'beige');
    div1.style('font-family', 'Trebuchet MS'); 
    div1.position(sketchWidth+offsetX, 20+AbstandThema+offsetY);

      let div1_2 = createDiv("Time spent");
      div1_2.style('font-size', '10px');
      div1_2.style('color', 'beige');
      div1_2.style('font-family', 'Trebuchet MS'); 
      div1_2.position(sketchWidth+offsetX, AbstandThema+Abstand+offsetY);

      let div1_3 = createDiv("Specific to General");
      div1_3.style('font-size', '10px');
      div1_3.style('color', 'beige');
      div1_3.style('font-family', 'Trebuchet MS'); 
      div1_3.position(sketchWidth+offsetX, AbstandThema+Abstand*2+offsetY);

      let div1_4 = createDiv("Intensity");
      div1_4.style('font-size', '10px');
      div1_4.style('color', 'beige');
      div1_4.style('font-family', 'Trebuchet MS'); 
      div1_4.position(sketchWidth+offsetX, AbstandThema+Abstand*3+offsetY);

      let minValues = [0,1,1]; // Slider 1 auf Startwert 0, sodass beim Öffnen keine Spiros zu sehen sind -> Formelprobleme
      for (var i = 0; i < 3; i++) {
        var slider = createSlider(minValues[i], 5, 0); // createSlider(Min:Zahl, Max:Zahl, Aktueller Wert*:Zahl, Schrittgröße*:Zahl);
        slider.size(250); 
        slider.position(sketchWidth+offsetX, AbstandThema+Abstand+AbstandSlider+i*Abstand+offsetY); 
        Regler.push(slider);    
      }
  }
}

function drawSpirograph1 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);  
  for (theta = 0; theta <= Math.PI*2; theta += 0.0001) { 
    x = cx + radius1*2 * Math.cos(theta) + radius2 * Math.cos(theta * ratio) * Math.cos(theta * ratio * 2);
    y = cy + radius1*2 * Math.sin(theta) + radius2 * Math.sin(theta * ratio) * Math.cos(theta * ratio * 2);
    context.lineTo(x, y);
  }
}

function drawSpirograph2 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  // starting point (theta = 0)
  for (theta = 0; theta <= Math.PI *2; theta += 0.001) {  
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta *ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta *ratio);
    context.lineTo(x, y); 
  }
}

function drawSpirograph3 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  
  for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { 
    x = cx + radius1*2 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1*0.5 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}

function drawSpirograph4 (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta; context.beginPath(); context.moveTo(cx + radius1 + radius2, cy);  0
  for (theta = 0; theta <= Math.PI * 8; theta += 0.0001) { 
    x = cx + radius2 * Math.cos(theta) + radius1 * Math.cos(theta * ratio);
    y = cy + radius2 * Math.sin(theta) + radius1 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}

function draw() {
  colorMode(RGB);
  clear();

  strokeWeight (0.5);
  stroke ('beige'); 
  fill (255, 0);
  circle (sketchHeight/2, sketchWidth/2, 400); 
  circle (sketchHeight/2, sketchWidth/2, 320); 
  circle (sketchHeight/2, sketchWidth/2, 240);   
  circle (sketchHeight/2, sketchWidth/2, 160);
  circle (sketchHeight/2, sketchWidth/2, 80);

  // Slider Werte
  var context = canvas.getContext('2d');

  for (let i = 0; i < 4; i += 1) { // IM REGLER ARRAY WERDEN 4 x 3 Slider eingefügt, deshalb sind 12 Regler enthalten, um an den entsprechenden Regler zu kommen, müssen wir also immer 3 weiter gehen (i*3)
    let val1 = Regler[i*3 + 0].value();
    let val2 = Regler[i*3 + 1].value(); 
    let val3 = Regler[i*3 + 2].value(); 

    if (i === 0) {
      // Spirograph1 
      strokeWeight(0.8);
      stroke ("blue");
      drawSpirograph1(context, sketchWidth/2, sketchHeight/2,
      val2*4, // radius1
      val1*32,  // radius2 - Kreis Inlay = Umrandungskreis 
      val3*8+5); // ratio - Anzahl der Umdrehungen
      context.stroke();
    } else if (i === 1) {
      // Spirograph2 
      strokeWeight(0.8);
      stroke ("yellow");
      drawSpirograph2(context, sketchWidth/2, sketchHeight/2,
      val1*35,
      val2*9,  
      val3*5 +50); 
      context.stroke();
    } else if (i === 2) {
      // Spirograph3  
      strokeWeight(0.8);
      stroke ("cyan");
      drawSpirograph3(context, sketchWidth/2, sketchHeight/2,
      val1*9,
      val2*12,   
      val3*20);
      context.stroke();
    } else {
      // Spirograph4 
      strokeWeight(0.8);
      stroke ("violet");
      drawSpirograph4(context, sketchWidth/2, sketchHeight/2,
      val1*30, 
      val2*9 +15, 
      val3*7); 
      context.stroke();
    }
  }

  // Mitte mit Kreis überzeichnen 
  //strokeWeight (0.5);
  //stroke (29, 32, 41); 
  //fill (20, 20, 30); 
  //circle (sketchHeight/2, sketchWidth/2, 20);
  
}