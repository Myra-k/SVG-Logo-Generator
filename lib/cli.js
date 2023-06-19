const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Circle, Triangle, Square} = require('./shapes');
const {LogoText, SVG} = require('./Svg');

class CLI {
    constructor() {
     
    }
    run() {

        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text for the logo. (no more than 3 characters):',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color for the text:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for the logo:',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'bgColor',
                message: 'Enter a color for the background of the logo:',
            },
        ])
        .then((responses) => {
            const svg = this.generateSVG(responses);

            const markup = svg.render();

            return writeFile("Logo.svg", markup);

        })
        .then(() => console.log('Generated logo.svg!'))
        .catch((err) =>{
            console.log(err);
            console.log('oh no, something went wrong.');
        });

    }
        
        generateSVG(options) {
            const logoT = new LogoText(options.text, options.textColor);

            switch (options.shape.toLowerCase()) {
                case "circle":
                    const circle =  new Circle(options.shapeColor);
                    return new SVG(circle, logoT);
                case "square":
                    const square = new Square(options.shapeColor);
                    return new SVG(square, logoT);
                    case "triangle":
                        const triangle = new Triangle(options.shapeColor);
                        return new SVG(triangle, logoT);
            }
        }

    }

    module.exports = CLI;











