class Questions{
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
                message: "What is the employee's id number?",
                // id must be a number
                validate: val => /[a-zA-Z1-9]/gi.test(val), 
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
            validate: val => /[\(]+[0-9]+[\)]+[0-9]+-[0-9]/gi.test(val), 
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
    getGeneralQuestions(){
        return this.generalQuestions;
    }

    getManagerQs(){
        return this.managerQ;
    }
     getEngineerQs(){
        return this.engineerQs;
        }
        
     getInternQs(){
        return this.internQs;
        }
    getTypeOfEmployee(){
        return this.typeOfEmployee;
    }
    getAnotherEmployee(){
        return this.askForAnotherEmployee;
    }
                
}


module.exports = Questions