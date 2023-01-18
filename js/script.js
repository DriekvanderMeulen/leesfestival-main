let data;
let mode = 0;
let buton;
let arrButtons = [];
let worName;
let worDesc;
let availableSeats;
let maxSeats;
let takenSeats;
let book;

function preload() {
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  background(220);

  console.log(data.description); //controleren of de data correct is ingeladen
  for (let i = 0; i < data.workshops.length; i++) {
    let x = i % 6;
    let y = floor(i / 6);
    let w = width / 6;
    let h = height / 4;
    let wor = data.workshops[i];
    arrButtons.push(createButton(wor.name));
    arrButtons[i].position(x * w, y * h);
    arrButtons[i].size(w, h);
    arrButtons[i].style(
      "background-color",
      "rgba(" +
        random(50, 100) +
        "," +
        random(150, 200) +
        "," +
        random(50, 100) +
        ",0.5)"
    );
    //font size
    arrButtons[i].style("font", "20px Arial");
    arrButtons[i].mousePressed(function () {
      mode++;
      console.log(mode);
      // create s static backgrounf
      // worBack = createDiv();
      // worBack.position(0, 0);
      // worBack.size(width, height);
      // worBack.style(
      //   "background-color",
      //   "rgba(" +
      //     random(50, 100) +
      //     "," +
      //     random(150, 200) +
      //     "," +
      //     random(50, 100) +
      //     ",0.5)"
      // );
      //create a rectangle with the workshop name
      worName = createDiv(wor.name);
      worName.position(50, 50);
      worName.size(500, 150);
      worName.style("font", "Roboto");
      worName.style("color", "black");
      worName.style("font-size", "25px");
      worName.style("font-weight", "bold");
      worName.style("text-align", "center");
      worName.style("vertical-align", "middle");
      worName.style("border", "1px solid black");

      worName.style(
        "background-color",
        "rgba(" +
          random(50, 100) +
          "," +
          random(150, 200) +
          "," +
          random(50, 100) +
          ",0.5)"
      );

      //create a rectangle with the workshop description
      worDesc = createDiv(wor.description);
      worDesc.position(50, 200);
      worDesc.size(500, 450);
      worDesc.style("color", "black");
      worDesc.style("font-size", "20px");
      worDesc.style("border", "1px solid black");
      worDesc.style("vertical-align", "middle");
      worDesc.style("text-align", "center");
      worDesc.style(
        "background-color",
        "rgba(" +
          random(50, 100) +
          "," +
          random(150, 200) +
          "," +
          random(50, 100) +
          ",0.5)"
      );

      //find the available seats for the workshop
      maxSeats = wor.maxSeats;
      availableSeats = wor.availableSeats;
      takenSeats = availableSeats / maxSeats;
      takenSeatsNumber = maxSeats - availableSeats;
      book = takenSeats * 300;
    });
  }
}
function draw() {
  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
  }
}

function screen1() {
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  background(220);
  console.log("screen1");
  arrButtons.forEach((button) => {
    button.show();
  });
}

function screen2() {
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  //background with clipboard
  background("white");
  background("rgba(150, 200, 140, 0.5)");
  console.log("screen2");
  arrButtons.forEach((button) => {
    button.hide();
  });

  fill(150, 255, 140);
  rect(50, 650, 500, 50);
  fill(0, 255, 0);
  rect(50, 650, 500 / takenSeatsNumber, 50);
  fill(0);
  text(
    "Beschikbare plekken: " + availableSeats + " van de " + maxSeats,
    50,
    750
  );
  //background book
  fill(0, 255, 0, 80);
  beginShape();
  vertex(650, 50); //X
  vertex(650, 350);
  vertex(800, 450);
  vertex(950, 350);
  vertex(950, 50); //X
  vertex(800, 150); //X
  endShape(CLOSE);
  fill(0, 255, 0, 60);
  beginShape();
  vertex(650, 350 - book); //X
  vertex(650, 350);
  vertex(800, 450);
  vertex(950, 350);
  vertex(950, 350 - book); //X
  vertex(800, 450 - book); //X
  endShape(CLOSE);
}
