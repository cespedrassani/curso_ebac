const handleSubmit = () => {
  const numero1 = document.getElementById("numero-1");
  const numero2 = document.getElementById("numero-2");
  if (parseInt(numero2.value) > parseInt(numero1.value)) {
    const msg = document.getElementById("msg");
    msg.innerHTML = `Muito bem o número A: ${numero1.value} é menor que o número B: ${numero2.value}`;
    msg.style =
      "border-radius: 5px; padding: 5px 10px; background-color: #346751;color: #EDEDED; margin-top: 30px";
  }
};

const handleClear = () => {
  const numero1 = document.getElementById("numero-1");
  numero1.value = "";
  const numero2 = document.getElementById("numero-2");
  numero2.value = "";

  const msg = document.getElementById("msg");
  msg.innerHTML = "";
  msg.style = "";
};

const inputChage = (e, input) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = "";
  msg.style = "";
  const numero1 = document.getElementById("numero-1");
  const numero2 = document.getElementById("numero-2");

  const numero2Error = document.getElementById("numero-2-error");
  numero2Error.innerHTML = "";
  numero2Error.style = "";

  const numero1Error = document.getElementById("numero-1-error");
  numero1Error.innerHTML = "";
  numero1Error.style = "";

  if (input === 1 && numero2.value !== "") {
    if (parseInt(numero2.value) <= parseInt(e.target.value)) {
      numero1Error.innerHTML = "O número A deve ser menor que o número B";
      numero1Error.style =
        "font-size: 11px; border-radius: 5px; padding: 5px 10px; background-color: #7D0633;color: #EDEDED; margin-top: 5px; position: absolute; top: 142px";
    }
  }
  if (input === 2 && numero1.value !== "") {
    if (parseInt(numero1.value) >= parseInt(e.target.value)) {
      numero2Error.innerHTML = "O número B deve ser maior que o número A";
      numero2Error.style =
        "font-size: 11px; border-radius: 5px; padding: 5px 10px; background-color: #7D0633;color: #EDEDED; margin-top: 5px; position: absolute; top: 142px";
    }
  }
};

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

const btnLimpar = document.getElementById("limpar");
btnLimpar.addEventListener("click", handleClear);

const numero1 = document.getElementById("numero-1");
numero1.addEventListener("keyup", (e) => inputChage(e, 1));

const numero2 = document.getElementById("numero-2");
numero2.addEventListener("keyup", (e) => inputChage(e, 2));
