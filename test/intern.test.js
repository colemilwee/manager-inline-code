const Intern = require("../lib/intern.js");


describe("intern", () => {

    test("intern object test", () => {
        let intern = new Intern("testname", "000", "email", "testschool");

        expect(intern.name).toEqual("testname");
        expect(intern.id).toEqual("000");
        expect(intern.email).toEqual("email");
        expect(intern.school).toEqual("testschool")
    });
    test("getrole ", () => {
        let intern = new Intern("testname", "000", "email", "testschool");

        expect(intern.getRole()).toBe(`<h3 class="card-title">Intern</h3>`);
    });
    test("getschool", () => {
        let intern = new Intern("testname", "000", "email", "testschool");

        expect(intern.getSchool()).toBe(`<div>School: testschool</div>`);
    });
});