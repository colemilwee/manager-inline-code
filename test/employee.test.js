const Employee = require("../lib/employee");


describe("employee", () => {

    test("employee object test", () => {
        let employee = new Employee("testname", "000", "email");

        expect(employee.name).toEqual("testname");
        expect(employee.id).toEqual("000");
        expect(employee.email).toEqual("email");
    });
    test("getname ", () => {
        let employee = new Employee("testname", "000", "email");

        expect(employee.getName()).toBe(`<h3 card="card-title">testname</h3>`);
    });
    test("getID", () => {
        let employee = new Employee("testname", "000", "email");

        expect(employee.getId()).toBe(`<div>ID: 000</div>`);
    });
    test("getrole ", () => {
        let employee = new Employee("testname", "000", "email");

        expect(employee.getRole()).toBe(`<h3 class="card-title">Employee</h3>`);
    });
    test("getemail ", () => {
        let employee = new Employee("testname", "000", "email");

        expect(employee.getEmail()).toBe(`<div>email: <a href='email:email'>email</a></div>`);
    });

});