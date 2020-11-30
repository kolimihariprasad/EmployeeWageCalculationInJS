const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;    
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empHrs = 0;
let workingDays = 0;

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

while(empHrs <= MAX_HRS_IN_MONTH && workingDays < NUM_OF_WORKING_DAYS) {
    let empCheck = (Math.round(Math.random() * 10) % 3);
    empHrs += getWorkingHours(empCheck);
    workingDays++;
}

let empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Working Days: "+workingDays+" Total Hrs: "+empHrs+" Emp Wage: "+ empWage);