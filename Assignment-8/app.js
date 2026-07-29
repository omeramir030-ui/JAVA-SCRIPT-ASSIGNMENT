let div = document.getElementById("div");
let studentData = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

const addStudent = () => {
    let name = document.getElementById("name");
    let roll = document.getElementById("roll");
    let age = document.getElementById("age");

    let stdName = name.value.trim();
    let stdRoll = roll.value.trim();
    let stdAge = age.value.trim();

    if (!stdName || !stdRoll || !stdAge) return;

    const stdObject = {
        id: Date.now(),
        stdName,
        stdRoll,
        stdAge
    };

    studentData.push(stdObject);
    localStorage.setItem("students", JSON.stringify(studentData));

    name.value = "";
    roll.value = "";
    age.value = "";
    displayStudents();
};

function displayStudents() {
    let rows = "";

    if (studentData.length === 0) {
        rows = `
            <tr>
                <td colspan="4" class="empty-cell">No student records found in system database.</td>
            </tr>`;
        div.innerHTML = rows;
        return;
    }

    studentData.forEach((dt) => {
        rows += `
            <tr>
                <td><strong>${dt.stdName}</strong></td>
                <td>${dt.stdRoll}</td>
                <td>${dt.stdAge}</td>
                <td class="text-right">
                    <button class="btn-action edit" onclick="editStudent(${dt.id})">Edit</button>
                    <button class="btn-action del" onclick="deleteStudent(${dt.id})">Delete</button>
                </td>
            </tr>`;
    });

    div.innerHTML = rows;
}

function deleteStudent(id) {
    studentData = studentData.filter((student) => student.id !== id);
    localStorage.setItem("students", JSON.stringify(studentData));
    displayStudents();
}

function editStudent(id) {
    let student = studentData.find((item) => item.id === id);
    if (!student) return;

    let newName = prompt("Enter new name", student.stdName);
    let newRoll = prompt("Enter new roll number", student.stdRoll);
    let newAge = prompt("Enter new age", student.stdAge);

    if (newName !== null && newRoll !== null && newAge !== null) {
        if (!newName.trim() || !newRoll.trim() || !newAge.trim()) return;
        student.stdName = newName.trim();
        student.stdRoll = newRoll.trim();
        student.stdAge = newAge.trim();
        localStorage.setItem("students", JSON.stringify(studentData));
        displayStudents();
    }
}

window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
});

window.dispatchEvent(new Event("scroll"));