const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = "Anonimous";
  if (event.currentTarget.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
  }
});
