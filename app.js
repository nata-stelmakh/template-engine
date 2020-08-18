const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let questionsArr = [{
  type: "input",
  name: "name",
  message: "What is the name of your employee?",
},
{
  type: "input",
  name: "id",
  message: "Please enter id of your employee",
},
{
  type: "input",
  name: "email",
  message: "Please enter email of your employee?",
}]

let employees = [];

async function init() {
  const response = await inquirer.prompt([
    {
      type: "confirm",
      name: "team",
      message: "Would you like to create a developing team?",
    },
  ])
  if (response.team === false) {
    console.log("No problem!See you nest time!");
  } else {
    employeeRole();
  }
}

async function employeeRole() {
  const response = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is a role of your employee?",
      choices: ["Manager", "Engineer", "Intern", "Done"],
    },
  ])
  if (response.role === "Done") {
    var html = render(employees);
    fs.writeFileSync(outputPath, html, "utf8");
  } else if (response.role === "Manager") {
    createManager();
  } else if (response.role === "Intern") {
    createIntern();
  } else if (response.role === "Engineer") {
    createEngineer();
  }
}

async function createManager() {
  const managerQuestions = questionsArr
  managerQuestions.push(employeeSpecificQ("officeNumber", "What is your manager office number?"))
  const resp = await inquirer.prompt(managerQuestions)
  const manager = new Manager(
    resp.name,
    resp.id,
    resp.email,
    resp.officeNumber
  );
  employees.push(manager);
  employeeRole();
}

async function createEngineer() {
  const engineerQuestions = questionsArr
  engineerQuestions.push(employeeSpecificQ("gitHubUser", "What is the github username of your engineer?"))
  const resp = await inquirer.prompt(engineerQuestions)
  const engineer = new Engineer(
    resp.name,
    resp.id,
    resp.email,
    resp.GitHubUser
  );
  employees.push(engineer);
  employeeRole();
}

async function createIntern() {
  const internQuestions = questionsArr
  internQuestions.push(employeeSpecificQ("school", "What school attending your Intern?"))
  const resp = await inquirer.prompt(internQuestions)
  const intern = new Intern(resp.name, resp.id, resp.email, resp.school);
  employees.push(intern);
  employeeRole();
}

function employeeSpecificQ(name, message) {
  return { type: "input", name: name, message: message }
}

init();

