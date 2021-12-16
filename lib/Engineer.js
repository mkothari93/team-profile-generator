//Requiring Employee Constructor
const Employee = require("./Employee")

//Engineer Constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //Returns GitHub username from input
    getGithub() {
        return this.github
    }

    //Returns role type
    getRole() {
        return "Engineer";
    }
}

//Exports Engineer Constructor
module.exports = Engineer;