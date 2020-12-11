
const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
/**
 * 
 * @class - Engineer extends Employee 
 */
class Engineer extends Employee{
    /**
     * @constructor
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} github 
     */
    constructor(name, id, email, github){

        super(name, id, email);

        this.github = github
    }
    /**
     * @returns - Always return "Engineer"
     */
    getRole(){
        return "Engineer"
    }

    /**
     * @returns - Always return this.github
     */
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;