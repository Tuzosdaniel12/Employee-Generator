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

    setEmployeeList(employee){
        this.employees.push(employee)
    }

    getEmployeeList(){
        return this.employees
    }

    async employeeCreation () {
        const questions = new Questions();
        
        //ask user what type of employee they want to create
        const response = await this.promptUser(questions.getTypeOfEmployee());
    
        //ask questions to user based on employee
        const employee = await this.createEmployee(response)
    
        this.setEmployeeList(employee)
    
        const addEmployeeBoolean = await this.promptUser(questions.getAnotherEmployee());
        this.checkIfAddingEmployee(addEmployeeBoolean);
    }

    promptUser(q){
        return inquirer
            .prompt(q)
    }
    async createEmployee (response){
        console.log("\x1b[32m\n--------------------Creating Another Employee------------------------\n")
        const {employee} = response
    
        const questions = new Questions();
    
        const questionResponse = await this.promptUser(questions.getGeneralQuestions());
        const {name, id,email} = questionResponse 
    
        if (employee == "Manager" ) {
            const q = await this.promptUser(questions.getManagerQs())
            
            const {officeNumber} = q
    
            return new Manager(name, id,email, officeNumber);
    
        }else if (employee =="Engineer"){
            const q = await this.promptUser(questions.getEngineerQs());
                
            const {github} = q
    
            return new Engineer(name, id,email, github)
    
        }else{
            const q = await this.promptUser(questions.getInternQs());
    
            const {school} = q
    
            return new Intern(name, id,email, school)
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

    writeFile(html){
    
        try{
            fs.writeFileSync(path.resolve(outputPath), html);    
            console.log('Success')
        }catch(err){
            console.error(err)
        } 
    }
}

module.exports = Create