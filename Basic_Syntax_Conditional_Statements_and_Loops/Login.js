function login(input) {
 
    let username = input[0];
    let pass = '';

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
        
    }

    let passGues = input[1];
    let index = 2;
    let counter = 0;

    while (passGues !== pass) {
        counter++;
        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
        passGues = input[index];
        index++
    }

    console.log(`User ${username} logged in.`);
}

login(['Acer','login','go','let me in','recA']);