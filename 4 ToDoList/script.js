import { isAllPrevsComplete } from "./helper/isAllPrevsComplete.js";
import { setDataToLocaleStorage } from "./helper/setDataToLocaleStorage.js";
import { getDataFromLocaleStorage } from "./helper/getDataFromLocaleStorage.js";

const doDoList = document.querySelector("#todo-list");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");

function render(items) {
  if (!items) {
    setDataToLocaleStorage("toDoList", []);
    return;
  }

  doDoList.innerHTML = "";

  items.forEach(({ value, isComplete, id }, index) => {
    const node = document.createElement("li");
    node.innerText = value;

    node.classList.add("todo");

    if (isComplete) {
      node.style.textDecoration = "line-through";
    }

    node.addEventListener("click", () => {
      let localeStorageData = getDataFromLocaleStorage("toDoList");

      if (isAllPrevsComplete(localeStorageData, index)) {
        localeStorageData = localeStorageData.map((item) =>
          item.id === id ? { ...item, isComplete: !item.isComplete } : item
        );
        setDataToLocaleStorage("toDoList", localeStorageData);

        render(localeStorageData);
      } else {
        alert("Prev tasks are not complete");
      }
    });

    doDoList.appendChild(node);
  });
}

addBtn.addEventListener("click", () => {
  let localeStorageData = getDataFromLocaleStorage("toDoList");
  const value = input.value.trim();
  const id = localeStorageData.length;
  input.value = "";

  if (value) {
    const newItem = { value, id, isComplete: false };
    localeStorageData = [...localeStorageData, newItem];
    setDataToLocaleStorage("toDoList", localeStorageData);
    render(localeStorageData);
  } else {
    alert("Invalid Input");
  }
});

const toDoListItems = getDataFromLocaleStorage("toDoList");

render(toDoListItems);