const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")

const questions =[
  {
    type: 'input',
    message: 'What is the title of your Project?',
    name: 'title',
    validate: (value) => {if(value){ return true} else { return 'I need a title to continue'}},
  }, 
  {
    type: 'input',
    message: 'Describe the what, why and how of the project?',
    name: 'description',
    validate: (value) => {if(value){ return true} else { return 'Please enter the description of the project'}},
  }, 
  {
    type: 'input',
    message: 'Describe the process of how a user can install your project',
    name: 'installation',
    validate: (value) => {if(value){ return true} else { return 'Describe the user on how to install your application'}},
  }, 
  {
    type: 'input',
    message: 'Describe how can a user use your application. If none press Enter',
    name: 'usage',
    default: 'N/A',
  }, 
  {
    type: 'input',
    message: 'List the names of the Collaborators who worked on this project, if none press Enter',
    name: 'credits',
    default: 'N/A',
  }, 
  {
    type: 'list',
    message: 'What license did you choose for the project?',
    choices: [ 'The MIT License' , 'The GPL License', 'Apache License', 'GNU License', 'None'],
    name: 'licenses',
    default: 'None',
  }, 
  {
    type: 'input',
    message: 'Please enter your Github username',
    name: 'github',
    validate: (value) => {if(value){ return true} else { return 'Please enter a valid username'}},
  }, 
  {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    validate: (value) => {if(value){ return true} else { return 'Please enter a valid email address'}},
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log ('You have successfully created a README file. You will find it in the "generated-README" folder.')
        }
    });
}

function init() {
    inquirer.prompt(questions).then((response) => {
        const ReadmeContent = generateMarkdown(response)
        writeToFile('./generated-Readme', ReadmeContent)
    });
}

init();
