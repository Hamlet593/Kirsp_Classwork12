const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const submitBtn = document.getElementById("submitBtn");

let userData = {};

submitBtn.addEventListener('click', () => {

  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const email = emailInput.value;
  const pass = passInput.value;

  userData = {fname, lname, email, pass};

  let json = JSON.stringify(userData);
  alert(json);
})