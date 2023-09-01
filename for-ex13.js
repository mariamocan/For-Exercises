// You have an array of users: [{firstName: ‘’Bob”, lastName: “Bobby”}, {firstName: ‘’Dob”, lastName: “Dobby''}, {firstName: “Tob”, lastName: “Tobby”}]. Insert a div element for each user. Each div must contain an index number, the first name and the last name.

const arrOfUsers = [
  { firstName: "Bob", lastName: "Bobby" },
  { firstName: "Dob", lastName: "Dobby" },
  { firstName: "Tob", lastName: "Tobby" },
];

const body = document.querySelector("body");
for (let i = 0; i < arrOfUsers.length; i++) {
  const user = arrOfUsers[i];
  const fullName = user.firstName + " " + user.lastName;
  let createDiv = document.createElement("div");
  createDiv.innerHTML = i + 1 + " " + fullName;
  body.appendChild(createDiv);
  console.log(arrOfUsers[i]);
}

// i = 0 => 0 < 3 => arrOfUsers[0]
