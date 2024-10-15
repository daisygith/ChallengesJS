// bitwiseAND(7, 12); //4
// bitwiseOR(7, 12); //15
// bitwiseXOR(7, 12); //11


bitwiseAND(32, 17);// 0)
bitwiseOR(32, 17);//49)
bitwiseXOR(32, 17);// 49)



function bitwiseAND(n1, n2) {

    const num1 = convertDecimalToBinary(n1);
    const num2 = convertDecimalToBinary(n2);

    console.log(num1,num2);

    console.log(n1&n2);
}
function bitwiseOR(n1, n2) {

    console.log(n1 | n2);

}

function bitwiseXOR(n1, n2) {
    console.log(n1 ^ n2);
}


function convertDecimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        // Base case: Return "0" if the number is 0
        return "0";
    } else {
        // Recursive case: Divide the number by 2,
        //append the remainder to the result of the recursive call
        return convertDecimalToBinary(
            Math.floor(decimalNumber / 2)) + (decimalNumber % 2);
    }
}
