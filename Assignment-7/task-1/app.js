let name = prompt("WRITE YOUR FULL NAME?");
let age = prompt("WRITE YOUR AGE?");
let city = prompt("WRITE YOUR CITY?");
let profession = prompt("WRITE YOUR PROFESSION?");
let email = prompt("WRITE YOUR EMAIL?");
let phonenumber = prompt("WRITE YOUR PHONE NUMBER?");

let arr = JSON.parse(localStorage.getItem("userData")) || [];

let obj = {
    name: name || "N/A",
    age: age || "N/A",
    city: city || "N/A",
    profession: profession || "N/A",
    email: email || "N/A",
    phonenumber: phonenumber || "N/A"
};

arr.push(obj);
localStorage.setItem("userData", JSON.stringify(arr));

let userContainer = document.getElementById("user-info");
let retrievedData = JSON.parse(localStorage.getItem("userData")) || [];

userContainer.innerHTML = "";

retrievedData.forEach((user) => {
    userContainer.innerHTML += `
        <div class="user-card">
            <div><div>Name:</div> ${user.name}</div>
            <div><div>Age:</div> ${user.age}</div>
            <div><div>City:</div> ${user.city}</div>
            <div><div>Profession:</div> ${user.profession}</div>
            <div><div>Email:</div> ${user.email}</div>
            <div><div>Phone Number:</div> ${user.phonenumber}</div>
        </div>
    `;
});