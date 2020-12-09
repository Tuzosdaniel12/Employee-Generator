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
        ]
    }

     getManagerQs(){
        return [
                    {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the managers's office number?"
                    }
                ]
        }
     getEngineerQs(){
        return [
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's GitHub username?"
                    },
                ]
        }
        
     getInternQs(){
        return [
                    {
                        type: "input",
                        name: "school",
                        message: "What is the intern's school name?"
                    },
                ]
        }
                
}


module.exports = Questions