const inquirer = require('inquirer');

//Employee Constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Returns name from input
    getName() {
        return this.name;
    }

    //Returns ID from input
    getId() {
        return this.id;
    }

    //Returns email from input
    getEmail() {
        return this.email;
    }

    //Returns role type
    getRole() {
        return "Employee";
    }
};

//Exports Employee Constructor
module.exports = Employee;