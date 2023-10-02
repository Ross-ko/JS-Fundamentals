function equalArray(str1, str2) {
    
    for (i = 0; i < str1.length; i++) {
        str1[i] = Number(str1[i]);
    }
    for (i = 0; i < str2.length; i++) {
        str2[i] = Number(str2[i]);
    }

    let sum = 0;
    let identical = true;

    for (i = 0; i < str1.length; i++) {

        if (str1[i] == str2[i]) {
            sum += str1[i];
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            identical = false;
            break;
        }
    }

    if (identical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArray(['10','20','30'], 
           ['10','20','30']);
           console.log('-------------------------------------------------------------------------');
equalArray(['1','2','3','4','5'], 
           ['1','2','4','4','5']);
           console.log('-------------------------------------------------------------------------');
equalArray(['1'], 
           ['10']);
           console.log('-------------------------------------------------------------------------');