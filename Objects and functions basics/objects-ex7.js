const student1 = {
  id: 1,
  firstName: "Bob",
  lastName: "Bobby",
  grades: [10, 8, 7],
};

const student2 = {
  id: 2,
  firstName: "Dob",
  lastName: "Dobby",
  grades: [4, 5, 2],
};

const student3 = {
  id: 3,
  firstName: "Bob",
  lastName: "Hobby",
  grades: [10, 9, 10],
};

// Create a function that has two parameters that change either the firstName or the lastName or both of a student.

function changeNameOfStudent(student, firstName, lastName) {
  if (firstName) {
    student.firstName = firstName;
  }
  if (lastName) {
    student.lastName = lastName;
  }
}

// changeNameOfStudent(student1, "Ion", "Ionescu");
// changeNameOfStudent(student2, "Gheorghe", "Gheorghescu");
// changeNameOfStudent(student3, "George", "Georgescu");

// console.log(student1);
// console.log(student2);
// console.log(student3);

// changeNameOfStudent(student1, "Ion");
// console.log(student1);

changeNameOfStudent(student1, undefined, "Ion");
console.log(student1);

changeNameOfStudent(student2, undefined, "Ion");
console.log(student2);

// let someVariable = undefined, null, 0, '', NaN, false
// if (someVariable) {
// codul de aici nu se executa !!!!!!!!
// }

// Create another function that adds a new grade to a given student.

function addAnewGrade(student, grade) {
  if (grade) {
    student.grades.push(grade);
  }
}
addAnewGrade(student1, 6);
console.log(student1);

// function remmoveGrade(student, grade) {
//   if (grade) {
//     student.grades.splice(grade);
//   }
// }

function remmoveLastGrade(student) {
  student.grades.pop();
}

remmoveLastGrade(student1);
console.log(student1);

function remmoveGrade(student, grade) {
  student.grades.pop(grade);
}

remmoveGrade(student1);
console.log(student1);
