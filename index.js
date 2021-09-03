// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

// An array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter full name: ',
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter Unique Project Title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter brief description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation requirements for your application: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the intended usage information for your application: ',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter the contribution guidelines for your application: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions for your application: ',
  },

  
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation requirements for your application: ',
  },
  {
    type: 'list',
    message: 'What license are you publishing under?',
    name: 'licenseSelection',
    choices: ['MIT','Apache','GPL'],
  },
  {
    type: 'input',
    name: 'year',
    message: 'Enter the current year: ',
  },
  {
    type: 'input',
    name: 'githubName',
    message: 'Enter your GitHub username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email for further questions: ',
  },
];

init();

// Function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data);
    const filename = `README.md`;
    writeToFile(filename,data)
    
  })
  .catch((err) => console.error(err));
}

//Function to write README file
function writeToFile(fileName, response) {
  fs.writeFile(fileName, generateMarkdown(response), (err) =>
  err ? console.log(err) : console.log('Success!')
);
}