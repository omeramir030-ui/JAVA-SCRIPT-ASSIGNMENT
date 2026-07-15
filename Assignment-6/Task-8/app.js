let arr = [

{ name: "Ali", marks: 80 },

{ name: "Sara", marks: 92 },

{ name: "Ahmed", marks: 65 },

{ name: "Zain", marks: 50 }

]

let mappedArr = arr.map(student => {
    return {
        name: student.name,
    };
});
console.log(mappedArr);

arr.forEach(student => {
    console.log(student.name + " scored " + student.marks + " marks.");
});

function topper(students) {
    let topStudent = students[0];

    students.forEach(student => {
        if (student.marks > topStudent.marks) {
            topStudent = student;
        }
    });

    console.log("Topper:", topStudent.name);
    console.log("Marks:", topStudent.marks);
}

topper(arr);
