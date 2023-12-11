// You have the array from exercise 12. Create a function that calculates the average of the grades from each course and assigns it to the grade object. Also calculate the average of averages of courses from each student and assign it to the student object. Please use a separate function to calculate the average, i.e. you should have another function that have the array as a parameter and returns the average:
// function getAverage(grades)
// Example: when you call the function getAverage([9, 2, 7])should return 6.

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
      { id: 100, name: "Math", grades: [5, 10] },
      { id: 101, name: "English", grades: [9, 8] },
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

function averageOfTheGrades(students) {
  for (let student of students) {
    let averagesArray = [];
    for (let course of student.courses) {
      const courseAverage = getAverage(course.grades);
      course.average = courseAverage;
      averagesArray.push(courseAverage);
    }

    student.average = getAverage(averagesArray);
  }
}

function getAverage(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum / numbers.length;
}

averageOfTheGrades(arr);
console.log(arr);
