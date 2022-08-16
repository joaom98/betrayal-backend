import { Coordinate } from '../src/Match/Coordinate';

describe('Coordinate tests', () => {
    test('Coordinate contains (2,1) values', () => {
        const coordinate = new Coordinate(2,1);
        expect(coordinate.x).toBe(2);
        expect(coordinate.y).toBe(1);
    })
    
    // set invalid coordinates and get error
    
    test('See if coordinates are adjacent', () => {
        const coordinate1 = new Coordinate(2,1);
        const coordinate2 = new Coordinate(2,2);
        const coordinate3 = new Coordinate(4,5);
    
        expect(coordinate1.isAdjacentTo(coordinate2)).toBe(true);
        expect(coordinate2.isAdjacentTo(coordinate1)).toBe(true);
        expect(coordinate1.isAdjacentTo(coordinate3)).toBe(false);
        expect(coordinate2.isAdjacentTo(coordinate3)).toBe(false);
        expect(coordinate3.isAdjacentTo(coordinate1)).toBe(false);
        expect(coordinate3.isAdjacentTo(coordinate2)).toBe(false);
    })
    
    test('Coordinate is in range', () => {
        const coordinate1 = new Coordinate(2,1);
        const coordinate2 = new Coordinate(2,2);
        const coordinate3 = new Coordinate(4,5);

        expect(coordinate1.isInRange(coordinate2, 1)).toBe(true);
        expect(coordinate1.isInRange(coordinate2, 2)).toBe(true);
        expect(coordinate1.isInRange(coordinate2, 3)).toBe(true);
        expect(coordinate3.isInRange(coordinate1, 4)).toBe(true);
    })

    test('Coordinate is not in range', () => {
        const coordinate1 = new Coordinate(2,1);
        const coordinate3 = new Coordinate(4,5);

        expect(coordinate3.isInRange(coordinate1, 1)).toBe(false);
        expect(coordinate1.isInRange(coordinate3, 3)).toBe(false);
    })
})

describe('Directions', () => {
    test('See directions on the X axis', () => {
        const coordinate = new Coordinate(2,1);
        const coordinateE = new Coordinate(3,1);
        const coordinateW = new Coordinate(1,1);

        expect(coordinate.directionToCoordinate('E')).toEqual(coordinateE);
        expect(coordinate.directionToCoordinate('W')).toEqual(coordinateW);

    })

    test('See directions on the Y axis', () => {
        const coordinate = new Coordinate(2,1);
        const coordinateN = new Coordinate(2,2);
        const coordinateS = new Coordinate(2,0);

        expect(coordinate.directionToCoordinate('N')).toEqual(coordinateN);
        expect(coordinate.directionToCoordinate('S')).toEqual(coordinateS);

    })

    test('See directions on sub cardinals', () => {
        const coordinate = new Coordinate(2,1);
        const coordinateNE = new Coordinate(3,2);
        const coordinateSW = new Coordinate(1,0);
        const coordinateNW = new Coordinate(1,2);
        const coordinateSE = new Coordinate(3,0);

        expect(coordinate.directionToCoordinate('NE')).toEqual(coordinateNE);
        expect(coordinate.directionToCoordinate('SW')).toEqual(coordinateSW);
        expect(coordinate.directionToCoordinate('NW')).toEqual(coordinateNW);
        expect(coordinate.directionToCoordinate('SE')).toEqual(coordinateSE);

    })

})

