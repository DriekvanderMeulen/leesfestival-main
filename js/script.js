let data;
let locID;
let select;
let select2;

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
        locID = data.locations[i].id;
      }
    }
  });

  //WORKSHOP SELECTION
  //create select element with as options name from workshops where location matches locID from json
  select2 = createSelect();
  select2.position(10, 50);
  select2.option("Select a workshop");
  for (let i = 0; i < data.workshops.length; i++) {
    if (data.workshops[i].location == locID) {
      select2.option(data.workshops[i].name);
    }
  }
}
function draw() {
  background(220);
}
