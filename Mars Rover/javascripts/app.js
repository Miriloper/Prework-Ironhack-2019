var rover;

var rover = {
  "direction": "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

// ======================
function turnLeft(rover){
  var origin = rover.direction;
  switch(rover.direction) {
    case "N":
        rover.direction = "W";
        break;

    case "W":
        rover.direction = "S";
        break;

    case "S":
        rover.direction = "E";
        break;

    case "E":
        rover.direction = "N";
        break;
  } 
  console.log("Rover turn from " + origin + " to " + rover.direction);
  console.log("turnLeft was called!");
}

function turnRight(rover){
  var origin = rover.direction;
  switch(rover.direction) {
    case "N":
        rover.direction = "E";
        break;

    case "E":
        rover.direction = "S";
        break;

    case "S":
        rover.direction = "W";
        break;

    case "W":
        rover.direction = "N";
        break;
  }
  console.log("Rover turn from " + origin + " to " + rover.direction);
  console.log("turnRight was called!");
}

function moveForward(rover){
    var origin = "[" + rover.x + ", " + rover.y + "]";
    switch(rover.direction) {
      case "N":
        if (rover.y > 0) {rover.y -= 1;}
        break;

      case "S":
        if (rover.y < 10) {rover.y += 1;}
        break;

      case "W":
        if (rover.x > 0 ) {rover.x -= 1;}
        break;

      case "E":
        if (rover.x < 10) {rover.x += 1;}
        break;
    }
    var destiny = "[" + rover.x + ", " + rover.y + "]";
  console.log("Rover moved from " + origin + " to " + destiny);
  console.log("moveForward was called");
  rover.travelLog.push([rover.x, rover.y]);
}

function moveBackwards(rover){
  var origin = "[" + rover.x + ", " + rover.y + "]";
  switch(rover.direction) {
    case "N":
      if (rover.y < 10) {rover.y += 1;}
      break;

    case "S":
      if (rover.y > 0) {rover.y -= 1;}
      break;

    case "W":
      if (rover.x < 10 ) {rover.x += 1;}
      break;

    case "E":
      if (rover.x > 0) {rover.x -= 1;}
      break;
  }
  var destiny = "[" + rover.x + ", " + rover.y + "]";
console.log("Rover moved from " + origin + " to " + destiny);
console.log("moveBackwards was called");
rover.travelLog.push([rover.x, rover.y]);
}

function move(commands){
     
    for (var i = 0; i <= (commands.length - 1); i++) {
        switch (commands[i]) {
          case "f":
            moveForward(rover);
            break;

          case "r":
            turnRight(rover);
            break;

          case "l":
            turnLeft(rover);
            break;
          
          case "b":
            moveBackwards(rover);
            break;
        }
    }
}