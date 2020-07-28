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

class Engineer extends Employee{
    constructor(name,email,id,role){
        super(name,email,id,role);
        this.role= 'Engineer'
    }
    //returning the name
    getGitHubName(){
        return this.githubname;
    }
    //returning the email
    getGitHub(){
        return this.githublink;
    }
    
    
}
let employee =new Engineer;