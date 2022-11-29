function preload(){
  // preload assets
}

function setup() {
  
  document.body.style.backgroundColor = "blue";
  //createCanvas(1920, 1280);

}


function draw() {
  
  // Eingabefeld Text
  textInput = createInput(); // default value
  textInput.position(20, 100); // Position
  textInput.size(150); // Länge des Input-Felds
  

  //unterer Teil 
  background(10, 20, 90); 

  // Bilderrahmenanordnung
  for (let x = 0; x < 7; x += 1) {
   for (let y = 0; y < 10; y += 1) {    
   push();
   translate(100* x, 0);

        strokeWeight (2);
        fill ("white")
        rect(20, 20, 100, 200); //Bilderrahmengröße 
        // ? Abstand dazwischen

   pop();
   }
   }  
}






// Eingabe der Spaltenanzahl der Bildgallerie 

// <button onclick="one()">1</button>
// <button onclick="two()">2</button>
// <button onclick="four()">4</button>
// 
// <script>
// // Get the elements with class="column"
// var elements = document.getElementsByClassName("column");
// 
// // Declare a "loop" variable
// var i;
// 
// // Full-width images
// function one() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.flex = "100%";
//   }
// }
// 
// // Two images side by side
// function two() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.flex = "50%";
//   }
// }
// 
// // Four images side by side
// function four() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.flex = "25%";
//   }
// }
// </script>