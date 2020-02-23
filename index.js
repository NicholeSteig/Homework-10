const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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
    .then (function(input) {
        
    })
}