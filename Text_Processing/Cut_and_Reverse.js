// function cutAndReverse (data) {

//     let reverseStr = '';

//     for (let i = data.length - 1; i >= 0; i--){
//         reverseStr += data[i];
//     }

//     let middle = reverseStr.length / 2;
//     let leftHalf = reverseStr.substring(0, middle);
//     let rightHalf = reverseStr.substring(middle);

//     console.log(rightHalf);
//     console.log(leftHalf);
// }

function cutAndReverse (data) {
    
    let middle = data.length / 2;

    let leftHalf = data.slice(0, middle).split('').reverse().join('');
    let rightHalf = data.slice(middle).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');