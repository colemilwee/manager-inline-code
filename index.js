const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/engineer.js");
const template = require("./src/template.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");

const employees = {
    intern: [],
    manager: [],
    engineer: [],
};

const survey = [
    {
        message: "Provide staff name",
        type: "input",
        name: "name",
    },
    {
        message: "Provide staff ID: ",
        type: "input",
        name: "id",
    },
    {
        message: "Provide your email address:",
        type: "input",
        name: "email",       
    }
]

let employeeSurvey = [
    {
        choices: ["Intern","Engineer","Manager","Fin"],
        type: "list",
        name: "response",
        message: "Add a Intern, Engineer, or select done",
    }
]

let managerSurvey = [
    {
        message: "Provide manager office number:",
        type: "input",
        name: "OfficeNumber",
    }
]

let engineerSurvey = [
    {
        message: "Provide Github username:",
        type: "input",
        name: "Github",
    }
]

let internSurvey = [
    {
      message: "Provide school attended:",
      type: "input",
      name: "school"
    }
]

const inquiry = async (survey) => {
    let surveyConfirm = await inquirer.prompt(survey);
    let employees = {surveyConfirm};
    if (response) {
        return employees
    } else {
        try {
        console.clear()
        return inquiry(survey)
    } catch {
        console.log("err")
    }
}
}

 
const generateEmployee = async () => {
    
    while(1 == 1) {
    response = await inquirer.prompt(employeeSurvey);
    console.log(response)
    if(response.response == "Engineer") {
        console.log("Provide engineer data:")
        let dataFromSurvey = await inquirer.prompt(survey)
        console.log(dataFromSurvey.name)
        let dataFromEngineerSurvey = await inquirer.prompt(engineerSurvey)
        let engineer = new Engineer(dataFromSurvey.name, dataFromSurvey.id, dataFromSurvey.email, dataFromEngineerSurvey.Github)
        employees.engineer.push(engineer)
    } else if (response.response == "Intern"){
        console.log("Provide intern data:")
        let dataFromSurvey = await inquirer.prompt(survey)
        let dataFromInternSurvey = await inquirer.prompt(internSurvey)
        let intern = new Intern(dataFromSurvey.name, dataFromSurvey.id, dataFromSurvey.email, dataFromInternSurvey.school)
        employees.intern.push(intern)
    } else if (response.response == "Manager"){
        console.log("Provide intern data:")
        let dataFromSurvey = await inquirer.prompt(survey)
        let dataFromManagerSurvey = await inquirer.prompt(managerSurvey)
        let manager = new Manager(dataFromSurvey.name, dataFromSurvey.id, dataFromSurvey.email, dataFromManagerSurvey.OfficeNumber)
        employees.manager.push(manager)
    }
    else {
        console.log("done")
        break
    }
    }
}


async function generatePage() {
    console.log(
        "This is a command line project used to takes in information about employees on a software engineering team that will generates an HTML webpage"
    )
    console.log("Procced by providing the Manager Information")
    await  generateEmployee() 
    fs.writeFile(
        "./dist/index.html", template(employees), (err) => {
            console.log(err)
        }
    ) 

}

generatePage()


