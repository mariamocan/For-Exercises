// You have objects that represents some students, e.g.
// {id: 1, firstName: ‘’Bob”, lastName: “Bobby”, grades: [10, 8, 7]},
// {id: 2, firstName: ‘’Dob”, lastName: “Dobby'', grades: [4, 5, 2],
// {id: 3, firstName: ‘’Bob”, lastName: “Hobby”, grades: [10, 9, 10]}
// Create a function that returns the average of a student.

function returnAverage(average) {
  const gradeAverage = average.grades;
  let totalSum = 0;

  for (let i = 0; i < gradeAverage.length; i++) {
    totalSum += gradeAverage[i];
  }

  let computeAverage = totalSum / gradeAverage.length;
  return computeAverage;
}

const studentInf1 = returnAverage({
  id: 1,
  firstName: "Bob",
  lastName: "Bobby",
  grades: [10, 8, 7],
});

const studentInf2 = returnAverage({
  id: 2,
  firstName: "Dob",
  lastName: "Dobby",
  grades: [4, 5, 2],
});

const studentInf3 = returnAverage({
  id: 3,
  firstName: "Bob",
  lastName: "Hobby",
  grades: [10, 9, 10],
});
console.log(studentInf1);
console.log(studentInf2);
console.log(studentInf3);
