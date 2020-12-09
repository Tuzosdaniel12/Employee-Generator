const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Questions = require("./lib/Questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const employeeCreation = async () =>{
    const listOfEmployees = [];
    const response = await typeOfEmployee();
    listOfEmployees.push(createEmployee(response));
    askForAnotherEmployee(listOfEmployees);
}

const typeOfEmployee = () =>{
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                choices: [
                            "Manager",
                            "Engineer",
                            "Intern",
                         ],
                message: "What type of employee are you adding?"
              }
        ])

}

const createEmployee = async (response) =>{
    const {employee} = response

    const questions = new Questions();

    const questionResponse = await askGeneralQuestions(); 

    if (employee == "Manager" ) {
        await questionResponse.push(
            inquirer
            .prompt(questions.getManagerQs())
        )
        //get the values out of question and make object
        const {name, id,email, office} = questionResponse

        return new Manager(name, id,email, office);

    }else if (employee =="Engineer"){
        await questionResponse.push(
            inquirer
            .prompt(questions.getEngineerQs())
        )

        //get the values out of question and make object
        const {name, id,email, github} = questionResponse

        return new Engineer(name, id,email, github)

    }else{
        await questionResponse.push(
            inquirer
            .prompt(questions.getInternQs())
        )

        //get the values out of question and make object
        const {name, id,email, school} = questionResponse

        return new Intern(name, id,email, school)
    }
}

const askForAnotherEmployee = (listOfEmployees) =>{
     inquirer
            .prompt([
            {
                type: "confirm",
                name: "answer",
                message: "Would you like to add another employee?"
            }
        ]). then( response =>{
            if (response.answer) {
                employeeCreation();
              } else {
                console.log(listOfEmployees)  
                render(listOfEmployees);
              }
        })
}

const askGeneralQuestions = () =>{
    const questions = new Questions();
    return inquirer
        .prompt(questions.generalQuestions);
}

employeeCreation();
// and to create objects for each team member (using the correct classes as blueprints!)

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
