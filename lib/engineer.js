const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return `<div>github: <a href='github:${this.github}'>${this.github}</a></div>`;
    }


    getRole() {
        return `<h3 class="card-title">Engineer</h3>`;
    }

}

module.exports = Engineer;