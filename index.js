const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//empty array for team
const team = [];

const managerInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
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
            if (idInput) {
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
            if (emailInput) {
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
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter the manager's office phone number!");
                return false;
            }
        }
    }
];

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
            if (nameInput) {
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
            if (idInput) {
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
            if (emailInput) {
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
            if (emailInput) {
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
            if (emailInput) {
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
    inquirer.prompt(employeeInfo).then(employeeData => {
        if (employeeData.role === "Engineer") {
            const employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
            team.push(employee);
        } else if (employeeData.role === "Intern") {
            const employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
            team.push(employee);
        }
        if (employeeData.confirmAddEmployee) {
            return employeeInput(team)
        } else {
            console.log(team);
            return team; 
        }
    })
};

function init() {
    inquirer.prompt(managerInfo)
    .then((managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        team.push(manager);
        console.log(team);
    }))
    .then(employeeInput)
};



// call the managerInput function here (and get rid of the call earlier)
// call the employeeinput at the end of manager function 
// seperate create engineer and intern function, call this at the end of that as well 

init();

// const employeeInfo = [
//     {
//         type: 'list',
//         name: 'role',
//         message: "Please choose your employee's role.",
//         choices: ['Engineer', 'Intern']
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: "What is the name of the employee?",
//         validate: nameInput => {
//             if (nameInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the employee's name!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'number',
//         name: 'id',
//         message: "What is the employee's ID number?",
//         validate: idInput => {
//             if (idInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the employee's ID number!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: "What is the employee's email address?",
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the employee's email address!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: "What is the engineer's github username?",
//         when: (input) => input.role === "Engineer",
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the engineer's github username!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'school',
//         message: "What is the intern's school?",
//         when: (input) => input.role === "Intern",
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the intern's school!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'confirm',
//         name: 'confirmAddEmployee',
//         message: "Would you like to add more team members?",
//         default: false
//     },
// ];

// function employeeInput() {
//     inquirer.prompt(employeeInfo).then(employeeData => {
//         if (employeeData.role === "Engineer") {
//             const employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
//             team.push(employee);
//         } else if (employeeData.role === "Intern") {
//             const employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
//             team.push(employee);
//         }
//         if (employeeData.confirmAddEmployee) {
//             return employeeInput(team)
//         } else {
//             console.log(team);
//             return team; 
//         }
//     })
// };

// employeeInput();