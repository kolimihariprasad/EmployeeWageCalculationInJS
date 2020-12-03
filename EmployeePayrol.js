class EmpPayrollData {
    id;
    salary;
    gender;
    startDate;
    constructor(...params) {
        this.id =  params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4]; 
    }
    get name() { return this._name; }
    set name(name) { this._name = name; }

    toString() {
        const options = {year: 'numeric', month: 'long', day:'numeric'};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options)
        return "id: "+this.id+ ", name="+this.name+", salary="+this.salary+ ", gender: "+this.gender
                +", startDate: "+empDate
    }
}
let empPayrollData = new EmpPayrollData(1, "Sami", 35000);
console.log(empPayrollData.toString());
empPayrollData.name = "john";
console.log(empPayrollData.toString());
let newempPayrollData = new EmpPayrollData(1, "Mike", 35000,"F", new Date());
console.log(newempPayrollData.toString());