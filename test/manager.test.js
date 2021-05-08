const Manager = require("../lib/manager.js");


describe("manager", () => {

    test("manager object test", () => {
        let manager = new Manager("testname", "000", "email", "officenumber");

        expect(manager.name).toEqual("testname");
        expect(manager.id).toEqual("000");
        expect(manager.email).toEqual("email");
        expect(manager.officeNumber).toEqual("officenumber")
    });
    test("getrole ", () => {
        let manager = new Manager("testname", "000", "email", "officenumber");

        expect(manager.getRole()).toBe(`<h3 class="card-title">Manager</h3>`);
    });
    test("getoffice", () => {
        let manager = new Manager("testname", "000", "email", "officenumber");

        expect(manager.getOffice()).toBe(`<div>Office number: officenumber</div>`);
    });
});