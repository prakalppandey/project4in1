const timeshow = document.getElementById("time")
const monthshow = document.getElementById("month")
const dayshow = document.getElementById("day")
const yearshow = document.getElementById("year")
months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(() => {
    let date = new Date();
    timeshow.innerHTML = date.toLocaleTimeString();
    monthshow.innerHTML = months[(date.getMonth())];
    dayshow.innerHTML = dayNames[(date.getDay())];
    yearshow.innerHTML = date.getFullYear();
    
    
    
}, 1000);




