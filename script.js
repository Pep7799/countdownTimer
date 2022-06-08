const countDown = () => {
    const countDate = new Date("June 11, 2022 22:00:00").getTime()
    const Today = new Date().getTime()
    const difference = countDate - Today;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayTime = Math.floor(difference / day)
    const hourTime = Math.floor((difference % day)/hour);
    const minuteTime = Math.floor((difference % hour)/minute);
    const secondTime = Math.floor ((difference % minute)/second);

    document.querySelector(".day").innerHTML = dayTime;
    document.querySelector(".hour").innerHTML = hourTime;
    document.querySelector(".minute").innerHTML = minuteTime;
    document.querySelector(".second").innerHTML = secondTime;
};

setInterval (countDown, 1000);


