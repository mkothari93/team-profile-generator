//Requiring Employee Constructor
const Employee = require("./Employee")

//Intern Constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //Returns school from input
    getSchool() {
        return this.school
    }

    //Returns role type
    getRole() {
        return "Intern";
    }
}

//Exports Intern Constructor
module.exports = Intern;