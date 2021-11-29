const Employee = require("../lib/Employee")

class Engineer {
    constructor(name, id, email, github) {
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getrole() {
        return "Engineer";
    }
}