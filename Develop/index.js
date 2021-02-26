// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter the table of contents for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license is your project using?',
        choices: [
            {
                name: 'MIT',
                value: '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)',
            },
            {
                name: 'GPLV3',
                value: '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)',
            },
            {
                name: 'APACHE',
                value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            },
            {
                name: 'IBM',
                value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
            },
            {
                name: 'ISC',
                value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            },
            {
                name: 'NONE',
                value: 'NONE',
            },
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain the test instrustions.',
    },
    {
        type: 'input',
        name: 'question 1',
        message: 'Whats your github username?',
    },
    {
        type: 'input',
        name: 'question 2',
        message: 'Whats your email??',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("generating your readME");
            writeToFile('README.md', generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
