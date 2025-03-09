document.addEventListener("DOMContentLoaded", function () {
  const creditoContainer = document.getElementById("credito-container");

  creditoContainer.innerHTML = `
        <div class="terminal">
            <div class="terminal-header">
                <div class="icon">
                    <i class="fa-solid fa-terminal"></i>
                    Terminal
                </div>
                <div class="terminal-buttons">
                    <i class="fas fa-window-minimize"></i>  <!-- Minimizar -->
                    <i class="fas fa-window-maximize"></i>  <!-- Maximizar -->
                    <i class="fas fa-times"></i>  <!-- Fechar -->
                </div>
            </div>
            <div class="terminal-body">
                <p id="cmd-texto"></p>
            </div>
        </div>
    `;

  const texto = "C:UsersAdmin> start Credito.txt";
  let index = 0;

  function digitarTexto() {
    if (index < texto.length) {
      document.getElementById("cmd-texto").innerHTML += texto[index];
      index++;
      setTimeout(digitarTexto, 100);
    } else {
      setTimeout(() => {
        mostrarCreditos();
      }, 1000);
    }
  }

  function mostrarCreditos() {
    creditoContainer.innerHTML += `
            <div id="creditos">
                <div class="card">Desenvolvedor: C.K.T</div>
                <div class="card">Design: C.K.T</div>
                <div class="card">Front-End: C.K.T</div>
            </div>
        `;
  }

  // Iniciar a animação de digitação
  setTimeout(digitarTexto, 500);
});
