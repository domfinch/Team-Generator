const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const html = require("./src/generatehtml");
const global = [];

const fs = require("fs");
const inquirer = require("inquirer");

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of your manager?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what is your office number?",
      },
    ])
    .then((questions) => {
      console.log(questions);
      const manager = new Manager(
        questions.managerName,
        questions.employeeId,
        questions.email,
        questions.officeNumber
      );
      global.push(manager);
      menu();
    });
}

function menu() {
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: ["Engineer", "Intern", "Done"],
    })
    .then((option) => {
      if (option.menu === "Engineer") {
        engineer();
      } else if (option.menu === "Intern") {
        intern();
      } else {
      }
    });
}

function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "EngineerGithub",
        message: "What is your Github username?",
      },
    ])
    .then((questions) => {
      console.log(questions);
      const manager = new Manager(
        questions.managerName,
        questions.employeeId,
        questions.email,
        questions.officeNumber
      );
      global.push(manager);
      menu();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of the school you go to?",
      },
    ])
    .then((questions) => {
      console.log(questions);
      const manager = new Manager(
        questions.managerName,
        questions.employeeId,
        questions.email,
        questions.officeNumber
      );
      global.push(manager);
      menu();
    });
}

//generate html
function writeFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", html(global), (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

start();
