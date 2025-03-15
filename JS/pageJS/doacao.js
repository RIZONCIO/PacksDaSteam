document.addEventListener("DOMContentLoaded", function () {
  const doacaoContainer = document.getElementById("doacao-container");

  doacaoContainer.innerHTML = `
  <div class="banner-principal"></div>
        <div class="banner-doacao">
            <h2>Sua ajuda faz a diferença!</h2>
            <p>Você não é obrigado a doar, mas toda ajuda é bem-vinda!</p>
            <p>Caso possa ajudar no projeto (se souber programar), será ótimo. Se não, você pode doar para manter o projeto de pé.</p>
            <p>Todo o dinheiro arrecadado será usado para melhorar o site e financiar futuros projetos.</p>
            <p>Cada R$1 é bem-vindo! 🚀</p>
        </div>     
    `;
});
