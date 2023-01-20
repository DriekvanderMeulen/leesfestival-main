let data; //variabele voor de data
let mode = 0; //mode voor de verschillende schermen
let arrButtons = []; //array voor de knoppen
let worName; //variabele voor de naam van de workshop
let worDesc; //variabele voor de beschrijving van de workshop
let availableSeats; //variabele voor de beschikbare stoelen
let maxSeats; //variabele voor de maximale stoelen
let takenSeats; //variabele voor de bezette stoelen
let book; //variabele voor de boek illustratie

function preload() {
  //data inladen
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  //setup functie
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  background(220); //achtergrondkleur

  console.log(data.description); //controleren of de data correct is ingeladen
  for (let i = 0; i < data.workshops.length; i++) {
    //for loop om alle workshops te laten zien
    let x = i % 6; //6 kolommen
    let y = floor(i / 6); //4 rijen
    let w = width / 6; //breedte van de knop
    let h = height / 4; //hoogte van de knop

    let wor = data.workshops[i]; //workshop variabele
    arrButtons.push(createButton(wor.name)); //knop aanmaken met de naam van de workshop
    arrButtons[i].position(x * w, y * h); //positie van de knop
    arrButtons[i].size(w, h); //grootte van de knop
    arrButtons[i].style(
      //achtergrondkleur van de knop
      //random tint van pastelgroen
      "background-color",
      "rgba(" +
        random(50, 100) +
        "," +
        random(150, 200) +
        "," +
        random(50, 100) +
        ",0.5)"
    );
    //styling van de tekst in de knop
    arrButtons[i].style("font", "20px Arial");
    arrButtons[i].mousePressed(function () {
      //als de knop wordt aangeklikt
      mode++; //mode veranderen
      console.log(mode); //controleren of de mode veranderd is
      //maak een div aan met de naam van de workshop
      worName = createDiv(wor.name);
      worName.position(50, 50); //positie van de div
      worName.size(500, 150); //grootte van de div
      worName.style("font", "Roboto"); //font
      worName.style("color", "black"); //kleur van de tekst
      worName.style("font-size", "25px"); //grootte van de tekst
      worName.style("font-weight", "bold"); //dikgedrukte tekst
      worName.style("text-align", "center"); //tekst centreren
      worName.style("vertical-align", "middle"); //tekst centreren
      worName.style("border", "1px solid black"); //rand van de div
      worName.style(
        //achtergrondkleur van de div
        //random tint van pastelgroen
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
      worDesc = createDiv(wor.description); //div aanmaken met de beschrijving van de workshop
      worDesc.position(50, 200); //positie van de div
      worDesc.size(500, 450); //grootte van de div
      worDesc.style("color", "black"); //kleur van de tekst
      worDesc.style("font-size", "20px"); //grootte van de tekst
      worDesc.style("border", "1px solid black"); //rand van de div
      worDesc.style("vertical-align", "middle"); //tekst centreren
      worDesc.style("text-align", "center"); //tekst centreren
      worDesc.style(
        //achtergrondkleur van de div
        //random tint van pastelgroen
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
      backButton = createButton("Terug"); //knop aanmaken met de tekst "Terug"
      backButton.position(50, 800); //positie van de knop
      backButton.size(500, 50); //grootte van de knop
      backButton.style("font", "20px Arial"); //font
      backButton.style(
        //achtergrondkleur van de knop
        //random tint van pastelgroen
        "background-color",
        "rgba(" +
          random(50, 125) +
          "," +
          random(150, 220) +
          "," +
          random(50, 125) +
          ",0.5)"
      );
      //als de knop wordt aangeklikt
      backButton.mousePressed(function () {
        mode--; //mode veranderen
        console.log(mode); //controleren of de mode veranderd is
        worName.remove(); //div verwijderen
        worDesc.remove(); //div verwijderen
        backButton.remove(); //knop verwijderen
        worImg.remove(); //image verwijderen
      });

      //foto van het logo van het festival
      worImg = createImg("media/cocoon.png"); //image aanmaken
      worImg.position(1000, 600); //positie van de image
      worImg.size(300, 200); //grootte van de image

      //berkeningen voor de illustratie
      maxSeats = wor.maxSeats; //maximale aantal plaatsen
      availableSeats = wor.availableSeats; //aantal beschikbare plaatsen
      takenSeats = availableSeats / maxSeats; //percentage bezette plaatsen
      takenSeatsNumber = maxSeats - availableSeats; //aantal bezette plaatsen
      book = takenSeats * 300; //variable voor het boek
      bar = takenSeats * 500; //variable voor de bar
      percentage = takenSeats * 100; //percentage bezette plaatsen berkenen
      percentage = 100 - percentage; //percentage bezette plaatsen omkeren
      percentage = percentage.toFixed(0); //afronden naar geheel getal
    });
  }
}
//functie voor het tekenen van de canvas
function draw() {
  if (mode == 0) {
    //als de mode 0 is
    screen1(); //teken de eerste scherm
  } else if (mode == 1) {
    //als de mode 1 is
    screen2(); //teken de tweede scherm
  }
}
//functie voor het eerste scherm
function screen1() {
  //scherm 1
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  background(220); //achtergrondkleur
  console.log("screen1"); //laat in de console zien dat het scherm 1 is
  arrButtons.forEach((button) => {
    //voor elke knop in de array
    button.show(); //laat de knop zien
  });
}

//functie voor het tweede scherm
function screen2() {
  //scherm 2
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm
  background("white"); //achtergrondkleur
  background("rgba(150, 200, 140, 0.5)"); //achtergrondkleur
  console.log("screen2"); //laat in de console zien dat het scherm 2 is
  arrButtons.forEach((button) => {
    //voor elke knop in de array
    button.hide(); //verberg de knop
  });

  fill("darkgrey"); //kleur van de bar
  rect(50, 650, 500, 50); //bar
  rect(550 - bar, 650, bar, 50); //bar
  fill(0); //kleur van de tekst
  text(
    //tekst
    "Beschikbare plekken: " + availableSeats + " van de " + maxSeats, //tekst
    50, //positie X
    750 //positie Y
  );
  //boek illustratie
  strokeWeight(0); //rand dikte
  stroke(0); //rand kleur
  fill(0, 255, 0, 50); //kleur van het boek

  beginShape(); //begin vorm
  vertex(650, 350 - book); //punt 1
  vertex(650, 350); //punt 2
  vertex(800, 450); //punt 3
  vertex(950, 350); //punt 4
  vertex(950, 350 - book); //punt 5
  vertex(800, 450 - book); //punt 6
  endShape(CLOSE); //einde vorm

  strokeWeight(5); //rand dikte
  strokeCap(SQUARE); //rand vorm

  line(800, 450, 800, 150); //lijn

  strokeWeight(0); //rand dikte
  fill("black"); //kleur van de vorm
  textStyle(BOLD); //tekst stijl
  textSize(20); //tekst grootte
  textAlign(CENTER); //tekst align
  text("Boek", 800, 100); //tekst
  text("het verhaal van deze workshop is", 1200, 100); //tekst
  text(percentage + "% geschreven, maak jij het boek af?", 1200, 120); //tekst

  strokeWeight(5); //rand dikte
  fill(20, 20, 20, 50); //kleur van de vorm

  beginShape(); //begin vorm
  vertex(650, 50); //punt 1
  vertex(650, 350); //punt 2
  vertex(800, 450); //punt 3
  vertex(950, 350); //punt 4
  vertex(950, 50); //punt 4
  vertex(800, 150); //punt 5
  endShape(CLOSE); //einde vorm
}
