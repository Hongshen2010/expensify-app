const add = (a, b) => {
    return a + b;
};
const generateName = (name = 'Anonymous') => `${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
    // if(result !== 7) {
    //     throw new Error(`Added 4 and 3, the result was ${result}. Expect 7`);
    // }
});
test('should return a name', () => {
    const result = generateName('hongshen');
    expect(result).toBe('hongshen');
});
test('should return a name', () => {
    const result = generateName();
    expect(result).toBe('Anonymous');
});