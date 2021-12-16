//Requiring Employee Contstructor
const Employee = require("./Employee")

//Manager Constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //Returns office number from input
    getOfficeNumber() {
        return this.officeNumber;
    }

    //Returns role type
    getRole() {
        return "Manager";
    }
}

//Exports Manager Constructor
module.exports = Manager;