const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {

    test('Length of shuffled is same as input', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        expect(shuffleArray(arr).length).toBe(arr.length);
    });

    test("Returns an array", () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk',
          ];
        expect(typeof(shoppingList)).toEqual(typeof(shuffleArray(shoppingList)))
    })
})