const filterFoodPrice = require('./food')

 const min = 12;
 const max = 40;

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

test('Test filterFoodPrice', () =>{
    const min = 12;
    const max = 40;

    const filteredFood = filterFoodPrice (food, min, max);
    expect(filteredFood).toHaveLength(3);
    expect(filteredFood).toContainEqual({ kind: 'pepper', price: 27 });
    expect(filteredFood).toContainEqual(food[1],food[2],food[3]);
    expect(filteredFood[0].price).toBeGreaterThan(min);
    expect(filteredFood[2].price).toBeLessThan(max);
    expect(filteredFood).not.toContainEqual({ kind: 'lemon', price: 50 });
}); 
