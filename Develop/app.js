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

const teamArray = [];

const questionsManager = [
{
    type: "input",
    message: "What is your name:",
    name: "name",
},
{
    type: "input",
    message: "What is your employee ID number:",
    name: "id",
},
{
    type: "input",
    message: "Please enter your email",
    name: "email",
},
{
    type: "input",
    message: "Please enter your Office Number",
    name: "officeNumber"
}
];

const questionsEngineer = [{
    type: "input",
    message: "Please provide a name:",
    name: "name",
},
{
    type: "input",
    message: "What is the employee ID number:",
    name: "id",
},
{
    type: "input",
    message: "Please provide an email adress",
    name: "email",
},
{
    type: "input",
    message: "Please provide a Github Username:",
    name: "github"
}];

const questionsIntern = [{
    type: "input",
    message: "Please provide a name:",
    name: "name",
},
{
    type: "input",
    message: "What is the employee ID number:",
    name: "id",
},
{
    type: "input",
    message: "Please provide an email adress",
    name: "email",
},
{
    type: "input",
    message: "Please provide a School name:",
    name: "schoolName"
}];

 const addToTeam = [
     {
        type: "list",
        name: "choice",
        message: "Add a:",
        choices: ["Manager", "Engineer", "Intern",
                  "Build Team"],
        default: 2 
     }
 ]

 function createManager() {
    inquirer
    .prompt(questionsManager)
    .then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        teamArray.push(manager);
        add();
 })
}

function createEngineer() {
    inquirer
    .prompt(questionsEngineer)
    .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        teamArray.push(engineer);
        add();
 })
}

function createIntern() {
    inquirer
    .prompt(questionsIntern)
    .then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.schoolName
        );
        teamArray.push(intern);
        add();
 })
}

function buildTeam() {
    // fs.writeFileSync('index.html/, team)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}

 function add() {
    console.log("Start building your team");
    inquirer
    .prompt(addToTeam)
    .then((response) => {
        switch (response.choice) {
            case "Manager":
            createManager();
            break;
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          case "Build Team":
            buildTeam();
        }
      });
    }
 add()

 
//   function createTeam() {
//     console.log("Start building your team");

//     function createManager() {
//         inquirer
//           .prompt(questionsManager)
//   };
//   createManager();

//   function numberOfEmpolyees(){
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "How many Engineers are involved in your project:",
//             name: "numberEngineers",
//         },
//         {
//             type: "input",
//             message: "How many Interns are involved in your project:",
//             name: "numberInterns"
//         }
//     ]);
//   }
//   numberOfEmpolyees();
// }

//   createTeam();


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
