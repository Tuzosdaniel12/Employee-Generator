const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Questions = require("./Questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

class Create{

    constructor(){
        this.employees = []
    }

    //add to the employee list
    setEmployeeList(employee){
        this.employees.push(employee)
    }
    //get the list of employees
    getEmployeeList(){
        return this.employees
    }

    async employeeCreation () {
        const questions = new Questions();
        
        //ask user what type of employee they want to create
        const response = await this.promptUser(questions.getTypeOfEmployee());

        //ask questions to user based on employee
        this.createEmployee (response);
     
    }

    promptUser(q){
        
        return inquirer
            .prompt(q)
    }
    //ask three gereal questions and check what type of employee fires a function that takes care of extra attributes based on employee
    async createEmployee (response){
        const {employee} = response
        console.log(`\x1b[32m\n----------------------Creating ${employee}--------------------------\n`)
    
        const questions = new Questions();
        const questionResponse = await this.promptUser(questions.getGeneralQuestions());
        const {name, id,email} = questionResponse 
    
        if (employee == "Manager" ) {
            this.createManager(name, id,email,questions)
    
        }else if (employee =="Engineer"){
            this.createEngineer(name, id,email,questions)
    
        }else{
            this.createIntern(name, id,email,questions)
        }
    }

    //check if user needs to add another employee if true then star again
    checkIfAddingEmployee (response) {

        if (response.answer) {
            this.employeeCreation();
        } else {
            //console.log(listOfEmployees)  
            const html = render(this.getEmployeeList());
            this.writeFile(html)
        }
    }

    //accepts the finish html file and writes the file into team.htlm 
    writeFile(html){
    
        try{
            fs.writeFileSync(path.resolve(outputPath), html);    
            console.log('Success')
        }catch(err){
            console.error(err)
        } 
    }

    //ask the user for inter question and returns Manager object
    async createManager(name, id,email,questions){
        const q = await this.promptUser(questions.getManagerQs())
            
        const {officeNumber} = q
    
        this.setEmployeeList(new Manager(name, id,email, officeNumber));

        this.addEmployee();
   
    }

    //ask the user for inter question and returns Engineer object
    async createEngineer(name, id,email,questions){
        const q = await this.promptUser(questions.getEngineerQs());
                
        const {github} = q

        this.setEmployeeList(new Engineer(name, id,email, github))

        this.addEmployee();
    }

    //ask the user for inter question and returns intern object
    async createIntern(name, id,email,questions){
        const q = await this.promptUser(questions.getInternQs());
    
        const {school} = q

        this.setEmployeeList(new Intern(name, id,email, school))

        this.addEmployee(questions);
    }

    async addEmployee(){
        const questions = new Questions();
        const addEmployeeBoolean = await this.promptUser(questions.getAnotherEmployee());
        console.log(`\x1b[32m\n----------------------------------------------------------------\n`)
        this.checkIfAddingEmployee(addEmployeeBoolean);
    }
}

module.exports = Create