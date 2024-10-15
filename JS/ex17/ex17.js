// addUp(4);// 10)
// addUp(13);// 91)
// addUp(600);// 180300)
// addUp(1000);// 500500)

addUp(1);// 1)

function addUp(num) {

    const result = add(num);
    console.log(result);
}

function add(date) {

    let help = 0;
    while (date <= 1000 && date >= 1) {
        help += date;
        if (date === 0) {
            break;
        }
        date = date - 1;
    }

    return help;
}
