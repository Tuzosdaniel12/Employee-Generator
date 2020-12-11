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
        this.employees = []
    }

    //add to the employee list
    setEmployeeList(employee){
        this.employees.push(employee)
    }

    /**
     * get the employee list
     * @return {list} Always returns list of this.employees.
     */
    //get the list of employees
    getEmployeeList(){
        return this.employees
    }

    /**
     * @async
     * @function employeeCreation -prompt user for type of user and waits for user answer then send response to createEmployee()
     */
    async employeeCreation () {
        const questions = new Questions();
        
        //ask user what type of employee they want to create
        const response = await this.promptUser(questions.getTypeOfEmployee());

        //ask questions to user based on employee
        this.createEmployee (response);
     
    }


    /**
    *@param {array} q 
    *@fires inquirer.prompt -ask questions to user then
    *@returns {object} - always return object that contains the response from user 
    */
    promptUser(q){
        
        return inquirer
            .prompt(q)
    }

     /**
     * @async
     * @function createEmployee - will check what type of employee need to be created; ask question to send data to matching function to create that object
     * @fires this.createManager - if employee =="Manager"
     * @fires this.createEngineer - if employee =="Engineer"
     * @fires this.createIntern - if employee =="Intern"
     * @param {object} response - takes in a object that contains previous answers from user  
     */
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

    /**
     * @function checkIfAddingEmployee -check if user wants to create another employee
     * @param {object} response 
     * @fires this.employeeCreation() - if user response is true
     * @fires render() - to create html file
     * @fires this.writeFile(html) - to write file aster has been properly formatted
     * @param {object} response - object that contains previous answers from user
     */
    
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

    /**
     * @function writeFile - send string(html) to be send into writeFile
     * @param {sting} html -takes a string that has been formatted into a html syntax file
     * @fires fs.WriteFileSync - to write html to team.html file
     */
    //accepts the finish html file and writes the file into team.htlm 
    writeFile(html){
    
        try{
            fs.writeFileSync(path.resolve(outputPath), html);    
            console.log('Success')
        }catch(err){
            console.error(err)
        } 
    }

    /**
     * @async
     * @function createManager - will ask question to user; create Manager then add it to employee list
     * @fires this.promptUser - ask user for  office number
     * @fires this.setEmployeeList - add Manager to employee list
     * @fires this.addEmployee - ask user if the want to add another employee
     * @param {string} name - Manager name
     * @param {string} id - Manager id
     * @param {string} email -Manager email
     * @param {object} questions - object that contains lists of questions based onm employee
     */
    //ask the user for inter question and returns Manager object
    async createManager(name, id,email,questions){
        const q = await this.promptUser(questions.getManagerQs())
            
        const {officeNumber} = q
    
        this.setEmployeeList(new Manager(name, id,email, officeNumber));

        this.addEmployee();
   
    }

    /**
     * @async
     * @function createEngineer - will ask question to user; create Engineer then add it to employee list
     * @fires this.promptUser - ask user for  office number
     * @fires this.setEmployeeList - add Engineer to employee list
     * @fires this.addEmployee - ask user if the want to add another employee
     * @param {string} name - Engineer name
     * @param {string} id - Engineer id
     * @param {string} email -Engineer email
     * @param {object} questions - object that contains lists of questions based onm employee
     */
    //ask the user for inter question and returns Engineer object
    async createEngineer(name, id,email,questions){
        const q = await this.promptUser(questions.getEngineerQs());
                
        const {github} = q

        this.setEmployeeList(new Engineer(name, id,email, github))

        this.addEmployee();
    }

    /**
     * @async
     * @function createIntern - will ask question to user; create Intern then add it to employee list
     * @fires this.promptUser - ask user for  office number
     * @fires this.setEmployeeList - add Engineer to employee list
     * @fires this.addEmployee - ask user if the want to add another employee
     * @param {string} name - Intern name
     * @param {string} id - Intern id
     * @param {string} email -Intern email
     * @param {object} questions - object that contains lists of questions based onm employee
     */
    //ask the user for inter question and returns intern object
    async createIntern(name, id,email,questions){
        const q = await this.promptUser(questions.getInternQs());
    
        const {school} = q

        this.setEmployeeList(new Intern(name, id,email, school))

        this.addEmployee(questions);
    }

    /**
     * @async
     * @function addEmployee - will ask question to user if then want to create another employee
     * @fires this.promptUser - ask user for  if they want to add another employee then send response to,
     * @fires checkIfAddingEmployee - checks response from user
     */
    async addEmployee(){
        const questions = new Questions();
        const addEmployeeBoolean = await this.promptUser(questions.getAnotherEmployee());
        console.log(`\x1b[32m\n----------------------------------------------------------------\n`)
        this.checkIfAddingEmployee(addEmployeeBoolean);
    }
}

module.exports = Create