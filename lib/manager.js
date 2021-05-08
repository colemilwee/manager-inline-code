const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }


    getOffice(){
        return `<div>Office number: ${this.officeNumber}</div>`
    }



    getRole(){
        return `<h3 class="card-title">Manager</h3>`
    }


}

module.exports = Manager;