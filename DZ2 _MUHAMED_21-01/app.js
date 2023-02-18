function generateGrid() {
  let div;
  for (i = 0; i < 6; i++) {
    for (b = 0; b < 6; b++) 
    { 
      div = document.createElement("div");
      div.className = "cell";
      div.innerHTML = " " + i + " " 
      div.innerHTML = " " + b + " " 
      document.body.appendChild(div);
    }
    document.body.appendChild(document.createElement("br"));
   }
}
generateGrid();