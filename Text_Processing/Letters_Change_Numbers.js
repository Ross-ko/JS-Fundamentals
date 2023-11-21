function lettersChangeNumbers(data) {

    let arr = data.split(' '); // can use .filter(str => str != '') for empty spaces
    let sum = 0;

    let matrix = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let cipher of arr) {

        if (cipher.length == 0) {   // if use .filter() this "if" is useless
            continue;
        }

        let frontLeter = cipher.substring(0, 1);
        let backLeter = cipher.substring(cipher.length - 1);
        let num = Number(cipher.substring(1,cipher.length - 1));

        if (frontLeter == frontLeter.toUpperCase()) {
            num /= matrix.indexOf(frontLeter.toLowerCase());
        } else if (frontLeter == frontLeter.toLowerCase()) {
            num *= matrix.indexOf(frontLeter);
        }
        if (backLeter == backLeter.toUpperCase()) {
            num -= matrix.indexOf(backLeter.toLowerCase());
        } else if (backLeter == backLeter.toLowerCase()) {
            num += matrix.indexOf(backLeter);
        }
        sum += num;
    }

    console.log(sum.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z');