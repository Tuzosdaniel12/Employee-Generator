// TODO: Write code to define and export the Employee class
/**
 * @class - Creates new Employee
 */
class Employee{
    /**
     * @constructor
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     */
    constructor( name, id, email ){

        this.name = name
        this.id = id
        this.email = email        

    }
    /** 
     * @returns - Always returns this.name
     */
    getName(){
        return this.name
    }

    /**
     * @returns - Always returns this.id
     */
    getId(){
        return this.id
    }

    /**
     * @returns - Always returns this.email
     */
    getEmail(){
        return this.email
    }

    /**
     * @returns - Always returns "Employee"
     */
    getRole(){
        return "Employee"
    }
}

module.exports = Employee;