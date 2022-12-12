// Include packages needed for this application
const { fstat } = require('fs');
const inquirer = require('requirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None', 'Apache', 'AGPL', 'MIT','BSD'];

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about this project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give some information on how to use this project:'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If this project has a lot of features, list them here:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution details here:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions here:'
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = "./result/readme.md";

    fs.writeFile(fileName, data, (err) =>
    err? console.log(err): console.log(fileName +" is created!")
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
