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

const listOfEmployees = [];

// Write code to use inquirer to gather information about the development team members,
const employeeCreation = async () =>{
    const questions = new Questions();
    
    //ask user what type of employee they want to create
    const response = await promptUser(questions.getTypeOfEmployee());

    //ask questions to user based on employee
    const employee = await createEmployee(response)

    listOfEmployees.push(employee);

    const addEmployee = await promptUser(questions.getAnotherEmployee());
    askForAnotherEmployee(listOfEmployees,addEmployee);
}

//send in the question and return the response
const promptUser = (q) =>{
    return inquirer
        .prompt(q)
}

const createEmployee = async (response) =>{
    const {employee} = response

    const questions = new Questions();

    const questionResponse = await promptUser(questions.getGeneralQuestions());
    const {name, id,email} = questionResponse 

    if (employee == "Manager" ) {
        const q = await promptUser(questions.getManagerQs())
        
        const {officeNumber} = q

        return new Manager(name, id,email, officeNumber);

    }else if (employee =="Engineer"){
        const q = await promptUser(questions.getEngineerQs());
            
        const {github} = q

        return new Engineer(name, id,email, github)

    }else{
        const q = await promptUser(questions.getInternQs());

        const {school} = q

        return new Intern(name, id,email, school)
    }
}

//check if user needs to add another employee if true then star again
const askForAnotherEmployee = (listOfEmployees, addEmployee) =>{

    if (addEmployee.answer) {
        employeeCreation();
    } else {
        console.log(listOfEmployees)  
        render(listOfEmployees);
    }
}



employeeCreation();
