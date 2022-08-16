import { Player } from '../Player';
import { Coordinate } from '../Coordinate';
import { Creature } from '../Creature';

class Game {
    constructor() {
        this.mapSizeX = 4;
        this.mapSizeY = 4;
        this.players = [];
    }

    addPlayer(id, name) {

        let startingCoordinate = null;
        do {
            startingCoordinate = new Coordinate(
                Math.floor(Math.random() * this.mapSizeX),
                Math.floor(Math.random() * this.mapSizeY));
        } while (this.coordinateIsUsed(startingCoordinate));

        const creature = new Creature(startingCoordinate)
        const player = new Player(id, name, creature)
        this.players.push(player);
    }

    coordinateIsUsed(coordinate) { // optimize later

        let result = false;

        this.players.forEach((player) => {
            if (player.creature.coordinate.equals(coordinate)) {
                result = true;
                return;
            }
        })

        return result;

    }

    removePlayer(id) {
        // delete this.players[Array.indexOf()] implementar depois
    }


    setTimerToGiveEnergy() { // Cancel this when game ends
        setInterval( () => {
            this.players.forEach( (player) => {
                player.creature.giveEnergy();
            })
        }, 60 * 1000)
    }

    log() {
        for (let i = 0; i < this.players.length; i++) {
            console.log(this.players[i])
        }
    }
}


export {
    Game
}
