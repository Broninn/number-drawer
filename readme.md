# Sorteador de Números (Number Drawer) 🎲

Uma aplicação web simples e interativa para sortear números aleatórios. Ideal para jogos, sorteios rápidos ou qualquer situação onde você precise de números gerados aleatoriamente com base em critérios específicos.

## ✨ Funcionalidades

- **Quantidade Personalizada:** Defina quantos números você deseja sortear.
- **Intervalo Flexível:** Especifique o número mínimo e máximo para o sorteio.
- **Controle de Repetição:** Escolha se os números sorteados podem ou não se repetir.
- **Interface Intuitiva:** Formulário claro e fácil de usar para configurar seu sorteio.
- **Animação de Resultados:** Os números sorteados são revelados um a um com uma animação suave.
- **Sortear Novamente:** Opção para limpar os resultados e realizar um novo sorteio rapidamente.

## 🚀 Como Usar

1.  **Clone o repositório (opcional):**
    ```bash
    git clone https://github.com/Broninn/number-drawer.git
    cd number-drawer
    ```
2.  **Abra o `index.html`:**
    Abra o arquivo `index.html` diretamente no seu navegador de preferência.

3.  **Configure o Sorteio:**
    *   **Quantidade de números:** Insira quantos números você quer sortear (campo "Sortear ... números").
    *   **Número mínimo:** Defina o menor número possível para o sorteio (campo "Entre ...").
    *   **Número máximo:** Defina o maior número possível para o sorteio (campo "... e ...").
    *   **Não repetir números:** Marque esta caixa se você não quiser que números repetidos apareçam no resultado.

4.  **Sorteie!**
    Clique no botão "Sortear".

5.  **Veja os Resultados:**
    A tela do formulário será substituída pela tela de resultados, onde os números sorteados aparecerão um após o outro.

6.  **Novo Sorteio:**
    Para realizar um novo sorteio com diferentes parâmetros, clique no botão "Sortear Novamente". Isso limpará os resultados anteriores e o levará de volta ao formulário.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização e animações visuais.
- **JavaScript (ES6+):** Lógica do sorteio, manipulação do DOM e interatividade.

## 🎨 Estrutura do Código (JavaScript - `scripts.js`)

- **`DOMContentLoaded`:** Garante que o script só execute após o carregamento completo do HTML.
- **Seleção de Elementos:** Captura dos elementos do formulário e das áreas de resultado.
- **Event Listener no Formulário (`submit`):**
    - Previne o envio padrão do formulário.
    - Valida os dados de entrada.
    - Chama a função `gerarNumerosSorteados`.
    - Manipula a exibição das seções (esconde formulário, mostra resultados).
    - Anima a exibição dos números sorteados individualmente.
- **Event Listener no Botão "Sortear Novamente" (`click`):**
    - Reseta o formulário.
    - Alterna a visibilidade das seções para voltar à tela inicial.
- **Função `gerarNumerosSorteados`:**
    - Lógica principal para gerar os números aleatórios.
    - Implementa a opção de permitir ou não a repetição de números.
    - Retorna os números sorteados ordenados.

---

Divirta-se sorteando!