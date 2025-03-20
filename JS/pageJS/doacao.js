document.addEventListener("DOMContentLoaded", function () {
  const doacaoContainer = document.getElementById("doacao-container");

  const comidas = [
    { nome: "um café", icone: "fas fa-coffee" },
    { nome: "um hambúrguer", icone: "fas fa-hamburger" },
    { nome: "uma pizza", icone: "fas fa-pizza-slice" },
    { nome: "um sushi", icone: "fas fa-fish" },
    { nome: "um sorvete", icone: "fas fa-ice-cream" },
    { nome: "um maçã", icone: "fa fa-apple-whole" },
    { nome: "um hot-dog", icone: "fas fa-hotdog" },
    { nome: "um waffle", icone: "fa fa-stroopwafel" },
  ];

  const comidaEscolhida = comidas[Math.floor(Math.random() * comidas.length)];

  function criarBannerFoods() {
    return `
          <div class="banner-foods">
              <i class="${comidaEscolhida.icone}"></i>
              <p>Me pague ${comidaEscolhida.nome}</p>
          </div>
      `;
  }

  doacaoContainer.innerHTML = `
    <div class="banner-principal"></div>
    <div class="banner-doacao">
        <h1>Sua doação mantém o projeto vivo!</h1>
        <p>Não é obrigatório doar, mas cada contribuição — seja de tempo, conhecimento ou recursos — faz toda a diferença.</p>
        <h2>Como ajudar?</h2>
        <p> Se você programa, colabore com código! Precisamos de mentes criativas para evoluir a plataforma.</p>
        <p>Se prefere doar, qualquer valor ajuda a pagar servidores, melhorar o site e criar novos projetos.</p>
        <h2>Para onde vai seu dinheiro?</h2>
        <p>Atualizações técnicas e segurança.</p>
        <p>Novas funcionalidades para todos.</p>
        <p>Manutenção mensal (sem isso, o site não funciona!)</p>
        <h2>Nem R$1,00 é pouco.</h2>
        <p>Até um cafézinho pode sustentar o projeto por mais um dia.</p>
        <p>Obrigado por acreditar na gente!🫡</p>
    </div> 
    
    <div class="doacao-container">
        <!-- Card Mercado Pago -->
        <div class="doacao-card">
            ${criarBannerFoods()}
            <h3>Doe via Mercado Pago</h3>
            <p>Escaneie o QR Code para ser redirecionado.</p>
            <img id="qr-mercado-pago" src="" alt="QR Code Mercado Pago">
            <a href="http://link.mercadopago.com.br/steambundlesetdoacao" target="_blank" class="btn-card-doacao-pago">Ir para o Mercado Pago</a>
        </div>

        <!-- Card Criptomoedas -->
        <div class="doacao-card">
            ${criarBannerFoods()}
            <h3>Doe via Criptomoedas Na Binance</h3>
            <p>Escaneie o QR Code ou copie o ID.</p>
            <img src="../img/Cripto.png" alt="QR Code Binance">
            <button class="btn-card-doacao" id="copiar-carteira">Copiar ID</button>
        </div>
    </div>
  `;

  const linkMercadoPago = "http://link.mercadopago.com.br/steambundlesetdoacao";
  document.getElementById(
    "qr-mercado-pago"
  ).src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    linkMercadoPago
  )}`;
  document
    .getElementById("copiar-carteira")
    .addEventListener("click", function () {
      const idBinance = "1025750319";
      navigator.clipboard
        .writeText(idBinance)
        .then(() => alert("ID da Binance copiado!"))
        .catch((err) => console.error("Erro ao copiar:", err));
    });
});
