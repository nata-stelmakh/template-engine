const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let employees = [];

function init() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "team",
        message: "Would you like to create a developing team?",
      },
    ])
    .then((response) => {
      if (response.team === false) {
        console.log("No problem!See you nest time!");
      } else {
        employeeRole();
      }
    });
}
function employeeRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is a role of your employee?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
      },
    ])
    .then((response) => {
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
    });
}

function createManager() {
  inquirer
    .prompt([
      {
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
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager office number?",
      },
    ])
    .then((resp) => {
      const manager = new Manager(
        resp.name,
        resp.id,
        resp.email,
        resp.officeNumber
      );
      employees.push(manager);
      employeeRole();
    });
}
function createEngineer() {
  inquirer
    .prompt([
      {
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
      },
      {
        type: "input",
        name: "gitHubUser",
        message: "What is the github username of your engineer?",
      },
    ])
    .then((resp) => {
      const engineer = new Engineer(
        resp.name,
        resp.id,
        resp.email,
        resp.GitHubUser
      );
      employees.push(engineer);
      employeeRole();
    });
}
function createIntern() {
  inquirer
    .prompt([
      {
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
      },
      {
        type: "input",
        name: "school",
        message: "What school attending your Intern?",
      },
    ])
    .then((resp) => {
      const intern = new Intern(resp.name, resp.id, resp.email, resp.school);
      employees.push(intern);
      employeeRole();
    });
}

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
