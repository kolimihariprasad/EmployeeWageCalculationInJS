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
    set name(name) { 
        let nRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if(nRegex.test(name)){
            this._name = name;
        } else throw "Invalid Name"
    }

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
try {
empPayrollData.name = "john";
console.log(empPayrollData.toString());
} catch(e) {
    console.error(e)
}
let newempPayrollData = new EmpPayrollData(1, "Mike", 35000,"F", new Date());
console.log(newempPayrollData.toString());