let data;
let mode = 0;
let next;
let reset;
let location;

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
