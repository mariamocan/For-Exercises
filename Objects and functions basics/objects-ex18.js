// You have the array of students
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
// Create a function that calculates the minimum and the maximum grade of each course for each student and assign it to the course.

function assignGrades(students) {
  for (let student of students) {
    for (let course of student.courses) {
      course.minGrade = getMinGrade(course.grades);
      course.maxGrade = getMaxGrade(course.grades);
    }
  }
}

function getMinGrade(nums) {
  let min = nums[0];
  for (let num of nums) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

// function getMinGrade(nums) {
//   return Math.min(...nums);
// }

function getMaxGrade(nums) {
  return Math.max(...nums);
}

assignGrades(arr);
console.log(arr);
