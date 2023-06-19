const { SVG, LogoText } = require('./Svg');
const { Square } = require('./shapes');

test ("This should render a 300 x 200 svg element", () => {

const color = "orange"; 
const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><  <rect x="90" y="40" width="120" height="120" fill="orange" /><<text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">HEY</text></svg>`;

const square = new Square (color);
const logoText = new LogoText ("HEY", color);

const svg = new SVG(square, LogoText);
expect(svg.render()).toEqual(expectedSvg);

});