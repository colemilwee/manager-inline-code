const Engineer = require("../lib/engineer.js");

describe("engineer", () => {

    test("engineer object test", () => {
        let engineer = new Engineer("testname", "000", "email", "github");

        expect(engineer.name).toEqual("testname");
        expect(engineer.id).toEqual("000");
        expect(engineer.email).toEqual("email");
        expect(engineer.github).toEqual("github")
    });
    test("getrole ", () => {
        let engineer = new Engineer("testname", "000", "email", "github");

        expect(engineer.getRole()).toBe(`<h3 class="card-title">Engineer</h3>`);
    });
    test("getgithub", () => {
        let engineer = new Engineer("testname", "000", "email", "github");

        expect(engineer.getGithub()).toBe(`<div>github: <a href='github:github'>github</a></div>`);
    });
});