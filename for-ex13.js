// You have an array of users: [{firstName: ‘’Bob”, lastName: “Bobby”}, {firstName: ‘’Dob”, lastName: “Dobby''}, {firstName: “Tob”, lastName: “Tobby”}]. Insert a div element for each user. Each div must contain an index number, the first name and the last name.

const arrOfUsers = [
  { firstName: "Bob", lastName: "Bobby" },
  { firstName: "Dob", lastName: "Dobby" },
  { firstName: "Tob", lastName: "Tobby" },
];

for (let i = 0; i < arrOfUsers.length; i++) {
  {
    const fullName = arrOfUsers[i].firstName + " " + arrOfUsers[i].lastName;
    const body = document.querySelector("body");
    let createDiv = document.createElement("div");
    createDiv.innerHTML = [i + 1] + " " + fullName;
    //createDiv.innerHTML = arrOfUsers[i].lastName;

    body.appendChild(createDiv);
  }

  console.log(arrOfUsers[i]);
}
