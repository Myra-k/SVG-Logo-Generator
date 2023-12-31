const { Square, Triangle, Circle} = require('./shapes');

describe("circle", () => {
    test (" This should render svg for a blue circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor parameter", () => {
        const expectedSvg ='<circle cx="150" cy="100" r="80" fill="purple" />';
        const circle = new Circle();
        circle.setColor("purple");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    test (" This should render svg for a red polygon element", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red" />';
        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor parameter", () => {
        const expectedSvg ='<rect x="90" y="40" width="120" height="120" fill="green" />';
        const square = new Square();
        square.setColor("green");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});


describe("Triangle", () => {
    test (" This should render svg for a orange polygon element", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="orange" />';
        const triangle = new Triangle();
        triangle.setColor("orange");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor parameter", () => {
        const expectedSvg ='<polygon points="150, 18 244, 182 56, 182" fill="brown" />';
        const triangle = new Triangle();
        triangle.setColor("brown");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});