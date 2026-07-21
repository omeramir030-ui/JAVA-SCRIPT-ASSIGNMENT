let name = prompt("WRITE YOUR FULL NAME?");
let age = prompt("WRITE YOUR AGE?");
let city = prompt("WRITE YOUR CITY?");
let profession = prompt("WRITE YOUR PROFESSION?");
let email = prompt("WRITE YOUR EMAIL?");
let phonenumber = prompt("WRITE YOUR PHONE NUMBER?");

let arr = [];
let obj = {
    name: name,
    age: age,
    city: city,
    profession: profession,
    email: email,
    phonenumber: phonenumber
};
arr.push(obj);
localStorage.setItem("userData", JSON.stringify(arr));

let userContainer = document.getElementById("user-info");
let retrievedData = JSON.parse(localStorage.getItem("userData")) || [];

retrievedData.forEach((user) => {
    userContainer.innerHTML += `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>City:</strong> ${user.city}</p>
        <p><strong>Profession:</strong> ${user.profession}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone Number:</strong> ${user.phonenumber}</p>
        <hr>
    `;
});

const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

applyTheme(currentTheme);

toggleBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  if (theme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark Mode';
  }
}