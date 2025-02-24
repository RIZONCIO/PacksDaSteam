document.addEventListener("DOMContentLoaded", () => {
  fetch("/data/packs.json") // Caminho do  JSON
    .then((response) => response.json())
    .then((data) => gerarCards(data))
    .catch((error) => console.error("Erro ao carregar o JSON:", error));
});

function gerarCards(packs) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";

  packs.forEach((pack) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <img src="${pack.imagem}" alt="${pack.titulo}">
          <div class="card-content">
              <h3>${pack.titulo}</h3>
              <p>${pack.descricao}</p>
              <span class="quantidade">${pack.quantidade}</span>
              <a href="${pack.link}" target="_blank" rel="noopener noreferrer">Ver na Steam</a>
          </div>
      `;
    container.appendChild(card);
  });
}
