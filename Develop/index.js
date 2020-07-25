const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is project title?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is project description?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How to install this project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the project usage?'
      },
      {
        type: 'list',
        message: 'Choose which licenses you need for this project?',
        name: 'license',
        choices: ['Apache', 'Mozilla', 'Chrome']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What is you contribution on this project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What is your testing on this project?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github address?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('File Saved');
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
    console.log(data);
    let theReadMarkDown = generateMarkdown(data);
    writeToFile('README.md', theReadMarkDown);
  });
}

// function call to initialize program
init();
