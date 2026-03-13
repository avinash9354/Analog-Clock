let hr = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
setInterval(() => {
    let  day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * 6;
    let s = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${h + m / 12}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;

    // Digital Clock
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#AMPM');

    let h1 = day.getHours();
    let m1 = day.getMinutes();
    let s1 = day.getSeconds();

    if (h1 >= 12) {
        h1 = h1 - 12;
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }
    if (h1 == 0) {
        h1 = 12;
    }
    hours.innerHTML = h1 < 10 ? "0" + h1 : h1;
    minutes.innerHTML = m1 < 10 ? "0" + m1 : m1;
    seconds.innerHTML = s1 < 10 ? "0" + s1 : s1;    
    


}, 1000);

