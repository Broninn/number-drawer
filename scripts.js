document.addEventListener("DOMContentLoaded", () => {
  const formularioSorteio = document.getElementById("formularioSorteio");

  const inputQuantidade = document.getElementById("totalNumber");
  const inputMinimo = document.getElementById("fromNumber");
  const inputMaximo = document.getElementById("toNumber");

  const drawer = document.getElementById("drawer");
  const result = document.getElementById("result");
  const botaoSortearNovamente = document.getElementById("sortearNovamente");

  formularioSorteio.addEventListener("submit", (e) => {
    e.preventDefault();

    const quantidade = parseInt(inputQuantidade.value);
    const min = parseInt(inputMinimo.value);
    const max = parseInt(inputMaximo.value);

    const permitirRepeticao = !document.getElementById("no-repeat").checked;

    if (isNaN(quantidade) || isNaN(min) || isNaN(max)) {
      alert("Preencha todos os campos com números válidos.");
      return;
    }
    if (quantidade <= 0) {
      alert("A quantidade deve ser maior que zero.");
      return;
    }
    if (min >= max) {
      alert("O número mínimo deve ser menor que o máximo.");
      return;
    }
    if (quantidade > max - min + 1) {
      alert("Quantidade maior que o intervalo disponível.");
      return;
    }

    const numeros = gerarNumerosSorteados(
      quantidade,
      min,
      max,
      permitirRepeticao
    );

    // Exibe os resultados
    drawer.style.display = "none";
    result.style.display = "block";

    // Substitui o elemento individual por um container
    const resultsContainer = document.querySelector("#result .results");
    resultsContainer.innerHTML = ""; // Limpa resultados anteriores

    numeros.forEach((numero, index) => {
      setTimeout(() => {
        const resultElement = document.createElement("div");
        resultElement.className = "result-container";
        resultElement.style.opacity = "0"; // começa invisível

        resultElement.innerHTML = `
      <div class="rotating-wrapper">
        <div class="number-background"></div>
      </div>
      <div class="number-foreground">${numero}</div>
    `;

        resultsContainer.appendChild(resultElement);

        // Aparece e exibe após inserir
        requestAnimationFrame(() => {
          resultElement.style.transition = "opacity 0.5s ease";
          resultElement.style.opacity = "1";
        });
      }, index * 1500); // 1 segundo entre cada número
    });
  });

  botaoSortearNovamente.addEventListener("click", () => {
    formularioSorteio.reset();
    drawer.style.display = "block";
    result.style.display = "none";
  });

  function gerarNumerosSorteados(quantidade, min, max, permitirRepeticao) {
    const sorteados = [];

    if (permitirRepeticao) {
      for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        sorteados.push(numero);
      }
    } else {
      const numerosDisponiveis = [];
      for (let i = min; i <= max; i++) {
        numerosDisponiveis.push(i);
      }

      for (let i = 0; i < quantidade; i++) {
        const index = Math.floor(Math.random() * numerosDisponiveis.length);
        sorteados.push(numerosDisponiveis.splice(index, 1)[0]);
      }
    }

    return sorteados.sort((a, b) => a - b);
  }
});
