class Questions{
    constructor(){
        this.generalQuestions = [
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            }
        ];
        
        this.managerQ = [
            {
            type: "input",
            name: "officeNumber",
            message: "What is the managers's office number?"
            }
        ];

        this.engineerQs = [
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub username?"
            },
        ];
        this.internQs = [
            {
                type: "input",
                name: "school",
                message: "What is the intern's school name?"
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