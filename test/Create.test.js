const Create = require("../lib/Create");
const Employee = require("../lib/Employee")

describe("Create", () =>{
    describe("constructor", () => {
        it("it should an object via constructor", () =>{
            const c = new Create();
            expect(typeof(c)).toBe("object");
        })
    })


    describe("setEmployeeList", () => {
        it("it should  push employee to this.employee", () =>{
            const c = new Create();

            const employee = new Employee("daniel", "0000", "danielsoledad@gmail.com");
            
            c.setEmployeeList(employee)
            const results = c.getEmployeeList()
            
            const list = [employee]

            expect(list).toEqual(results);
        })
    })

    describe("getEmployeeList",() =>{
        it("should return list of employees", ()=>{ 
            const c = new Create();

            const employee = [];
            const result = c.getEmployeeList()

            expect(employee).toEqual(result);
        })
    
    })

 
})



 
 