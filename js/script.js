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
  alert(
    "Welkom op de workshopindex van het Leesfestival! Klik op een workshop om de informatie te zien. Klik op de knop 'terug' om terug te gaan naar de workshopindex. herlaad de pagina om deze uitleg opnieuw te zien."
  );

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

      //create a back button
      backButton = createButton("Terug");
      backButton.position(50, 800);
      backButton.size(500, 50);
      backButton.style("font", "20px Arial");
      backButton.style(
        //pink background
        "background-color",
        "rgba(" +
          random(50, 125) +
          "," +
          random(150, 220) +
          "," +
          random(50, 125) +
          ",0.5)"
      );
      backButton.mousePressed(function () {
        mode--;
        worName.remove();
        worDesc.remove();
        backButton.remove();
        worImg.remove();
      });

      //place an image of the workshop
      worImg = createImg("media/cocoon.png");
      worImg.position(1000, 600);
      worImg.size(300, 200);

      //find the available seats for the workshop
      maxSeats = wor.maxSeats;
      availableSeats = wor.availableSeats;
      takenSeats = availableSeats / maxSeats;
      takenSeatsNumber = maxSeats - availableSeats;
      book = takenSeats * 300;
      bar = takenSeats * 500;
      percentage = takenSeats * 100;
      percentage = 100 - percentage;
      percentage = percentage.toFixed(0);
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

  fill("darkgrey");
  rect(50, 650, 500, 50);
  fill(0, 255, 0);
  rect(550 - bar, 650, bar, 50);
  fill(0);
  text(
    "Beschikbare plekken: " + availableSeats + " van de " + maxSeats,
    50,
    750
  );
  //background book
  //border thicc
  strokeWeight(0);
  stroke(0);
  fill(0, 255, 0, 50);
  beginShape();
  vertex(650, 350 - book); //X
  vertex(650, 350);
  vertex(800, 450);
  vertex(950, 350);
  vertex(950, 350 - book); //X
  vertex(800, 450 - book); //X
  endShape(CLOSE);
  strokeWeight(5);
  strokeCap(SQUARE);
  line(800, 450, 800, 150);
  strokeWeight(0);
  fill("black");
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER);
  text("Boek", 800, 100);
  text("het verhaal van deze workshop is", 1200, 100);
  text(percentage + "% geschreven, maak jij het boek af?", 1200, 120);
  //border thicc normal
  strokeWeight(5);
  fill(20, 20, 20, 50);

  beginShape();
  vertex(650, 50); //X
  vertex(650, 350);
  vertex(800, 450);
  vertex(950, 350);
  vertex(950, 50); //X
  vertex(800, 150); //X
  endShape(CLOSE);
}
