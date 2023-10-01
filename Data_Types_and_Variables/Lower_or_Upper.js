function lowerOrUpper(char) {

    if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
    
}

lowerOrUpper('L');
lowerOrUpper('f');
lowerOrUpper('D');