const IS_ABSENT = 0;

let empCheck = (Math.round(Math.random() * 10) % 2);
if(empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
} else {
    console.log("Employee is PRESENT");
}