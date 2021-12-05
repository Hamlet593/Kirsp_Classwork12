export function setDataToLocaleStorage(key, value) {
  if (localStorage) {
    const jsonStr = JSON.stringify(value);
    localStorage.setItem(key, jsonStr);
    return true;
  }
  return false;
}