// TODO: Write code to define and export the Employee class
/**
 * 
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
     * @function getName 
     * @returns - always returns this.name
     */
    getName(){
        return this.name
    }

    /**
     * @function getId 
     * @returns - always returns this.id
     */
    getId(){
        return this.id
    }

    /**
     * @function getEmail 
     * @returns - always returns this.email
     */
    getEmail(){
        return this.email
    }

    /**
     * @function getRole 
     * @returns - always returns "Employee"
     */
    getRole(){
        return "Employee"
    }
}

module.exports = Employee;