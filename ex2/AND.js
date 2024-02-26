let result;

function and(a,b){
    result = ((a === true) && (b === true));
    console.log(result);
    return result;
}

// and(true,true); // true
// and(true,false); //false
and(false,true); //false
