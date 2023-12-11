// You have an array of objects that represents some students, e.g.
// [{id: 1, firstName: ‘’Bob”, lastName: “Bobby”, grades: [10, 8, 7]},
// {id: 2, firstName: ‘’Dob”, lastName: “Dobby'', grades: [4, 5, 2],
// {id: 3, firstName: ‘’Bob”, lastName: “Hobby”, grades: [10, 9, 10]}]
// Create a function that returns all the averages of the students. The function will also have a second optional parameter displayOnlyPassingStudents. If this is set to true, then the function will return only the students that have the average over 5.

const studentInformations = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "Bobby",
    grades: [10, 8, 7],
  },
  {
    id: 2,
    firstName: "Dob",
    lastName: "Dobby",
    grades: [4, 5, 2],
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Hobby",
    grades: [10, 9, 10],
  },
];

function getAverageOfStudents(students, displayOnlyPassingStudents) {
  for (const student of students) {
    let sum = 0;

    for (const grade of student.grades) {
      sum += grade;
    }

    let average = sum / student.grades.length;

    if (displayOnlyPassingStudents) {
      if (average > 5) {
        console.log(student.firstName, average);
      }
    } else {
      console.log(student.firstName, average);
    }
  }
}
// true && true = true
// false && true = false
// true && false = false
// false && false = false

// true || true = true
// false || true = true
// true || false = true
// false || false = false
getAverageOfStudents(studentInformations, true);
