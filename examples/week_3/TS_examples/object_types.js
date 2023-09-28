/**
 * Object types are used to specify the structure of an object
 * You can defien the properties the object should have, along with its data type
 */
// Object type
var Mike = {
    name: "Mike",
    age: 54
};
// explicit with names and data types
var Alice = {
    name: "Alice",
    age: 34
};
var John = {
    name: "John",
    age: 34
};
var Jones = {
    name: "Jones",
    age: 34,
    isStudent: false
};
var Kim = {
    name: "Kim"
};
var origins = { x: 0, y: 0 };
function getUserInfo(user) {
    return "ID: ".concat(user.id, ", name: ").concat(user.name, ", email: ").concat(user.email);
}
console.log(getUserInfo({ id: 1, name: "Jon", email: "email@emial.com" }));
