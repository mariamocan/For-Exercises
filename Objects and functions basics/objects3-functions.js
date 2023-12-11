function displaySomething() {
  console.log("Salut");
}

// Very very rare cases when you do such things
displaySomething.x = 1;
displaySomething.y = { name: "AAA", price: 123 };

// What you can often do
const student1 = {
  id: 1,
  name: "Bob",
  displaySomething: displaySomething,
};

// What you can often do
const student2 = {
  id: 1,
  name: "Bob",
  displaySomething: function () {
    console.log("Salut");
  },
};

// One of the usages of "this" keyword
const studentWithFunctionDeclaration = {
  id: 1,
  name: "Bob",
  displaySomething: function () {
    console.log(this);
  },
};

const studentWithArrowFunction = {
  id: 1,
  name: "Bob",
  displaySomething: () => {
    console.log(this);
  },
};

const student = {
  id: 1,
  firstName: "Bob",
  lastName: "Bobby",
  displaySomething: function () {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
};
