// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//constructor for implementing name, email and id for an employee
// class Rectangle extends Polygon {
//     constructor(height, width) {
//       super(height, width);
//       this.name = 'Rectangle';
//     }
// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'
const Employee = require("./Employee.js");

class Engineer extends  Employee {

    constructor(name,id,email,GitHubUser){
        super(name,id,email);
        this.role = 'Engineer'
        this.github = GitHubUser
    }
       
    //returning the github
    getGithub(){
       return this.github 
          }
    getRole(){
            return "Engineer"
        }
        
}
// let employee =new Engineer;

module.exports = Engineer