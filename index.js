const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit() {
  const message = document.getElementById("mensagem");
  message.style = "color: green";
  message.textContent = "Form válido.";

  if (
    parseInt(document.querySelector("#numeroA").value) >
    parseInt(document.querySelector("#numeroB").value)
  ) {
    message.style = "color: red";
    message.textContent = "Número B deve ser maior que número A.";
  }
}
