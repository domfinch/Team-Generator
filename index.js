const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

function start() {
    inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: "What is the name of your manager?"
    }, 
    {
        type: 'input',
        name: 'employeeId',
        message: "What is your employee's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'what is your office number?'
    }
    
])
.then((questions) => {
    menu()

}) 

}

function menu() {
    inquirer
    .prompt({
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['Engineer', 'Intern', 'Done']
    })
    .then((option) => {
        

    })

}

function engineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'engineerName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is your ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'EngineerGithub',
        message: 'What is your Github username?'
    }

])
}

function intern() {
    inquirer.prompt([{
        type: 'input',
        name: 'internName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is your ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the school you go to?'
    }
])
}
//function to ask engineer, ask intern, generate html
//condtional
//how to add to the end of an empty array

start()