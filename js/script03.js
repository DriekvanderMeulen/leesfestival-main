let data;
let mode = 0;
let locID = 0;
let buton;
let arrButtons = [];
let arrButtons2 = [];

function preload() {
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  console.log(data.description); //controleren of de data correct is ingeladen
  background(220);
  createCanvas(innerWidth, innerHeight); //canvas grootte aanpassen aan scherm

  for (let i = 0; i < data.locations.length; i++) {
    let x = i % 6;
    let y = floor(i / 6);
    let w = width / 6;
    let h = height / 3;
    let loc = data.locations[i];
    let wor = data.workshops[i];

    arrButtons.push(createButton(loc.name));
    arrButtons[i].position(x * w, y * h);
    arrButtons[i].size(w, h);

    arrButtons[i].mousePressed(function () {
      locID = loc.ID;
      mode++;
      console.log(mode);
      console.log(locID);
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
  console.log("screen1");
  arrButtons.forEach((button) => {
    button.show();
  });
  arrButtons2.forEach((button) => {
    button.hide();
  });
}

function screen2() {
  console.log("screen2");
  arrButtons.forEach((button) => {
    button.hide();
  });
  arrButtons2.forEach((button) => {
    button.show();
  });
}

function screen3() {
  console.log("screen3");
}
