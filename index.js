const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHTML = require("./html/generateHTML")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "list",
        name: "position",
        message: "What is the employee's position?",
        choices: ["Engineer", "Manager", "Intern"]
    },

    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },

    {
        type: "input",
        name: "github",
        message: "What is the employee's github username?"
    }
];

function init() {
    inquirer.prompt(questions)
        .then(function (input) {
            if (input.position === "Engineer") {
                var object = new Engineer(input.name, input.id, input.email, input.github);
                var html = engineerCard(object);
                fs.appendFile('./html/index.html', html, function (err) {
                    if (err) throw err;
                });
            } else if (input.position === "Manager") {
                var object = new Manager(input.name, input.id, input.email, input.github);
                var html = managerCard(object);
                fs.appendFile('./html/index.html', html, function (err) {
                    if (err) throw err;
                });
            } else if (input.position === "Intern") {
                var object = new Intern(input.name, input.id, input.email, input.github);
                var html = internCard(object);
                fs.appendFile('./html/index.html', html, function (err) {
                    if (err) throw err;
                });
            }
            if (input.repeat === 'Yes') {
                init();
            }
            return;

        })

}

function engineerCard(engineerData) {
    var name = engineerData.getName();
    var id = engineerData.getID();
    var email = engineerData.getEmail();
    var github = engineerData.getGithub();

    var html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">`+ name + `</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: `+ id + `</li>
        <li class="list-group-item">Email: `+ email + `</li>
        <li class="list-group-item">GitHub: `+ github + `</li>
      </ul>
    </div>
  </div>`;
    return html;
};

function managerCard(managerData) {
    var name = managerData.getName();
    var id = managerData.getID();
    var email = managerData.getEmail();
    var github = managerData.getGithub();

    var html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">`+ name + `</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: `+ id + `</li>
        <li class="list-group-item">Email: `+ email + `</li>
        <li class="list-group-item">GitHub: `+ github + `</li>
      </ul>
    </div>
  </div>`;
    return html;
};

function internCard(internData) {
    var name = internData.getName();
    var id = internData.getID();
    var email = internData.getEmail();
    var github = internData.getGithub();

    var html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">`+ name + `</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: `+ id + `</li>
        <li class="list-group-item">Email: `+ email + `</li>
        <li class="list-group-item">GitHub: `+ github + `</li>
      </ul>
    </div>
  </div>`;
    return html;
};

function writeToFile() {
    const html = generateHTML();
    writeFileAsync("./html/index.html", html);
};

writeToFile();
init();