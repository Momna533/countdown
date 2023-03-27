

const weekdays = [
    "sun",
    "mon",
    "tues",
    "wed",
    "thurs",
    "fri",
    "sat",
] 
const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
]
const giveAway = document.querySelector(".giveaway");
let futureDate = new Date(2023,2,22,12,22);
const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day]
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const second = futureDate.getSeconds();

giveAway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hour} ${minute} ${second}`

const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".item");
futureDate = futureDate.getTime();
function display(){
const today = new Date().getTime();
const oneDay = 24 * 60 * 60 * 1000;
const oneHour =  60 * 60 * 1000;
const oneMinute =  60 * 1000;
const t = futureDate - today;

const days = Math.floor(t  / oneDay);
const hours = Math.floor((t % oneDay)  / oneHour);
const minutes = Math.floor(t % oneHour  / oneMinute);
const seconds = Math.floor(t % oneMinute / 1000);

const values = [days,hours,minutes,seconds];
items.forEach((item,index)=>{
    item.innerHTML = format(values[index]);
})
function format(item){
    if(item < 10){
        return item = `0${item}`;
    }else{
        return item;
    }
}
if(t < 0 ){
    clearInterval(countdown);
    deadline.innerHTML = `endeddd`
}
}
const countdown = setInterval(display,1000)
display();