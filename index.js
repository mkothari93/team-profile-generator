const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

const managerInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the manager's ID number?",
        validate: idInput => {
            if (idInput){
                return true;
            } else {
                console.log("Please enter the manager's ID number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter the manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office phone number?",
        validate: officeNumberInput => {
            if (officeNumberInput){
                return true;
            } else {
                console.log("Please enter the manager's office phone number!");
                return false;
            }
        }
    }
];

function managerInput() {
    inquirer.prompt(managerInfo).then(())
};

const employeeInfo = [
    {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's role.",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the employee?",
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("Please enter the employee's name!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: idInput => {
            if (idInput){
                return true;
            } else {
                console.log("Please enter the employee's ID number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter the employee's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
        when: (input) => input.role === "Engineer",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter the engineer's github username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        when: (input) => input.role === "Intern",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: "Would you like to add more team members?",
        default: false
    },
];

function employeeInput() {
    inquirer.prompt(employeeInfo).then(())
};