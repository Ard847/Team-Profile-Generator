const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");



const prompt = () =>
    inquirer.prompt([{
        type : "input",
        name : "name",
        message : "Insert your name: "
    },
    {
        type : "input",
        name : "email",
        message : "Insert your email: "
    },
    {
        type : "input",
        name : "id",
        message : "Insert your id number: "
    },
    {
        type : "input",
        name : "role",
        message : "Insert your role: "
    },

    {
        type : "input",
        name : "officeNumber",
        message : "If applicable, insert your office number: "
    },
    {
        type : "input",
        name : "github",
        message : "If applicable, insert your Github: "
    },
    {
        type : "input",
        name : "school",
        message : "If applicable, insert your school: "
    }
])

const generateManager = (answers) => {
    return ``
}

const generateEngineer = (answers) => {
    return ``
}

const generateIntern = (answers) => {
    return ``
}


prompt().then((answers) => {
    console.log("answers",answers)
    if(answers.role.toLowerCase() === 'manager'){
        let html = generateManager(answers)
        fs.writeFileSync("manager.html",html)
    }
    else if(answers.role.toLowerCase() === 'engineer'){
        let html = generateEngineer(answers)
        fs.writeFileSync("engineer.html",html)
    }
    else if(answers.role.toLowerCase() === 'intern'){
        let html = generateIntern(answers)
        fs.writeFileSync("intern.html",html)
    }else{
        console.log("Your role is not valid please, insert a valid role.")
    }
}).catch((e) => {console.log(e)})