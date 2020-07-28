// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// in addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
class Intern extends Employee{
    constructor(name,email,id,role){
        super(name,email,id,role);
        this.school= school;
        this.role='Intern'  
    }
        getSchool(){
        return this.school;
    }
   
}
let employee =new Intern;