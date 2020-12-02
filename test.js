const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;    
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
function getWorkingHours(empCheck){
    switch(empCheck) {
        case IS_PART_TIME:
           return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOURS;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = (Math.round(Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs))
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs))
    empDailyHrsMap.set(totalWorkingDays, empHrs)    
}
console.log(empDailyWageMap)

const findTotal = (total, value) => {
    return total + value;
}
let totalHours = Array.from(empDailyHrsMap.values())
                    .filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal,0)
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal,0)
console.log("UC 9 Using Arrow Function to display Total Hrs:"+totalHours+" Total Salary: "+totalSalary)

let nonWorkingDays = new Array()
let partTimeWorkingDays = new Array()
let fullTimenonWorkingDays = new Array()
empDailyHrsMap.forEach((value,key,map) => {
    if(value == 8) fullTimenonWorkingDays.push(key)
    else if (value == 4) partTimeWorkingDays.push(key)
    else nonWorkingDays.push(key)
})
console.log("Full Working Days: "+ fullTimenonWorkingDays);
console.log("Parttime Working Days: "+ partTimeWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
//UC10=============================================================================================
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = (Math.round(Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum : totalWorkingDays,
        dailyHrs : empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum +" => Working Hours is: "+this.dailyHrs+
                    " Wage Earned for the Day: "+this.dailyWage 
        }
    })
}
console.log("UC10: "+ empDailyHrsAndWageArr)