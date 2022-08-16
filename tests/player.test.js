import { Coordinate }  from '../src/Match/Coordinate';
import { Creature }  from '../src/Match/Creature';
import { Player }  from '../src/Match/Player';

describe('Player tests', () => {
    test('Start a player without a creature', () => {
        const player = new Player("gufosdhg","Joro");
        expect(player.id).toBe("gufosdhg");
        expect(player.name).toBe("Joro");
        expect(player.creature).toBeNull();
    })
    
    test('Start a player with a creature', () => {
        const coordinate = new Coordinate(3,6);
        const creature = new Creature(coordinate);
        const player = new Player("gufosdhg","Joro", creature);
        expect(player.id).toBe("gufosdhg");
        expect(player.name).toBe("Joro");
        expect(player.creature).toEqual(creature);
    })
})