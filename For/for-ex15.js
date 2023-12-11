// ex 14
function filterArray(arr, elementToSearch) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(elementToSearch)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// ex 15
let inputField = document.createElement("input");
document.body.appendChild(inputField);
inputField.oninput = () => {
  const filteredItems = filterArray(list, inputField.value);
  const filteredUl = getUl(filteredItems);
  initialUl.remove();
  document.body.appendChild(filteredUl);
};

// ex 10
const list = [
  "item1",
  "item2",
  "something else",
  "item4",
  "something else 2",
  "item6",
  "item1111",
  "item222",
  "item3123123",
];

function getUl(arr) {
  let ulElement = document.createElement("ul");
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(arr[i]));
    ulElement.appendChild(item);
    if (i % 2 === 1) {
      item.style.color = "blue";
    }
  }
  return ulElement;
}
const initialUl = getUl(list);
document.body.appendChild(initialUl);
