let div = document.getElementById("div");
let studentData = JSON.parse(localStorage.getItem("students")) || [];

// Render initial data on load
displayStudents();

// Function to add a student
const addStudent = () => {
    let name = document.getElementById("name");
    let roll = document.getElementById("roll");
    let age = document.getElementById("age");

    let stdName = name.value.trim();
    let stdRoll = roll.value.trim();
    let stdAge = age.value.trim();

    if (!stdName || !stdRoll || !stdAge) {
        alert("Please fill in all input fields.");
        return;
    }

    const stdObject = {
        id: Date.now(),
        stdName,
        stdRoll,
        stdAge
    };

    studentData.push(stdObject);
    localStorage.setItem("students", JSON.stringify(studentData));

    // Clear input forms
    name.value = "";
    roll.value = "";
    age.value = "";

    displayStudents();
};

// Function to display the table records
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

// Function to delete a student record
function deleteStudent(id) {
    if (confirm("Are you sure you want to delete this record?")) {
        studentData = studentData.filter((student) => student.id !== id);
        localStorage.setItem("students", JSON.stringify(studentData));
        displayStudents();
    }
}

// Function to edit an existing student record
function editStudent(id) {
    let student = studentData.find((item) => item.id === id);
    if (!student) return;

    let newName = prompt("Enter new name", student.stdName);
    let newRoll = prompt("Enter new roll number", student.stdRoll);
    let newAge = prompt("Enter new age", student.stdAge);

    if (newName !== null && newRoll !== null && newAge !== null) {
        if (!newName.trim() || !newRoll.trim() || !newAge.trim()) {
            alert("Fields cannot be empty.");
            return;
        }

        student.stdName = newName.trim();
        student.stdRoll = newRoll.trim();
        student.stdAge = newAge.trim();

        localStorage.setItem("students", JSON.stringify(studentData));
        displayStudents();
    }
}

// Scroll Reveal Animation Functionality
const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
};

window.addEventListener("scroll", revealOnScroll);
// Run once on initial load to show visible sections
revealOnScroll();