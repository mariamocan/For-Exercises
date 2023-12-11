// You have the array of students from 7. Create a function with the following signature
// function getGradesComputation(message, gradesFn)
// The following code
// getGradesComputation(grades => {
//   return Math.min(...grades);
// });
// should display in the console the following messages:
// The lowest grade of Bob Bobby is 7
// The lowest grade of Dob Dobby is 2
// The lowest grade of Bob Hobby is 9

// The following code
// getGradesComputation(grades => {
//   return Math.max(...grades);
// });
// should display in the console the following messages:
// The greatest grade of Bob Bobby is 10
// The greatest grade of Dob Dobby is 5
// The greatest grade of Bob Hobby is 10

// The following code
// getGradesComputation(grades => {
//   return getAverage(grades);
// });
// should display in the console the following messages:
// The average of grades of Bob Bobby is 8.3333
// The average of grades of Dob Dobby is 3.6666
// The average of grades of Bob Hobby is 9.6666
// Note that you should also write the code for getAverage

const students = [
  { id: 1, firstName: "Bob", lastName: "Bobby", grades: [10, 8, 7] },
  { id: 2, firstName: "Dob", lastName: "Dobby", grades: [4, 5, 2] },
  { id: 3, firstName: "Bob", lastName: "Hobby", grades: [10, 9, 10] },
];
