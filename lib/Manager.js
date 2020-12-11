// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

/**
 * 
 * @class - Engineer extends Employee 
 */
class Manager extends Employee{
    /**
     * @constructor
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} officeNumber 
     */
    cons
    constructor( name, id,email, officeNumber ){

        super(name, id, email)

        this.officeNumber = officeNumber
    }
    /**
     * @returns - Always returns "Manager"
     */
    getRole(){
        return "Manager"
    }

    /**
     * @returns - Always returns this.officeNumber
     */
    getOfficeNumber(){
        return this.officeNumber
    }
}
module.exports = Manager