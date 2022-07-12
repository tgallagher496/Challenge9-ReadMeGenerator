// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type:"input",
        name: "description",
        message: "What is the project description?"
    },
    {
        type:"input",
        name: "installation",
        message: "How do you install?"
    },
    {
        type: "input",
        name:"usage",
        message:  "What does your program do?"

    },
    {
        type:"list",
        name: "license",
        message: "Choose the following license",
        choices:["MIT","IBM","Apache"]
    },
    {
        type: "input",
        name:"contributing",
        message:  "Are there any people and/or tutorials to give credit to?"

    },
    {
        type: "input",
        name:"tests",
        message:  "Are there any tests for this application?"

    },
    {
        type: "input",
        name:"githubname",
        message:  "What is your github name?"

    },
    {
        type: "input",
        name:"githubprofile",
        message:  "What is the link to your github profile?"

    },
    {
        type: "input",
        name:"email",
        message:  "What is your email address?"

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data =>{
        fs.writeFileSync("./output/README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
