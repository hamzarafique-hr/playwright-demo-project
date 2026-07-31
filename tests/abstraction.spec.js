function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    // this.monthlyBonus = 10000;
    let monthlyBonus = 10000;

    // finalSalary = basesalary + monthlyBonus   

    // this.calculateFinalSalary = function() {
    //     let finalSalary = this.baseSalary + this.monthlyBonus;
    //     console.log("Final Salary for " + this.name + " is: " + finalSalary);
    // }

    let calculateFinalSalary = () => {
        let finalSalary = baseSalary + monthlyBonus;
        console.log("Final Salary for " + this.name + " is: " + finalSalary);
    }

    this.getEmployeeDetails = function() {
        console.log("Employee Name: " + this.name+ ", Age: " + this.age + ", Base Salary: " + this.baseSalary);
        calculateFinalSalary();
}

}
let emp1 = new Employee("John", 30, 50000);
emp1.getEmployeeDetails(); // Output: Employee Name: John, Age: 30, Base Salary: 50000
// emp1.monthlyBonus = 10000; // This will not work as monthlyBonus is private
// emp1.calculateFinalSalary(); // Output: Final Salary for John is: 60000

