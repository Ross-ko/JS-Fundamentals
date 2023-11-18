function extractFile(dir) {
    
    let dirArr = dir.split('\\');

    for (let word of dirArr) {
        if (word.includes('.')) {
            let lastDotIndex = word.lastIndexOf('.');
            let extension = word.substring(lastDotIndex+1);
            let fileName = word.substring(0, lastDotIndex);
            console.log(`File name: ${fileName}`);
            console.log(`File extension: ${extension}`);
        }
    }
}

extractFile('C:\\Internal\\training-internal\\Template.pptx\\C:\\Projects\\Data-Structures\\LinkedList.cs');