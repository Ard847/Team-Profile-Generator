const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const choices = require("inquirer/lib/objects/choices");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/employee");
const team = []


const addTeam = () =>
    inquirer.prompt([{
        type : "input",
        name : "team",
        message : "Insert your team name: "
    },
])
 
const manager = () =>
inquirer.prompt([
    {
        type : "input",
        name : "name",
        message : "Insert  manager's name: "
    },
    {
        type : "input",
        name : "id",
        message : "Insert manager's id: "
    },
    {
        type : "input",
        name : "email",
        message : "Insert manager's email: "
    },
    {
        type : "input",
        name : "officeNumber",
        message : "Insert manager's office number: "
    }
]).then((answers) =>{
    team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
    employee()

}).catch((e) => {console.log(e)})


const employee = () => {
    inquirer.prompt([
        {
            type : "list",
            name : "members",
            message : "Would you like to add more team members? ",
            choices : ["Yes, an engineer", "Yes, an intern", "No, exit"]
        }]).then((answers) =>{
        if(answers.members === "Yes, an engineer"){
            engineer()
        }else if(answers.members ===  "Yes, an intern"){
            intern()
        }else{
            console.log("Your team was created")
            const html = render(team)
            if(!fs.existsSync(OUTPUT_DIR)){
                fs.mkdirSync(OUTPUT_DIR);
            }
            fs.writeFileSync(outputPath,html)
        }
    
    }).catch((e) => {console.log(e)})

}
 

const engineer = () => {
    inquirer.prompt([{
        type : "input",
        name : "name",
        message : "Insert enginer's name: "
    },
    {
        type : "input",
        name : "id",
        message : "Insert engineer's id: "
    },
    {
        type : "input",
        name : "email",
        message : "Insert engineer's email: "
    },
    {
        type : "input",
        name : "Github",
        message : "Insert engineer's Github account: "
    }
]).then((answers) => {
    team.push(new Engineer(answers.name, answers.id, answers.email, answers.Github));
    employee()
}).catch((e) => {
    console.log(e)
})

}

const intern = () => {
    inquirer.prompt([{
        type : "input",
        name : "name",
        message : "Insert intern's name: "
    },
    {
        type : "input",
        name : "id",
        message : "Insert intern's id: "
    },
    {
        type : "input",
        name : "email",
        message : "Insert intern's email: "
    },
    {
        type : "input",
        name : "school",
        message : "Insert intern's school: "
    }
]).then((answers) => {
    team.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    employee()
}).catch((e) => {
    console.log(e)
})

}


addTeam().then((answers) =>{
    manager()
}).catch((e) =>{
    console.log(e)
})
 
