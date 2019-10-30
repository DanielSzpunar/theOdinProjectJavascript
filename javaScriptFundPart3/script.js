let add7 = (number) => {return number + 7}
console.log(add7(4))

let multiply = (x,y) => {return x * y}
console.log(multiply(2,3))

let capitalize = (string) => {
    return (
        string.charAt(0).toUpperCase() + string.slice(1)
    )
}
console.log(capitalize("daniel"));

let lastLetter = (string) => {return string.slice(-1)}
console.log(lastLetter("daniel"))