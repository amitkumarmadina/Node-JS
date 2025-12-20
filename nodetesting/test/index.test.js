const{add} = require('../index');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
});
test('adds 5 + 2 to equal 7', () => {
    expect(add(5,2)).not.toEqual(26)
});

test('toBeNull',()=>{
    expect(add(1, 0)).not.toBeNull();
});

test('toBeGreaterThan',()=>{
    expect(add(3,4)).toBeGreaterThan(5);
}); 

test('toBeLessThan',()=>{
    expect(add(3,4)).toBeLessThan(10);
});

test('toBeLessThanOrEqual',()=>{
    expect(add(3,4)).toBeLessThanOrEqual(7);
});                                                 

test('toMatch',()=>{
    expect(add("hello", "world")).toMatch(/hello/);
});

