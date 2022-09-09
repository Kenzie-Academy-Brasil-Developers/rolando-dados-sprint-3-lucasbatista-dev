let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rollOfDice = 0;
//
function countDados() {
  for (let i = 1; i <= 1000; i++) {
    let primeiroDado = rolandoNumeros(1, 6);
    let segundoDado = rolandoNumeros(1, 6);
    let resultado = primeiroDado + segundoDado;
    count[resultado] += 1;
  }
  return count;
}
countDados();
//Função para rodar os dados e somar os resultados
function rolandoNumeros(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 2; i <= 12; i++) {
  document.querySelector(".lista_dados").insertAdjacentHTML(
    "afterbegin",
    `
      <li class="dados">
        <div class="container_dados">
          <h2 class="sequencia">${i}: ${count[i]}</h2>
          <div class="barra_tamanho"></div>
        </div>  
      </li>   
  `
  );
  let minhaBarra = document.querySelector(".barra_tamanho");
  minhaBarra.style.width = `${count[i]}px`;
}
