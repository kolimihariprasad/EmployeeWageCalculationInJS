class EmpPayrollData {
    id;
    salary;
    constructor(id,name,salary) {
        this.id =  id;
        this.name = name;
        this.salary = salary; 
    }
    get name() { return this._name; }
    set name(name) { this._name = name; }

    toString() {
        return "id: "+this.id+ ", name="+this.name+", salary="+this.salary
    }
}
let empPayrollData = new EmpPayrollData(1, "Sami", 35000);
console.log(empPayrollData.toString());
empPayrollData.name = "john";
console.log(empPayrollData.toString());