// You have the array of students from exercise 18. Create a function that adds a function to all the students that prints the name and the grades of each student.

const arr = [
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
      { id: 100, name: "Math", grades: [5, 2, 3, 5, 10] },
      { id: 101, name: "English", grades: [9, 3, 8] },
      { id: 102, name: "French", grades: [8] },
    ],
  },
  {
    id: 3,
    name: "Dob",
    courses: [
      { id: 103, name: "Computer Science", grades: [9, 8, 7] },
      { id: 101, name: "English", grades: [4] },
    ],
  },
  {
    id: 4,
    name: "Dobby",
    courses: [
      { id: 104, name: "Geography", grades: [9, 2, 7] },
      { id: 101, name: "English", grades: [10, 6] },
    ],
  },
];

displayStudents();
function displayStudents() {
  for (let student of arr) {
    student.showGradesAndName = printNameAndGrade;
  }
}

function printNameAndGrade() {
  console.log(this.name);
  for (let course of this.courses) {
    console.log(course.grades);
  }
}
arr[2].showGradesAndName();
