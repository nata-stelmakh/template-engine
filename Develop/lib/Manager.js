// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'
class Manager extends Employee{
    constructor(name,email,id,role){
        super(name,email,id,role);
        this.role= 'Manager'
        this.officeNumber =officeNumber;
    }
       }
let employee =new Manager;