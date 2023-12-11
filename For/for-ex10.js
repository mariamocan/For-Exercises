// Create a list in html using the ul and li tags to represent the following array [“Item 1”, “Item 2”, “Item 3”, “Item 4”, “Item 5”, “Item 6”]. Items 2, 4, 6 must be coloured in blue.

const list = ["item1", "item2", "item3", "item4", "item5", "item6"];

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
document.body.appendChild(getUl(list));
