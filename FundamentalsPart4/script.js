//exercise #1 helloWorld
function helloWorld() {return 'Hello, World!'};
//console.log(helloWorld());
let helloWorldV2 = () => {return 'Hello, World!'};
//console.log(helloWorldV2())

//exercise #2 repeatString
function repeatString(stringToRepeat, timesToRepeat){
    if (timesToRepeat < 0) {return 'ERROR'}
    let str = '';
    for (let i = 1; i <= timesToRepeat; i++) {
        str += stringToRepeat;
    }
    return str;
}
/*
console.log(repeatString('hey', 10));
console.log(repeatString('hey', 0));
console.log(repeatString('hey', 1));
console.log(repeatString('hey', -1));
*/

//exercise #3 reverseString
let reverseString = (string) => {
    return string.split('').reverse().join('');
}
let test = reverseString("daniel");
console.log(test)