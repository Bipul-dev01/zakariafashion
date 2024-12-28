// // JS Code : CodingLab
// //**********************************************************
// const seconds=document.querySelector(".seconds .number");
// const minutes=document.querySelector(".minutes .number");
// const hours=document.querySelector(".hours .number");
// const days=document.querySelector(".days .number");
// // console.log(seconds,minutes,hours,days);

// let secValue=60,
//     minValue=5,
//     hourValue=2,
//     daysValue=2

// const timeFuctionOn=setInterval(() => {
//    secValue--;
// //    console.log(secValue);
// if(secValue===0){
//     minValue--;
//     secValue=60;
// }
// if(minValue===0){
//     hourValue--;
//     minValue=60;
// }
// if(hourValue===0){
//     daysValue--;
//     hourValue=24;
// }
// if(daysValue===0){
//     clearInterval(timeFuctionOn);
// }
// seconds.textContent=secValue < 10 ? `0${secValue}`: secValue;
// minutes.textContent=minValue < 10 ? `0${minValue}` : minValue;
// hours.textContent=hourValue < 10 ? `0${hourValue}` : hourValue;
// days.textContent=daysValue < 10 ? `0${daysValue}` : daysValue;

// }, 1000);//1000ms=1s



// JS Code : CodingNepal
//**********************************************************

const seconds=document.querySelector(".seconds .number");
const minutes=document.querySelector(".minutes .number");
const hours=document.querySelector(".hours .number");
const days=document.querySelector(".days .number");

const timeFuctionOn=setInterval(() => {
    let currentDate=new Date().getTime();
    // console.log(currentDate);
    let launchDate=new Date('Jan 15, 2025 10:00:00').getTime();
    // console.log(launchDate);
    let duration=launchDate - currentDate;
    //console.log(duration);  //duration milisecond e result dibe, 1 s=1000ms

    let daysValue=Math.floor(duration/(1000*60*60*24));
    // console.log(days);
    let hourValue=Math.floor((duration%(1000*60*60*24))/(1000*60*60));
    let minValue=Math.floor((duration%(1000*60*60))/(1000*60));
    let secValue=Math.floor((duration%(1000*60))/1000);
    // console.log(seconds);


    seconds.textContent=secValue < 10 ? `0${secValue}`: secValue;
    minutes.textContent=minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent=hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent=daysValue < 10 ? `0${daysValue}` : daysValue;

    if(duration<0){
        clearInterval(timeFuctionOn);
    }

}, 1000);