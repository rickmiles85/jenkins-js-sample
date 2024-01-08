const cube = require('./example')

test("returns correct values", () => {
    expect(cube(3)).toBe(27);
    expect(cube(0)).toBe(0);
    expect(cube(-5)).toBe(-125);
});