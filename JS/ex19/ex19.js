shiftToLeft(5,2);  //20
shiftToLeft(10,3); //80
shiftToLeft(-32,2); //-128
shiftToLeft(-6,5); //-192
shiftToLeft(12,4); //192

function shiftToLeft(x, y) {

    const result = x * Math.pow(2,y);

    console.log(x + " " + y + " " +result);

}


