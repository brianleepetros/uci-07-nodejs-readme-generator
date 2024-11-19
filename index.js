// TODO: Include packages needed for this application
// PACKAGE IMPORTS
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
// QUESTIONS ARRAY for INQUIRER USER INPUT
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
];

// TODO: Create a function to write README file
// FUNCTION TO WRITE README FILE
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
// FUNCTION TO INITIALIZE APP
function initApp() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README-generated.md", generateMarkdown({ ...inquirerResponses }));
    });
}

// FUNCTION CALL to INITIALIZE APP
initApp();
