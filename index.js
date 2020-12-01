const inquirer = require('inquirer');
const fs = require('fs');

let questions = 
[{
    type: 'input',
    name: 'title',
    message: "What is your project title?",
},
{
    type: 'input',
    name: 'description',
    message: "What is your project description?",
},
{
    type: 'input',
    name: 'installation',
    message: "Installation instructions?",
},
{
    type: 'input',
    name: 'usageInfo',
    message: "Usage information?",
},
{
    type: 'input',
    name: 'contribution',
    message: "Contribution guidelines?",
},
{
    type: 'input',
    name: 'testInstructions',
    message: "Test instructions?",
},
{
    type: 'list',
    name: 'license',
    message: "Select license:",
    choices:
    [
        'MIT',
        'Apache 2.0',
        'The Unlicense',
        'GNU AGPLv3',
        'GNU GPLv3',
        'GNU LGPLv3'
    ]
},
{
    type: 'input',
    name: 'githubUser',
    message: "Github username?",
},
{
    type: 'input',
    name: 'email',
    message: "Email address?",
}]

let getResponse = async (questions) =>
{
    let result = await inquirer.prompt(questions);
    createREADME(result);
}

let createREADME = (response) =>
{
    const {title, description, installation, usageInfo, contribution, testInstructions, license, githubUser, email} = response;

    let readmeString = 
`# ${title}

## Description
${description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
<a name="installation"></a>
${installation}

## Usage
<a name="usage"></a>
${usageInfo}

## License
<a name="license"></a>
${license}

## Contributing
<a name="contributing"></a>
${contribution}

## Tests
<a name="tests"></a>
${testInstructions}

## Questions
<a name="questions"></a>
You can find my Github user profile [here.](https://github.com/${githubUser})
I can be reached by email at ${email}`;

    fs.writeFile("README.md", readmeString, (err) =>
    {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            console.log("File Saved!");
        }
    });
}

getResponse(questions);

