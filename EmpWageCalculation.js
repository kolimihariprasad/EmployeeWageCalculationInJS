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

//UC11
let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage >0)
                    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);

let totalHrs = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalHrs, dailyHrsAndWage) => totalHrs += dailyHrsAndWage.dailyWage,0);
console.log("UC 11A Total Hours: "+totalHrs+" Total Wages: "+totalWages)
process.stdout.write("UC11B Full Working Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 8)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()))

let partWrkDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 4)
                        .map(dailyHrsAndWage => dailyHrsAndWage.toString())
console.log("\nUC11C PartTime Working Day String: "+partWrkDayStrArr)

let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 0)
                            .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D Non Working Days: "+nonWorkingDayNums)

let isAllFullTimeWage = empDailyHrsAndWageArr.every(dailyHrsAndWage => dailyHrsAndWage.dailyHrs > 0)
console.log("UC 11E is all Wages is Full Time: "+isAllFullTimeWage)

let isAnyPartimeWage = empDailyHrsAndWageArr.some(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 4)
console.log("UC 11F is there any partime Time Days: "+isAnyPartimeWage)

let NumWrkingDays = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs > 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum.toString())
console.log("UC 11G is all Wages is Full Time: "+NumWrkingDays)











































