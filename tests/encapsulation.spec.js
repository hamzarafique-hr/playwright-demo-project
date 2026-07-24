class Employee
{
    setEmpDetails(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getEmpName(){
        return this.name;
    }

    getEmpAge(){
        return this.age;
    }

    getEmpSalary(){
        return this.salary;
    }

}

let emp1 = new Employee();
emp1.setEmpDetails("John", 30, 50000);
console.log(emp1.getEmpName()); // Output: John 
console.log(emp1.getEmpAge()); // Output: 30
console.log(emp1.getEmpSalary()); // Output: 50000