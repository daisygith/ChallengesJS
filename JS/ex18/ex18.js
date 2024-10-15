matchHouses(1);//6)
matchHouses(0);// 0)
matchHouses(4);// 21)
matchHouses(17);// 86)
matchHouses(36);// 181)
matchHouses(3);// 16)

function matchHouses(step) {

    let result = stepsNumber(step);
    console.log(step + " " + result);
}

// stepN - step Number

function stepsNumber(stepN){
    let matchsticks = 6;
    let total = 0;

    if(stepN !== 0){
        if(stepN !== 1) {
            total = matchsticks + ((stepN - 1) * (matchsticks - 1));
        } else {
            total = matchsticks;
        }
    } else {
        total = 0;
    }

    return total;

}