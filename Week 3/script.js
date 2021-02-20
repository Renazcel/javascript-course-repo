var radioButtons = document.getElementsByName('timezone');
var selectedButton = radioButtons[0].value;
var hourOffset = 0;

// analog clock support
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function readForm() {
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedButton = radioButtons[i];
        }
    }

    switch (selectedButton.value) {   //I am in EST which means that the offset, when added, is negative
        case 'est':
            hourOffset = 0;
            break;
        case 'cst':
            hourOffset = -1;
            break;
        case 'mst':
            hourOffset = -2;
            break;
        case 'pst':
            hourOffset = -3;
            break;
    }

    showTime();
}

function showTime() {
    const day = new Date();
    const secondsRatio = day.getSeconds() / 60;
    setRotation(secondHand, secondsRatio);
    const minutesRatio = (day.getMinutes() + secondsRatio) /60;
    setRotation(minuteHand, minutesRatio);
    const hoursRatio = (day.getHours() + minutesRatio + hourOffset) / 12;
    setRotation(hourHand, hoursRatio);
    
    /* // digital clock
    var day = new Date();
    var hour = day.getHours() + hourOffset;
    var minute = day.getMinutes();
    minute = placeZeroes(minute);
    var second = day.getSeconds();
    second = placeZeroes(second);
    var session = "AM";

    if (hour == 0) {
        hour = 12;
        session = "AM";
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    hour = placeZeroes(hour);

    var timeString = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById('clock').innerHTML = timeString;
    */
}

// used for analog clock
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// used for digital clock
function placeZeroes(value) {
    if (value < 10) {
        value = "0" + value.toString();
        return value;
    }
    else {
        return value;
    }
}

setInterval(showTime, 1000)
showTime();