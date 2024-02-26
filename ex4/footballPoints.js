let result;
function footballPoints(wins, draws, losses) {
    result = (3*wins) + (1*draws) + (0*losses);
    console.log(result);
    return result;
}

// footballPoints(3,4,2); //13
// footballPoints(5,0,2); //15
footballPoints(0,0,1); //0