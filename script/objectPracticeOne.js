console.log("test.");
const playerOne = {
    name: "Tim",
    age: 25
}
const playerTwo = {
    name: "Dave",
    age:21
}
function displayPlayerInfo(player) {
    console.log(player.name);
    console.log(player.age);
}
const displayInfo = (player) => {
    console.log(player.name);
    console.log(player.age);
    let output = `Name: ${player.name} <br/>
    Age: ${player.age}`
    document.getElementById("playerInfo").innerHTML = output;
    
}