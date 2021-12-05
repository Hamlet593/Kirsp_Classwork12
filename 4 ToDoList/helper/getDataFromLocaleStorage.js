export function getDataFromLocaleStorage(key) {
  if (localStorage) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return false;
  } else {
    throw new Error("Can't get data form locale storage");
  }
}