// You have the array from the result of 14. Create a function that returns an array with all the courses with average greater or equal to 8. The result should look like:
// [
//     {id: 100, name: 'Math', average: 8},
//     {id: 101, name: 'English', average: 10},
//     {id: 101, name: 'English', average: 8.5},
//     {id: 102, name: 'French', average: 8},
//     {id: 103, name: 'Computer Science', average: 8},
//     {id: 101, name: 'English', average: 8}
// ]

const arr = [
  {
    id: 1,
    name: "Bob",
    courses: [
      { id: 100, name: "Math", grades: [9, 8, 7], average: 8 },
      { id: 101, name: "English", grades: [10], average: 10 },
    ],
    average: 9,
  },
  {
    id: 2,
    name: "Bobby",
    courses: [
      { id: 100, name: "Math", grades: [5, 10], average: 7.5 },
      { id: 101, name: "English", grades: [9, 8], average: 8.5 },
      { id: 102, name: "French", grades: [8], average: 8 },
    ],
    average: 8,
  },
  {
    id: 3,
    name: "Dob",
    courses: [
      { id: 103, name: "Computer Science", grades: [9, 8, 7], average: 8 },
      { id: 101, name: "English", grades: [4], average: 4 },
    ],
    average: 6,
  },
  {
    id: 4,
    name: "Dobby",
    courses: [
      { id: 104, name: "Geography", grades: [9, 2, 7], average: 6 },
      { id: 101, name: "English", grades: [10, 6], average: 8 },
    ],
    average: 7,
  },
];

function coursesWithAverageGraterOrEqualToEight(arr) {
  let arrayWithGradesBiggerThanEight = [];
  for (let student of arr) {
    for (let course of student.courses) {
      if (course.average >= 8) {
        arrayWithGradesBiggerThanEight.push({
          id: course.id,
          name: course.name,
          average: course.average,
        });
      }
    }
  }
  console.log(arrayWithGradesBiggerThanEight);
}

coursesWithAverageGraterOrEqualToEight(arr);
