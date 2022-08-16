const DIRECTIONS = {
    0: "E",
    1: "SE",
    2: "S",
    3: "SW",
    4: "W",
    5: "NW",
    6: "N",
    7: "NE"
  }

class Coordinate {
    
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    isValid(){
        return (this.x > 0 && this.y > 0);
    }

    equals( thatCoordinate ){
        if (this.x === thatCoordinate.x && this.y === thatCoordinate.y){
            return true;
        }
        return false;
    }

    directionToCoordinate( direction ){
        let temp = new Coordinate( this.x, this.y )

        if (direction.includes("N")){
            temp.y++;
        }
        if (direction.includes("S")){
            temp.y--;
        }
        if (direction.includes("E")){
            temp.x++;
        }
        if (direction.includes("W")){
            temp.x--;
        }

        return temp;
    }

    isUpSameOrDown(thatCoordinate){
        if (thatCoordinate.y === this.y + 1 || thatCoordinate.y === this.y || thatCoordinate.y === this.y - 1){
            return true;
        }
        return false;
    }

    isLeftMiddleOrRight(thatCoordinate){
        if (thatCoordinate.x === this.x + 1 || thatCoordinate.x === this.x || thatCoordinate.x === this.x - 1){
            return true;
        }
        return false;
    }

    isAdjacentTo( thatCoordinate ){
        if ( (this.isLeftMiddleOrRight(thatCoordinate)) && (this.isUpSameOrDown(thatCoordinate))){
                return true;
            }
        return false;
    }

    isInRange( thatCoordinate, range){
        if (this.x + range >= thatCoordinate.x && this.x - range <= thatCoordinate.x &&
            this.y + range >= thatCoordinate.y && this.y - range <= thatCoordinate.y ) {
                return true;
            }
            return false;
    }

}

export {
    Coordinate,
    DIRECTIONS
}
