import { sortingOrders } from "../constants/sort.constant.js";

export function sortArr(arr, sortingOrder) {
  if (sortingOrder === sortingOrders.asc) {
    return [...arr].sort((a, b) => a.age - b.age);
  }

  if (sortingOrder === sortingOrders.desc) {
    return [...arr].sort((a, b) => b.age - a.age);
  }

  return arr;
}
