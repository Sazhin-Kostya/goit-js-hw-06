const categorylist = document.querySelectorAll("#categories .item");

console.log('Number of categories:', categorylist.length);

const listEl = document.querySelectorAll(".item")
console.log('Elements:', listEl);

listEl.forEach(function (element) {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});