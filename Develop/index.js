//TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

//TODO: Create an array of questions for user input
const questions = [
        {
                type: 'input',
                name: 'title',
                message: 'What is the title of your application?',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Title required')
                                return false
                        }
                }
        },
        {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your application: ',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Description required!')
                                return false
                        }
                }
        },
        {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions: ',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Please enter installation instructions!');
                                return false
                        }
                }
        },
        {
                type: 'input',
                name: 'usageInfo',
                message: 'Enter usage information: ',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Please enter usage information!');
                                return false
                        }
                }
        },
        {
                type: 'rawlist',
                name: 'licenses',
                message: 'Select any license your application is covered under? (Check all that apply)',
                choices: ['MIT License', 'Boost Software License 1.0', 'The Unlicense', 'ISC', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0'],
        },
        {
                type: 'input',
                name: 'contributionGuidelines',
                message: 'Enter contribution guidelines',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Please enter contribution guidelines!')
                                return false
                        }
                }
        },
        {
                type: 'input',
                name: 'testInstructions',
                message: 'Enter test instructions for your application: ',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Please enter test instructions!')
                                return false
                        }
                }
        },
        {
                type: 'input',
                name: 'gitHubUsername',
                message: 'Enter your GitHub username: ',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Please enter test instructions!')
                                return false
                        }
                }
        },
        {
                type: 'input',
                name: 'email',
                message: 'Enter your email: ',
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log('Please enter test instructions!')
                                return false
                        }
                }
        }
];

//TODO: Create a function to write a README file
const writeToFile =  fileContent => {
        return new Promise((resolve, reject) => {
                fs.writeFile('../README.md', fileContent, err => {
                        if (err) {
                                reject(err);
                                return;
                        } resolve ({
                                ok: true,
                                message: 'README Created'
                        })
                })
        })
}

//TODO: Create a function to initialize app
const init = () => {
        return inquirer.prompt(questions)
        .then(data => console.log(data))
}

//Function call to initialize app
init()