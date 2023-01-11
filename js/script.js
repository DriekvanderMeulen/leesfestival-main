let data;
let mode = 0;
let next;
let reset;

let dropdownLocation;

function preload() {
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  createCanvas(400, 400);

  //create a button and change the mode to 1
  next = createButton("Next screen");
  next.hide();
  next.position(100, 100);
  next.mousePressed(() => {
    mode = mode + 1;
  });

  //reset the mode to 0
  reset = createButton("Reset");
  reset.hide();
  reset.position(100, 100);
  reset.mousePressed(() => {
    mode = 0;
  });
}

//dropdown menu of the location names in the JSON file
function dropdownLocation() {
  dropdownLocation = createSelect();
  dropdownLocation.position(100, 100);
  dropdownLocation.hide();
  for (let i = 0; i < data.length; i++) {
    dropdownLocation.option(data[i].location);
  }
  //save the selected location ID in a variable
  let selectedLocation = dropdownLocation.value();
  console.log(selectedLocation);
}

function draw() {
  background(200);
  if (mode == 0) {
    screen1();
  }
  if (mode == 1) {
    screen2();
  }
  if (mode == 2) {
    screen3();
  }
}

function screen1() {
  console.log("screen1");
  reset.hide();
  next.show();
}

function screen2() {
  console.log("screen2");
  next.show();
}

function screen3() {
  console.log("screen3");
  next.hide();
  reset.show();
}
