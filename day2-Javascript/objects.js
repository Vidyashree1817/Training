//objects is a collection of key value pairs

//object literal notation
const employee = {
    id: 1,
    name: "vidya",
    experience: 1,
    work: function () {
        console.log(`${employee.name} is a developer`);
    },
    shift: () => console.log(`${employee.name} works in a morning shift`)
};
console.log(employee);
console.log(employee.name);
employee.work();
employee.shift();

//object Constructor
const student = new Object();
student.name = "vidya";
student.rollno = "117";
student.department = "ECE";
student.work = function () {
    console.log("Completing the assignment")
}
console.log(student.name);
student.work();

//factory functions
function employee2(empname, empid) {
    return {
        name: empname,
        id: empid,
        work: () => console.log("complete the tasks that are assigned")
    }
}
const emp = new employee2("vidya", 18);
console.log(emp.name);
emp.work();

//constructor function 
function Student(name, age, skill) {
    this.name = name,
        this.age = age,
        this.skill = skill,
        this.introduce = function () {
            console.log(`Hii I am ${this.name}`)
            console.log(`I am learning ${this.skill}`);
        }


}
const s1 = new Student("Vidya", 22, "Javascript");
s1.introduce();

//class keyword
class Employee {
    constructor(name, empid, department, salary) {
        this.name = name,
            this.empid = empid,
            this.department = department,
            this.salary = salary
    }
    work(message) {
        console.log(`${this.name} belongs to ${this.department} department`);
        console.log(message);
    }
}
const e1 = new Employee("vidya", 18, "software developement", 60000);
e1.work("Working as a trainee Software developer");

//object property operations
//checking whether the property is there inside the object are not

//1 way
console.log(emp.name)//if the property is not there then the output is undefined

//2 way
console.log("name" in employee)//it gives the boolean output if present true else false

//3 way
console.log(employee.hasOwnProperty("id"));//gives the boolean output

//for-in loop
// for (keys in employee) {
//     console.log(keys + " : " + employee[keys])
// }
//object.keys()
const keys = Object.keys(employee);
for (let key of keys) {
    console.log(key + " : " + employee[key]);
}
//object.values()
const values = Object.values(employee)
console.log(values);

//object.entries()
const entries = Object.entries(employee)
console.log(entries);

//this keyword
// nested objects
//Library managemnet system object

