const InputNome = document.squerySelector("#nome");
const InputIdade = document.squerySelector("#idade");
const botão = document.squerySelector("#botão");
const resultado = document.squerySelector("#resultado");

botao.addEventListener("click", function () {
const nome = inputNome.value;
const idade = Number(inputIdade.value);

if (idade >= 18) {
    resultado .textContent = "Ola, " + nome + 
}

