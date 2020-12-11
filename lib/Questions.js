/**
 * Generic Questions class.
 * @class
 */
class Questions{
/**
 * Generic Create constructor.
 * @constructor
 */
    constructor(){
        this.generalQuestions = [
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                // name has to be letter
                validate: val => /[a-zA-Z]/gi.test(val), 

            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's id number? must be a number",
                // id must be a number
                validate: val => /[0-9]/gi.test(val), 
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email? emailformat@mail.com",
                validate: val => /[0-9a-zA-Z-_.]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]/gi.test(val),
            }
        ];
        
        this.managerQ = [
            {
            type: "input",
            name: "officeNumber",
            message: "What is the managers's office phone number? (000)000-0000",
            validate: val => /[\(]+[0-9]{3}+[\)]+[0-9]{3}+-[0-9]{4}/gi.test(val), 
            }
        ];

        this.engineerQs = [
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub username?",
                validate: val => /[0-9a-zA-Z-_.]/gi.test(val), 
            },
        ];
        this.internQs = [
            {
                type: "input",
                name: "school",
                message: "What is the intern's school name?",
                validate: val => /[a-zA-Z1-9]/gi.test(val), 
            },
        ];
        this.typeOfEmployee = [
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
        ];

        this.askForAnotherEmployee = [
            {
                type: "confirm",
                name: "answer",
                message: "Would you like to add another employee?"
            }
        ];
    }
    /**
     * @function getGeneralQuestions 
     * @returns - always returns list of questions named this.generalQuestions 
     */
    getGeneralQuestions(){
        return this.generalQuestions;
    }

    /**
     * @function getManagerQs 
     * @returns - always returns list of questions named this.managerQ 
     */
    getManagerQs(){
        return this.managerQ;
    }

    /**
     * @function getEngineerQs 
     * @returns - always returns list of questions named this.engineerQs 
     */
     getEngineerQs(){
        return this.engineerQs;
    }

    /**
     * @function getInternQs 
     * @returns - always returns list of questions named this.internQs 
     */ 
     getInternQs(){
        return this.internQs;
        }

    /**
     * @function getTypeOfEmployee 
     * @returns - always returns list of questions named this.typeOfEmployee 
     */         
    getTypeOfEmployee(){
        return this.typeOfEmployee;
    }

    /**
     * @function getAnotherEmployee 
     * @returns - always returns list of questions named this.askForAnotherEmployee 
     */    
    getAnotherEmployee(){
        return this.askForAnotherEmployee;
    }
                
}


module.exports = Questions