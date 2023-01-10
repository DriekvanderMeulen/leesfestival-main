let mode = 0;
let data;
let locationName;
let locationID;
let selectedLocationID;
let selectedWorkshopID;

function preload() {
  data = loadJSON(
    "https://raw.githubusercontent.com/mia-mmt2-2223/leesfestival/main/festival.json"
  );
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  //create a select element and add all the locations to it
  let select = createSelect();
  select.position(10, 10);
  select.hide();
  select.option("Select a location");
  for (let i = 0; i < data.locations.length; i++) {
    select.option(data.locations[i].name);
  }

  //when a location is selected, save the locationID
  select.changed(function () {
    locationName = select.value();
    for (let i = 0; i < data.locations.length; i++) {
      if (data.locations[i].name == locationName) {
        selectedLocationID = data.locations[i].ID;
      }
    }
  });

  //create a button to show the next selection screen
  let button = createButton("Next");
  button.position(10, 40);
  button.hide();
  button.mousePressed(function () {
    //check if a location is selected
    if (selectedLocationID) {
      //show the next selection screen
      showNextScreen();
    }
  });
  //create a select element and add all the workshops to it (only the ones that are in the selected location)
  let select2 = createSelect();
  select2.position(10, 10);
  select2.hide();
  select2.option("Select a workshop");
  for (let i = 0; i < data.workshops.length; i++) {
    if (data.workshops[i].location == selectedLocationID) {
      select2.option(data.workshops[i].name);
    }
  }
  //when a workshop is selected, save the workshopID
  select2.changed(function () {
    workshopName = select2.value();
    for (let i = 0; i < data.workshops.length; i++) {
      if (data.workshops[i].name == workshopName) {
        selectedWorkshopID = data.workshops[i].ID;
      }
    }
  });

  //create a button to show the next selection screen
  let button2 = createButton("Next");
  button2.position(10, 40);
  button2.hide();
  button2.mousePressed(function () {
    //check if a workshop is selected
    if (selectedWorkshopID) {
      //show the next selection screen
      showNextScreen();
    } else {
      alert("Please select a workshop");
    }
  });
}

function draw() {
  background(255);

  //show the correct screen
  if (mode == 0) {
    screen1();
    button.show();
    select.show();
  } else if (mode == 1) {
    screen2();
  } else if (mode == 2) {
    screen3();
  }
}

function screen1() {
  //show the select and button
  select.show();
  button.show();
}

function screen2() {}

function screen3() {}
