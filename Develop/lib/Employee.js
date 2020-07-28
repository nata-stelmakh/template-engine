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
  constructor(name, email, id,role) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role=role;
  }
// check the sintaxis -is getName(){return this.name} is more correct
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
      return this.role;
    };
  }

let employee = new Employee();
