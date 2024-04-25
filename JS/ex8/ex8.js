const arr = [[3,21,37], [61,79,101,120], [133,149]];
console.log(arr);
const isNumberInArrayOfArrays = (number, array) => {
    // const.
let found =false;
array.forEach(innerArray => {
    if(innerArray.indexOf(number) !== -1){
        found = true;
        return true;
    }
})
    return found;
};

console.log(isNumberInArrayOfArrays(0,arr));
console.log(isNumberInArrayOfArrays(21,arr));
console.log(isNumberInArrayOfArrays(221,arr));