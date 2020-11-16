// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// in addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
     getSchool(){
        return this.school;
    }
      getRole(){
        return "Intern"
    }
   
}
// let employee =new Intern;
module.exports =  Intern