let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    //Digital clock

    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let sec = new Date().getSeconds();

    let am = hrs>=12 ? "PM" : "AM";

    //convert 24hrs clock to 12hr clock
    if(hrs > 12){
        hrs = hrs - 12;
    }


    //add zero before single digit number
    hrs = (hrs < 10) ? "0" + hrs :hrs
    mins = (mins < 10) ? "0" + mins :mins
    sec = (sec < 10) ? "0" + sec :sec

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = sec;
    ampm.innerHTML = am;


});

//Digital clock




