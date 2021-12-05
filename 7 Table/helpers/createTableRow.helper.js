export function createTableRow(data, body) {

  const { name, age, grade } = data;
  const row = document.createElement("tr");
  body.appendChild(row);
  const nameCell = document.createElement("td");
  nameCell.innerText = name;
  const ageCell = document.createElement("td");
  ageCell.innerText = age;
  const gradeCell = document.createElement("td");
  gradeCell.innerText = grade;
  row.append(nameCell, ageCell, gradeCell);
  
}