type Person = {
  name: string,
  age: number,
};

type Employee = {
  salary: number,
  employeeId?: number,
};

type staff = Person & Employee;

const emp1: staff = {
    name: "Raghu",
    age: 30,
    salary: 50000,
    // employeeId: 101
}

console.log("Employee 1 details:", emp1);
