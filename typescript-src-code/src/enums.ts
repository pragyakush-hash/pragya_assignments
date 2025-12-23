//enums
// group of named constans

// typescript special feature
// not in javavscript

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

function gretUserDirection(direction: Direction): void {
  if (direction === Direction.UP) {
    console.log("user is going up");
  } else if (direction === Direction.DOWN) {
    console.log("user is going down ");
  } else if (direction === Direction.LEFT) {
    console.log("user is going left");
  } else {
    console.log("user is going is right");
  }
}

// gretUserDirection(Direction.DOWN);
//console.log(Direction.UP)// 0
