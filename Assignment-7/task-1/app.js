let name = prompt("WRITE YOUR FULL NAME?");
let age = prompt("WRITE YOUR AGE?");
let city = prompt("WRITE YOUR CITY?");
let profession = prompt("WRITE YOUR PROFESSION?");
let email = prompt("WRITE YOUR EMAIL?");
let phonenumber = prompt("WRITE YOUR PHONE NUMBER?");

let arr = []
let obj = {
    name: name,
    age: age,
    city: city,
    profession: profession,
    email: email,
    phonenumber: phonenumber
};
arr.push(obj);
console.log(arr);