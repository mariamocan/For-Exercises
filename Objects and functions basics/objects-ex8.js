// You have the array of students
let arrofStudents = [
  {
    id: 1,
    name: "Bob",
    courses: [
      { id: 100, name: "Math", grades: [9, 8, 7] },
      { id: 101, name: "English", grades: [10] },
    ],
  },
  {
    id: 2,
    name: "Bobby",
    courses: [
      { id: 100, name: "Math", grades: [7, 10] },
      { id: 102, name: "French", grades: [8] },
    ],
  },
];
// Create a function that adds a new grade for a course to a given student. The function should look like:
// function addGrade(studentId, courseName, grade)
// The function should be called like this
// function addGrade(1, ’Math’, 10) // adds grade 10 to Math for Bob
// function addGrade(2, French, 8) // adds grade 8 to French for Bobby
function addGrade(studentId, courseName, grade) {
  for (let student of arrofStudents) {
    for (let course of student.courses) {
      if (studentId === student.id && courseName === course.name) {
        course.grades.push(grade);
      }
    }
  }
}

addGrade(1, "Math", 10);
addGrade(2, "French", 8);
console.log(arrofStudents);
