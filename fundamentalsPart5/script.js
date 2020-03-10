let user1 = {
  name: "john",
  age: 30,
  isAdmin: true
};
for (let key in user1) {
  console.log(key);
}
//https://javascript.info/object
//Tasks:
const user = {
    name: 'John',
    surname: 'Smith',
}
user.name = 'Pete'
console.log(user)
delete user.name;
console.log(user)