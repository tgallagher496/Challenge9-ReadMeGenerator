// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkDown = require(".utils/generateMarkDown.js")
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "title",
        message: "What is your project title?"
        
    },
    {

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
}

// Function call to initialize app
init();
