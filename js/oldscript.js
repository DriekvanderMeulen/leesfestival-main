let data;
let locID;
let select;
let select2;
let item;
let availableSeats;
let button;

function preload() {
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  createCanvas(400, 400);
  //LOCATION  SELECTION
  //create select element with as options name from locations from json
  select = createSelect();
  select.position(10, 10);
  select.option("Select a location");
  for (let i = 0; i < data.locations.length; i++) {
    select.option(data.locations[i].name);
  }

  //when a location is selected, save the location id
  select.changed(function () {
    item = select.value();
    for (let i = 0; i < data.locations.length; i++) {
      if (data.locations[i].name == item) {
        locID = data.locations[i].ID;
      }
    }

    select2 = createSelect();
    select2.position(10, 50);
    select2.option("Select a workshop");
    //  Broken IF Statement
    for (let i = 0; i < data.workshops.length; i++) {
      if (data.workshops[i].location == locID) {
        select2.option(data.workshops[i].name);
      }
    }

    select2.changed(function () {
      // save the available seats of the selected workshop in a variable
      item = select2.value();
      for (let i = 0; i < data.workshops.length; i++) {
        if (data.workshops[i].name == item) {
          availableSeats = data.workshops[i].availableSeats;
          maxSeats = data.workshops[i].maxSeats;
        }
      }
    });
  });
}

function draw() {
  background(220);
}
