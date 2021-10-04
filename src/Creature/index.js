class Creature {
    constructor ( startingCoordinate ) {
        this.coordinate = startingCoordinate;
        this.life = 3;
        this.energy = 0;
        this.range = 3;
    }

    move ( toCoordinate ){
        if ( this.coordinate.isAdjacentTo( toCoordinate ) ) {
            this.energy--;
            this.coordinate = toCoordinate;
            return true;
        }
        else {
            return false;
        }
    }

    attack ( enemy ){
        if ( enemy.coordinate.isInRange( this.coordinate, this.range ) && 
            this !== enemy ){
            this.loseEnergy();
            enemy.loseLife();
            return true;
        }
        return false;
    }

    evolve () {
        if ( this.energy > 0 ){
            this.energy--;
            this.range++;
            return true;
        }
        return false;
    }

    giveEnergy( thatCreature ){
        if ( this.coordinate.isInRange( thatCreature.coordinate, this.range) && this.energy > 0 ) {
            this.loseEnergy();
            thatCreature.getEnergy();
            return true;
        }
        return false;
    }

    getEnergy() {
        this.energy++;
    }

    loseEnergy(){
        this.energy--;
    }

    getLife(){
        this.life++;
    }

    loseLife(){
        this.life--;
    }

}

module.exports = {
    Creature
};