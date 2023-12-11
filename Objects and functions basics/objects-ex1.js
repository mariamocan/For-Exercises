// You have objects that represents some users, e.g.
//  {id: 1, firstName: ‘’Bob”, lastName: “Bobby”},
//  {id: 2, firstName: ‘’Dob”, lastName: “Dobby''}.
// Create a function that returns the full name of a user.

function getFullName(student) {
  // return full name of the student
  const fullName = student.firstName + " " + student.lastName;
  return fullName;
}

const fullName1 = getFullName({ id: 1, firstName: "Bob", lastName: "Bobby" });

const fullName2 = getFullName({ id: 2, firstName: "Dob", lastName: "Dobby" });
console.log(fullName1);
console.log(fullName2);
