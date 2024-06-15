let clockDiv = document.getElementById('clock');

setInterval(() => {
    
let mytime = new Date();
console.log(mytime);
let hours = mytime.getHours().toLocaleString();
let minutes = mytime.getMinutes().toLocaleString();
let seconds = mytime.getSeconds().toLocaleString();
h = parseInt(hours);
m = parseInt(minutes);
s = parseInt(seconds);
let ampm = h>=12?"PM":"AM"; 
h = h%12;
if(h == 0) h = 12;
if(hours<10) hours = "0"+hours;
if(minutes<10) minutes = "0"+minutes;
if(seconds<10) seconds = "0"+seconds;
let localTime = `${hours}:${minutes}:${seconds} ${ampm}`;
console.log(localTime);
clockDiv.innerHTML = localTime;
}, 1000);