let seconds;
function convert(hours, minutes) {
    seconds = (hours*3600) + (minutes*60);
    console.log(seconds);
    return seconds;
}

// convert(1,3); //3780
convert(0,30); //1800