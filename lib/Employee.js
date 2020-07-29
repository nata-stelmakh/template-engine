// TODO: Write code to define and export the Employee class
//The first class is an `Employee` parent class with the following properties and
// methods:

// * name
// * id
// * email
// * getName()
// * getId()
// * getEmail()
// * getRole() // Returns 'Employee'

//constructor for implementing name, email and id for an employee
class Employee {
  constructor(name, id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

    //returning the name
    getName() {
      return this.name;
    };
    //returning the email
   getEmail () {
      return this.email;
    };
    //returning the id
    getId() {
      return this.id;
    };
    getRole() {
      return "Employee";
    };
  }

// let employee = new Employee();
module.exports = Employee
