const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is project name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is project description?'
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
    })
    /*let theReadMarkDown;// = generateMarkdown()
    writeToFile('README.md', theReadMarkDown)*/

}

// function call to initialize program
init();
