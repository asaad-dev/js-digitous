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

// console.log(grid);

var rover = {
    direction: ["N", "S", "E", "W"],
    x: 0,
    y: 0,
};

// 2- Functions

// Turn left function
function turnLeft(rover) {
    // if (rover.direction === "S" || "E" || "W") {
    //   console.log(`turnRight was called!. Rover is now facing ${rover.direction}`);
    // } else {
    //   console.log("Nope");
    // }

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
    console.log(`turnLeft was called!. Rover is now facing ${rover.direction}` );

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
  console.log(`turnRight was called!. Rover is now facing ${rover.direction}`);
}

turnRight(rover);


// Move forward function
function moveForward() {

    if(rover.direction === "N" && rover.y > 0){
      rover.y += -1;
    } else if(rover.direction === "E" && rover.x < 10){
      rover.x += 1;
    } else if(rover.direction === "S" && rover.y < 10){
      rover.y+=1;
    } else if(rover.direction === "W" && rover.x > 0){
      rover.x += -1;
    } else{
      console.log("Position: " + rover.x + " / " + rover.y);
    } 

  }

moveForward();