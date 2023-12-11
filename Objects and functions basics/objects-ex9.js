// You have an empty array (outside any function). Create a function that adds a student to the array. It should look like:

// const arrOfStudents = [];

// function addStudent(id, name, courses) {
// function
// }
// And it should be called like:
// const course1 = { id: 100, name: "Math", grades: [7, 10] };
// const course2 = { id: 102, name: "French", grades: [8] };
// addStudent(1, "Bob", [course1, course2]);

// addStudent(2, "Bobby", [
//   { id: 100, name: "Math", grades: [9, 8, 7] },
//   { id: 101, name: "English", grades: [10] },
// ]);

// const courses = [
//   { id: 100, name: "Computer Science", grades: [9, 8, 7] },
//   { id: 101, name: "English", grades: [10] },
// ];
// addStudent(3, "Dob", courses);

// Note that I called the function using 3 methods: the first one is building the courses objects and writes an inline array, the second is inlining the array and the objects, the third is not inlining anything.

const arrOfStudents = [];

function addStudent(id, name, courses) {
  // Approach 1
  // const student = {
  //   id: id,
  //   name: name,
  //   courses: courses,
  // };
  // arrOfStudents.push(student);

  // Approach 2
  arrOfStudents.push({
    id: id,
    name: name,
    courses: courses,
  });
}
// And it should be called like:
const course1 = { id: 100, name: "Math", grades: [7, 10] };
const course2 = { id: 102, name: "French", grades: [8] };
addStudent(1, "Bob", [course1, course2]);

addStudent(2, "Bobby", [
  { id: 100, name: "Math", grades: [9, 8, 7] },
  { id: 101, name: "English", grades: [10] },
]);

const courses = [
  { id: 100, name: "Computer Science", grades: [9, 8, 7] },
  { id: 101, name: "English", grades: [10] },
];
addStudent(3, "Dob", courses);

console.log(arrOfStudents);
