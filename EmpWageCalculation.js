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
    let empCheck = (Math.round(Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs))
    totalWorkingDays++;
}

//UC 7A calculating total wage using foreach and reduce
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A with reduce mehod: "+empDailyWageArr.reduce(totalWages));

//UC 7B displaying day along with dailyWage
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C displaying full time working days using filter 
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
} 

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC 7C displaying full time working days using filter: ")
console.log(fullDayWageArr);

//UC 7D Finding first occurance of full day working
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC 7D first occurance of full day working "+ mapDayWithWageArr.find(findFullTimeWage));

//UC 7E verifing every elm of full tie wage is truly having full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160")
}
console.log("UC 7E verifing every elm of full tie wage is truly having full time wage: "+ mapDayWithWageArr.every(isAllFullTimeWage));

//UC 7F checking for Partime wage
function isAnyPartimeWage(dailyWage) {
    return dailyWage.includes("80")
}
console.log("UC 7F checking for Partime wage: "+ mapDayWithWageArr.some(isAllFullTimeWage));

//UC 7G finding no of working days
function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G finding no of working days: "+ empDailyWageArr.reduce(totalDaysWorked,0));


















































































