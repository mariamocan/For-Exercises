// You have an array of students:
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
      { id: 100, name: "Math", grades: [7, 10] },
      { id: 102, name: "French", grades: [8] },
    ],
  },
  {
    id: 3,
    name: "Dob",
    courses: [
      { id: 103, name: "Computer Science", grades: [9, 8, 7] },
      { id: 101, name: "English", grades: [10] },
    ],
  },
  {
    id: 4,
    name: "Dobby",
    courses: [
      { id: 104, name: "Geography", grades: [9, 8, 7] },
      { id: 101, name: "English", grades: [10] },
    ],
  },
];
// Create a function to search for a student by id.
// function searchById(stundetId)
// Create another function to search for a student by name.
// function searchById(stundetName)
// For both functions please use the array from outside the function (don’t pass the array to the function as a parameter).

function searchById(studentId) {
  for (let student of arr) {
    if (studentId === student.id) {
      console.log(student);
    }
  }
}
searchById(2);

function searchByName(studentName) {
  for (let student of arr) {
    if (studentName === student.name) {
      console.log(student);
    }
  }
}
searchByName("Dobby");
