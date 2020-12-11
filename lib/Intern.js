// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
/**
 * 
 * @class - Employee extends Employee 
 */
const Employee = require("./Employee")

class Intern extends Employee{
    /**
     * @constructor
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} school 
     */
    constructor( name, id, email, school ){

        super(name, id, email)

        this.school = school;

    }
    /**
     * @returns - Always return "Intern"
     */
    getRole(){
        return "Intern"
    }

    /**
     * @returns - Always return this.school
     */
    getSchool(){
        return this.school
    }
}


module.exports = Intern