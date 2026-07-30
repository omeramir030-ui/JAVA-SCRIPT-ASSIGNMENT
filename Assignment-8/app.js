
let students = JSON.parse(localStorage.getItem('students')) || [];


function renderStudents() {
  let container = document.getElementById('div');
  if (!container) return;

  
  container.innerHTML = '';

  students.forEach((student, index) => {
    let card = document.createElement('div');
    card.className = "p-4 bg-surface rounded-xl border border-outline-variant/50 hover:border-outline transition-all duration-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group mb-4";

    card.innerHTML = `
      <!-- Left side: Info with Clear Labels -->
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full overflow-hidden bg-primary-container/20 border border-outline-variant flex items-center justify-center text-primary font-bold flex-shrink-0">
          <span class="material-symbols-outlined">person</span>
        </div>
        <div>
          <h4 class="font-body-lg font-semibold text-on-surface m-0 group-hover:text-primary transition-colors capitalize">
            ${student.name}
          </h4>
          <div class="font-label-sm text-label-sm text-on-surface-variant m-0 mt-1 flex gap-3">
            <span><strong class="text-on-surface">Roll No:</strong> ${student.roll}</span>
            <span>•</span>
            <span><strong class="text-on-surface">Age:</strong> ${student.age}</span>
          </div>
        </div>
      </div>

      <!-- Right side: Action Buttons -->
      <div class="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 border-outline-variant/30 pt-3 sm:pt-0">
        <button onclick="editStudent(${index})" class="px-3 py-1.5 text-xs font-semibold rounded-lg text-primary hover:bg-primary-container/30 transition-colors flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">edit</span> Edit
        </button>
        <button onclick="deleteStudent(${index})" class="px-3 py-1.5 text-xs font-semibold rounded-lg text-error hover:bg-error-container/30 transition-colors flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">delete</span> Delete
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}


function addStudent() {
  let nameInput = document.getElementById('name');
  let rollInput = document.getElementById('roll');
  let ageInput = document.getElementById('age');

  if (!nameInput.value || !rollInput.value || !ageInput.value) {
    alert("Please fill in all fields");
    return;
  }

  let newStudent = {
    name: nameInput.value.trim(),
    roll: rollInput.value.trim(),
    age: ageInput.value.trim()
  };

  students.push(newStudent);
  localStorage.setItem('students', JSON.stringify(students));

  
    nameInput.value = '';
  rollInput.value = '';
  ageInput.value = '';

  renderStudents();
}


function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));
  renderStudents();
}


function editStudent(index) {
  let student = students[index];
  let newName = prompt("Edit Name:", student.name);
  let newRoll = prompt("Edit Roll Number:", student.roll);
  let newAge = prompt("Edit Age:", student.age);

  if (newName && newRoll && newAge) {
    students[index] = {
      name: newName.trim(),
      roll: newRoll.trim(),
      age: newAge.trim()
    };
    localStorage.setItem('students', JSON.stringify(students));
    renderStudents();
  }
}


document.addEventListener('DOMContentLoaded', renderStudents);