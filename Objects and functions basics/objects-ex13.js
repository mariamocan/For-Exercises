// You have the array from exercise 12. Create a function that returns all the distinct grades from all the courses, i.e.  [9, 8, 7, 10, 5, 4, 2, 6]
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

function distinctGrades(students) {
  const filteredGrades = [];
  for (let student of students) {
    for (let course of student.courses) {
      for (let grade of course.grades) {
        const existsGradeInFilteredGrades = gradeExistsInArray(
          grade,
          filteredGrades
        );
        console.log(existsGradeInFilteredGrades);

        if (!existsGradeInFilteredGrades) {
          filteredGrades.push(grade);
        }
      }
    }
  }
  console.log(filteredGrades);
}

const g = 8;
const gradesTest = [10, 7, 7];
function gradeExistsInArray(gradeToFind, grades) {
  for (let grade of grades) {
    if (grade === gradeToFind) {
      return true;
    }
  }
  return false;
}

distinctGrades(arr);
