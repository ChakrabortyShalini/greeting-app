   // Show a greeting based on time of day
// This code will show a greeting based on the time of day
// It will display "Good morning" if the time is before 12 PM
// "Good afternoon" if the time is between 12 PM and 6 PM
// and "Good evening" if the time is after 6 PM
const currentHour = new Date().getHours();
let greeting;
if (currentHour < 12) {
    greeting = "Good morning";
}
else if (currentHour < 18) {
    greeting = "Good afternoon";
}
else {
    greeting = "Good evening";
}
console.log(greeting);

   