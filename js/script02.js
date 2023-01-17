let data;
let mode = 0;
let locID;
let buton;

function preload() {
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  console.log(data.description); //controleren of de data correct is ingeladen
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  background(220);
  //LOCATION SELECTION
  //create a grid of 6*3 rectangles to display the locations. when a location is clicked, the mode changes to 1
  for (let i = 0; i < data.locations.length; i++) {
    let x = i % 6;
    let y = floor(i / 6);
    let w = width / 6;
    let h = height / 3;
    let loc = data.locations[i];
    //add a button to each grid item
    button = createButton(loc.name);
    button.style("font-size", "20px");
    button.style("outline", "none");
    button.style("text-align", "center");
    button.style("display", "inline-block");
    button.style("cursor", "pointer");
    //random pastel background color
    button.style(
      "background-color",
      "rgba(" + random(255) + "," + random(255) + "," + random(255) + ",0.2)"
    );
    //position the button
    button.position(x * w, y * h);
    button.size(w, h);
    button.mousePressed(function () {
      locID = loc.ID;
      console.log(locID);
      mode++;
      console.log(mode);
    });
  }
}

function draw() {
  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
  } else if (mode == 2) {
    screen3();
  }
}

function screen1() {
  fill(0);
  textSize(20);
  console.log("screen1");
  text("screen1", 10, 20);
}

function screen2() {
  background(220);
  fill(0);
  textSize(20);
  console.log("screen2");
  text("screen2", 10, 20);
}

function screen3() {
  background(220);
  fill(0);
  textSize(20);
  console.log("screen3");
  text("screen3", 10, 20);
}
