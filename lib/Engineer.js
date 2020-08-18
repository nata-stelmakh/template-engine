const Employee = require("./Employee.js");

class Engineer extends Employee {

    constructor(name, id, email, GitHubUser) {
        super(name, id, email);
        this.role = 'Engineer'
        this.github = GitHubUser
    }

    //returning the github
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer