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
      
      <div class="doacao-container">
          <!-- Card Pix -->
          <div class="doacao-card">
              <h3>Doe via Pix</h3>
              <p>Escaneie o QR Code ou copie a chave Pix.</p>
              <img id="qr-pix" src="" alt="QR Code Pix">
              <button class="btn-card-doacao"id="copiar-chave">Copiar Chave Pix</button>
          </div>
  
          <!-- Card Criptomoedas -->
          <div class="doacao-card">
              <h3>Doe via Criptomoedas</h3>
              <p>Escolha sua moeda e escaneie o QR Code.</p>
              <select id="cripto-selecao">
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="USDT">Tether (USDT)</option>
                  <option value="ETH">Ethereum (ETH)</option>
              </select>
              <img id="qr-cripto" src="" alt="QR Code Criptomoeda">
              <button class="btn-card-doacao" id="copiar-carteira">Copiar Endereço</button>
          </div>
      </div>
    `;

  const chavePix = "MY_PIX_KEY";
  const carteiras = {
    BTC: "ENDERECO_BTC",
    USDT: "ENDERECO_USDT",
    ETH: "ENDERECO_ETH",
  };

  // Gerar QR Code Pix
  document.getElementById(
    "qr-pix"
  ).src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    chavePix
  )}`;

  // Copiar chave Pix
  document
    .getElementById("copiar-chave")
    .addEventListener("click", function () {
      navigator.clipboard.writeText(chavePix);
      alert("Chave Pix copiada!");
    });

  // Gerar QR Code para criptomoedas
  const criptoSelecao = document.getElementById("cripto-selecao");
  const qrCripto = document.getElementById("qr-cripto");

  function atualizarQRCode() {
    const moeda = criptoSelecao.value;
    qrCripto.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      carteiras[moeda]
    )}`;
  }
  criptoSelecao.addEventListener("change", atualizarQRCode);
  atualizarQRCode();

  // Copiar endereço de criptomoeda
  document
    .getElementById("copiar-carteira")
    .addEventListener("click", function () {
      const moeda = criptoSelecao.value;
      navigator.clipboard.writeText(carteiras[moeda]);
      alert(`${moeda} Endereço copiado!`);
    });
});
