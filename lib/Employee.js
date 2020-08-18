//constructor for implementing name, email and id for an employee
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //returning the name
  getName() {
    return this.name;
  };
  //returning the email
  getEmail() {
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
