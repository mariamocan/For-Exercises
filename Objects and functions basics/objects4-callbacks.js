// A callback is a function that is called by another function
// function displayMyMessage(fn) {
//   console.log(fn());
// }

// function f1() {
//   console.log("Salut");
// }

// function f2() {
//   console.log("Salut din nou");
// }

// const f3 = () => {
//   console.log("Salut din nou from arrow function");
// };

// const f4 = () => console.log("Salut din nou from arrow function");

// // Nu pun paranteze, din cauza ca ma folosesc de functia mea ca de un obiect
// displayMyMessage(f1); // normal functions
// displayMyMessage(f2);
// displayMyMessage(function () {
//   console.log("Looks very ugly");
// });
// displayMyMessage(() => "Salut from arrow function"); // called with anonymus arrow function
// displayMyMessage(f3); // called with arrow function

// A callback that makes use of a parameter

// function displayStudentDetails(fn) {
//   const student = {
//     id: 1,
//     firstName: "Bob",
//     lastName: "Bobby",
//     address: "ABC Street",
//     courses: [
//       { id: 100, name: "IT" },
//       { id: 101, name: "English" },
//     ],
//   };
//   fn(student);
// }

// function displayName(stud) {
//   console.log(stud.firstName);
// }

// function displayLastName(stud) {
//   console.log(stud.lastName);
// }

// function displayFullName(stud) {
//   console.log(stud.lastName + stud.firstName);
// }

// function displayCourses(stud) {
//   console.log(stud.courses);
// }

// function displayCoursesNames(stud) {
//   for (const course of stud.courses) {
//     console.log(course.name);
//   }
// }

// displayStudentDetails(displayName);
// displayStudentDetails(displayLastName);
// displayStudentDetails(displayFullName);
// displayStudentDetails(displayCourses);
// displayStudentDetails(displayCoursesNames);
// displayStudentDetails((stud) => console.log(stud.address));
// displayStudentDetails((stud) => {
//   console.log(
//     "Studentul " + stud.firstName + " locuieste pe strada " + stud.address
//   );
// });

// function displayMessageAfterMilliseconds(fn, milliseconds) {
//   setTimeout(() => {
//     fn();
//   }, milliseconds);
// }

// function a() {
//   console.log("a");
// }
// function b() {
//   console.log("b");
// }
// displayMessageAfterMilliseconds(a, 3000);
// displayMessageAfterMilliseconds(b, 2000);
