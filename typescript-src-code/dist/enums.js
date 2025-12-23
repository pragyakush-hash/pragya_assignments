//enums
// group of named constans
// typescript special feature
// not in javavscript
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function gretUserDirection(direction) {
    if (direction === Direction.UP) {
        console.log("user is going up");
    }
    else if (direction === Direction.DOWN) {
        console.log("user is going down ");
    }
    else if (direction === Direction.LEFT) {
        console.log("user is going left");
    }
    else {
        console.log("user is going is right");
    }
}
export {};
// gretUserDirection(Direction.DOWN);
//console.log(Direction.UP)// 0
