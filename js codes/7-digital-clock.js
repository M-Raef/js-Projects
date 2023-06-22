const digitalCLock = () => {
    const now = new Date();

    let sec = now.getSeconds()
    let min = now.getMinutes()
    let hour = now.getHours()
    let date = now.toDateString()
    let pmam = "am"

    if (hour>12) {
        hour = hour-12;
        pmam = "pm"
    }
    if (sec<10) {
        sec =`0${sec}`
    }
    if (min<10) {
        min =`0${min}`
    }
    if (hour<10) {
        hour =`0${sec}`
    }
    if (hour == 0) {
        hour =`12`
    }


    const clock = `
    <div class="date">
        ${date}
    </div>

    <div class="time">
        ${hour} : ${min} : ${sec} ${pmam}
    </div>
    `;

    clockcontainer.innerHTML = clock
}
setInterval(digitalCLock, 1000);


