var hourOffset = 0;
var radioButtons = document.getElementsByName('timezone');
var selectedButton = radioButtons[0].value;

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

    printTime();
}

function printTime() { /*
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
    setTimeout(printTime, 1000);
    */
}

function placeZeroes(value) {
    if (value < 10) {
        value = "0" + value.toString();
        return value;
    }
    else {
        return value;
    }
}

printTime();