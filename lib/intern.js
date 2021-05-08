const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    


    getSchool(){
        return `<div>School: ${this.school}</div>`
    }


    getRole(){
        return `<h3 class="card-title">Intern</h3>`
    }

}

module.exports = Intern;