import { sortArr } from "./helpers/sortArr.helper.js";
import { sortingOrders } from "./constants/sort.constant.js";
import { createTableRow } from "./helpers/createTableRow.helper.js";

const ageCell = document.getElementById("ageCell");
const tbody = document.getElementById("tbody");

const store = {
  sortingOrder: sortingOrders.random,
  studens: [
    {
      name: "Elon Musk",
      age: 56,
      grade: 67,
    },
    {
      name: "Elon Musk",
      age: 4,
      grade: 67,
    },
    {
      name: "Elon Musk",
      age: 15,
      grade: 67,
    },
    {
      name: "Elon Musk",
      age: 65,
      grade: 67,
    },
  ],
};

function render(studens, body) {
  body.innerHTML = "";
  studens.forEach((student) => {
    createTableRow(student, body);
  });
}

render(store.studens, tbody);

ageCell.addEventListener("click", () => {
  switch (store.sortingOrder) {
    case sortingOrders.random:
      store.sortingOrder = sortingOrders.asc;
      let sortedDataAsc = sortArr(store.studens, store.sortingOrder);
      render(sortedDataAsc, tbody);
      break;
    case sortingOrders.asc:
      store.sortingOrder = sortingOrders.desc;
      let sortedDataDesc = sortArr(store.studens, store.sortingOrder);
      render(sortedDataDesc, tbody);
      break;
    case sortingOrders.desc:
      store.sortingOrder = sortingOrders.random;
      render(store.studens, tbody);
      break;
    default:
      throw new Error("oooooo");
  }
});