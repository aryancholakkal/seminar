function echo() {

  // get the value from input field
  const name = document.getElementById("name").value;

  // place the greeting in p field
  document.getElementById("greeting").innerHTML = `Hi there ${name}!`;
}