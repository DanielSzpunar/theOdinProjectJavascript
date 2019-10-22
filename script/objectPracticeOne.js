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
function playerConstructor (name, age) {
    this.name = name;
    this.age = age;
}
function createNewPlayer () {
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    const newPlayer = new playerConstructor(name, age);
    
    document.getElementById("newPlayer").innerHTML = `New Player: ${newPlayer.name}<br>age: ${newPlayer.age}`

}
