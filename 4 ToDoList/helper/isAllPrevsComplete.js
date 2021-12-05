export function isAllPrevsComplete(array, idx) {
  const tmp = array.slice(0, idx);
  const isAllComplete = tmp.every(({ isComplete }) => isComplete);
  
  return isAllComplete;
}