// You have an array of students:
const arrOfStudenti = [
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
      { id: 100, name: "Math", grades: [7, 10] },
      { id: 102, name: "French", grades: [8] },
    ],
  },
  {
    id: 3,
    name: "Dob",
    courses: [
      { id: 103, name: "Computer Science", grades: [9, 8, 7] },
      { id: 101, name: "English", grades: [10] },
    ],
  },
  {
    id: 4,
    name: "Dobby",
    courses: [
      { id: 104, name: "Geography", grades: [9, 8, 7] },
      { id: 101, name: "English", grades: [10] },
    ],
  },
];
// Create a function that returns an array with all the distinct courses that can be found on the array of students, i.e. it should return
// [
//     {id: 100, name: 'Math'},
//     {id: 101, name: 'English'},
//     {id: 102, name: 'French'},
//     {id: 103, name: 'Computer Science'},
//     {id: 104, name: 'Geography'}
// ]

function distinctCourses(students) {
  const filteredCourses = [];
  for (let student of students) {
    for (let course of student.courses) {
      const existsCourseInFilteredCourses = courseExistsInArray(
        course,
        filteredCourses
      );
      console.log(existsCourseInFilteredCourses);

      if (!existsCourseInFilteredCourses) {
        filteredCourses.push({
          courseId: course.id,
          courseName: course.name,
        });
      }
    }
  }
  console.log(filteredCourses);
}

function courseExistsInArray(courseToFind, courses) {
  for (let course of courses) {
    if (course.courseName === courseToFind.name) {
      displayBravo();
      return true;
    }
  }
  return false;
}

function displayBravo() {
  console.log("bravo!!!");
}

distinctCourses(arrOfStudenti);
