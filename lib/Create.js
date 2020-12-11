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

/**
 * Generic Create class.
 * @class
 */
class Create{

/**
 * Generic Create constructor.
 * @constructor
 */
    constructor(){
        /**
         * @type {Employee[]} - AN array of Employee objects
         */
        this.employees = []
    }

    /**
     * Accepts an Employee object and pushes it to Employee[] list 
     * @param {Employee} employee - accepts an Employee object 
     */
    //add to the employee list
    setEmployeeList(employee){
        this.employees.push(employee)
    }

    /**
     * Gets the employee list
     * @returns {Employee[]} Always returns list of this.employees.
     */
    //get the list of employees
    getEmployeeList(){
        return this.employees
    }

/**
 * Prompt user for type of user and waits for user answer then send response to typeOfEmployee()
 * @async
 */
    async employeeCreation () {
        const questions = new Questions();
        
        //ask user what type of employee they want to create
        const response = await this.promptUser(questions.getTypeOfEmployee());

        //ask questions to user based on employee
        this.typeOfEmployee (response);
     
    }


    /**
    *Prompts user, and return the Object of answers 
    *@param {Array[{}]} q - Accepts an Array of Objects, look for npm inquirer syntax   
    *@returns {object} - Always returns object that contains the response from user 
    */
    promptUser(q){
        
        return inquirer
            .prompt(q)
    }

     /**
     * Will check what type of Employee needs to be created; ask question to send data to createEmp()to create that object
     * @async
     * @param {object} response - takes in a object that contains previous answers from user  
     */
    //ask three general questions and check what type of employee fires a function that takes care of extra attributes based on employee
    async typeOfEmployee (response){
        const {employee} = response
        console.log(`\x1b[32m\n----------------------Creating ${employee}--------------------------\n`)
    
        const questions = new Questions();

        const {name, id,email} = await this.promptUser(questions.getGeneralQuestions());
    
        if (employee == "Manager" ) {
            this.createEmp(name, id,email,questions.getManagerQs(), Manager)
    
        }else if (employee =="Engineer"){
            this.createEmp(name, id,email,questions.getEngineerQs(), Engineer)
    
        }else{
            this.createEmp(name, id,email,questions.getInternQs(), Intern)
        }
    }

    /**
     * Check if user wants to create another Employee; If true then star again
     * @function 
     * @param {object} response - object that contains previous answers from user
     */
    checkIfAddingEmployee (response) {

        if (response.answer) {
            this.employeeCreation();
        } else {
            //console.log(listOfEmployees)  
            const html = render(this.getEmployeeList());
            this.writeFile(html)
        }
    }

    /**
     * Send variable html to be writeFileSync()
     * @function 
     * @param {sting} html -Accepts a string that has been formatted into a html file
     */
    //accepts the finish html file and writes the file into team.html 
    writeFile(html){
    
        try{
            fs.writeFileSync(path.resolve(outputPath), html);    
            console.log('Success')
        }catch(err){
            console.error(err)
        } 
    }

    /**
     * Waits for user response; then create Employee to be added it to Employee[] list
     * @async  
     * @param {string} name - Employee name
     * @param {string} id - Employee id
     * @param {string} email -Employee email
     * @param {Array[{}]} questions - Array of Questions based on employee
     * @param {Class Constructor} EmpType - Class constructor
     */
    //ask the user for inter question and returns Manager object
    async createEmp(name, id,email,questions, EmpType){
        const {specialAttr} = await this.promptUser(questions)
            
        this.setEmployeeList(new EmpType(name, id,email, specialAttr));

        this.anotherEmployee();
   
    }

    /**
     * Will ask question to user if then want to create another employee then send response to checkIfAddingEmployee()
     * @async
     */
    async anotherEmployee(){
        const questions = new Questions();
        const addEmployeeBoolean = await this.promptUser(questions.getAnotherEmployee());
        console.log(`\x1b[32m\n----------------------------------------------------------------\n`)
        this.checkIfAddingEmployee(addEmployeeBoolean);
    }
}

module.exports = Create