const { Game } = require('../src/Game')
describe('Game tests', () => {
    test('Game starts', () => {
        const game = new Game();
        
        const nomes = [ "Joao", "Jose", "Maria", "Estonia", "Lisberto", "Rafael", "Leandro", "Victoria", "Messias", "Bruno"]
    
        for ( let i = 0 ; i < 10 ; i++ ){
            game.addPlayer(i, nomes[i]);
        }
    
        expect(game.mapSizeX).toBeGreaterThan(0);
        expect(game.mapSizeY).toBeGreaterThan(0);
    
    })
})