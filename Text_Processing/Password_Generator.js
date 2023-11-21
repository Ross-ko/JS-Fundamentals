function passwordGen(data) {
    
    let [word1, word2, wordForMask] = data;
    let password = word1 + word2;
    let matrix = ['a', 'e', 'i', 'o', 'u'];
    let indx = 0;

    for (let char of password) {
        if (matrix.includes(char)) {
            password = password.replace(char, wordForMask[indx].toUpperCase());
            indx++;
        }
        if (indx == wordForMask.length) {
            indx = 0;
        }
    }

    password = password.split('').reverse().join('');

    console.log(`Your generated password is ${password}`);
}

passwordGen(['ilovepizza', 'ihatevegetables', 'orange']);