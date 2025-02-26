document.querySelector(".filters-container").innerHTML = `
  <h2 class="text-cataloga">Catálogo</h2>
  <input type="text" class="search" placeholder="Pesquise..">
  <div class="total-packs">
    <p>Total de Bundle: <span class="total-packs-value">0</span></p>
  </div>
  <div class="filters-group">
    <div class="dropdown-order">
      <button class="dropbtn">Preço</button>
      <div class="dropdown-content">
        <a data-order="popular">Mais Procurados</a>
        <a data-order="name">Ordem Alfabética</a>
        <a data-order="price-asc">Crescente</a>
        <a data-order="price-desc">Decrescente</a>
      </div>
    </div>
    <div class="dropdown-menu">
      <button class="dropbtn">Categorias</button>
      <div class="dropdown-content"></div>
    </div>
  </div>
`;

// Lógica dos dropdowns
document.querySelectorAll(".dropbtn").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
});

// Fechar dropdown ao clicar fora
window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropbtn")) {
    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  }
});
