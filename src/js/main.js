$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereço: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Insira o seu nome",
      email: "Insira o seu e-mail",
      telefone: "Insira o seu telefone",
      cpf: "Insira o seu CPF",
      endereço: "Insira o seu endereço",
      cep: "Insira o seu CEP",
    },
    submitHandler: function (form) {
      alert("O formulário validado com sucesso!");
      form.submit();
    },
  });
});
