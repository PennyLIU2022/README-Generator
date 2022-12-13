// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        type: 'list',
        name: 'license',
        message: 'Enter the project license:',
        choices: licenses,
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution details here:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test details here:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username here:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address here:'
    },
]

// Create a function to write README file
function writeToFile(data) {
    // const fileName = 'README.md';

    fs.writeFile('README.md', data, (err) =>
    err? console.log(err): console.log("README.md is created!")
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
