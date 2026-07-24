class Student 
{
  setDetails() 
  {
    this.sid = '13';
    this.sname = 'Hamza';
    this.sgrade = 'A+';
    this.sclass = '10th';
  }

  displayDetails()
  {
    console.log(`Student ID: ${this.sid, this.sname, this.sgrade, this.sclass}`);
    console.log(`Student Name: ${this.sname}`);
    console.log(`Student Grade: ${this.sgrade}`);
    console.log(`Student Class: ${this.sclass}`);
  }
}

let stu = new Student();
stu.setDetails();
stu.displayDetails();


