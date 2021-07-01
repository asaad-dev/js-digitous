// Imports
var prompt = require('prompt');

var grid = [
	["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

console.table(grid);

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};

// Obstacles 
var obstacles = {
  x: [1, 1, 4, 3, 2],
  y: [0, 1, 3, 2, 9]
};

// 2- Functions

// Turn left function
function turnLeft(rover) {
    switch (rover.direction) {
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
    // console.log(`turnLeft was called!. Rover is now facing ${rover.direction}` );
}

turnLeft(rover); 

// Turn right function
function turnRight(rover) {
  switch (rover.direction) {
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
  // console.log(`turnRight was called!. Rover is now facing ${rover.direction}`);
}

turnRight(rover);

// Move forward function
function moveForward(rover) {
  // if (rover.x < 9) {
  //   rover.x = rover.x + 1;
  //   // console.log(rover.x);
  // } else if (rover.x === 9) {
  //   rover.x =rover.x;
  //   console.log(rover.x);
  // }
  //   grid[rover.y][rover.x] = rover.direction;
  //   console.table(grid);

  if (rover === 'N' && rover.y > 0) {
    rover.y += -1;
    if(checkObstacles())rover.y += 1;
  } else if (rover === 'E' && rover.x < 10) {
    rover.x += 1;
    if(checkObstacles())rover.y += -1;
  } else if (rover === 'S' && rover.y < 10) {
    rover.y += 1;
    if(checkObstacles())rover.y += -1;
  } else if (rover === 'W' && rover.x > 0) {
    rover.x -= -1;
    if(checkObstacles())rover.y += 1;
  } else {
    // console.log("You must stay within the 10 X 10 grid!" + rover.x + "," + rover.y);
  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  }

moveForward(rover);

// 5- Pilot rover function
function pilotRover(str) {
  for (i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "l":
        turnLeft(rover);
      break;
      case "r":
        turnRight(rover);
      break;
      case "f":
        moveForward(rover);
      break;
    }
  }
}

prompt.start(); // Start the prompt

function displayRover () {
  prompt.get(['move'], function (err, res) {
  
    console.log(`Position :`, rover);
    pilotRover(res.move);
    displayRover();
  });
}

displayRover();

// // Obstacles function
// function checkObstacles() {
//   for (var j = 0; j < obstacles.length; j++) {
//     if(rover.x === obstacles.x[j] && rover.y === obstacles.y[j]) {
//       console.log("Nope Obstacles");
//       rturn = true;
//     }
//   }
//   return false;
// }