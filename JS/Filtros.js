document.addEventListener("DOMContentLoaded", () => {
  const filtroContainer = document.querySelector(".filtro-container");

  // Cabeçalho
  const header = document.createElement("div");
  header.className = "filtro-header";
  header.innerHTML = `
        <span class="resultados">5784 resultados</span>
        <div class="listar-por">
            <span>Listar por:</span>
            <select>
                <option value="mais-procurados">MAIS PROCURADOS</option>
                <option value="ordem-alfabetica">ORDEM ALFABÉTICA</option>
                <option value="menor-preco">MENOR PREÇO</option>
                <option value="maior-preco">MAIOR PREÇO</option>
            </select>
        </div>
    `;
  filtroContainer.appendChild(header);

  // Lista de filtros e suas opções
  const filtros = {
    Sistema: ["Windows", "Linux-SteamOS"],
    Tipo: ["Jogo Completo", "DLC", "Pacote de Moeda", "Jogos Adultos"],
    Gêneros: [
      "Ação",
      "RPG",
      "Aventura",
      "Battle Royale",
      "Esportes",
      "Simulação",
      "Estratégia",
      "Corrida",
      "Terror",
      "Quebra-cabeça",
      "Plataforma",
      "Luta e Artes Marciais",
      "Mundo Aberto",
      "Musical",
      "Ritmo",
      "Cartas",
      "Tabuleiro",
      "Casual",
      "Indie",
      "Tabuleiro e Cartas",
      "Realidade Virtual (VR)",
      "Hack and Slash",
      "MMO (Massively Multiplayer Online)",
      "MOBA (Multiplayer Online Battle Arena)",
      "FPS (First-Person Shooter)",
      "RTS (Estratégia Em Tempo Real)",
    ],
    Distribuidor: [
      "Ubisoft",
      "EA",
      "Rockstar",
      "Capcom",
      "Deep Silver",
      "Square Enix",
      "Bethesda",
      "Activision",
      "CD Projekt Red",
      "Konami",
      "Bandai Namco",
      "Sega",
      "Sony",
      "Microsoft",
      "Valve",
      "Telltale Games",
      "Nexon",
      "NCSOFT",
      "Outros",
    ],
    Preço: ["Até R$50", "R$50 - R$100", "R$100 - R$500", "Acima de R$500"],
  };

  const filtrosWrapper = document.createElement("div");
  filtrosWrapper.className = "filtros-wrapper";

  Object.entries(filtros).forEach(([filtro, opcoes]) => {
    const filtroDiv = document.createElement("div");
    filtroDiv.className = "filtro-item";
    filtroDiv.innerHTML = `
            <button class="filtro-btn">${filtro} ▼</button>
            <ul class="filtro-dropdown">
                ${opcoes
                  .map(
                    (opcao) => `
                    <li>
                        <label>
                            <input type="checkbox" value="${opcao}">
                            ${opcao}
                        </label>
                    </li>`
                  )
                  .join("")}
            </ul>
        `;
    filtrosWrapper.appendChild(filtroDiv);
  });

  filtroContainer.appendChild(filtrosWrapper);

  document.querySelectorAll(".filtro-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle("ativo");

      // Fecha outros dropdowns ao abrir um novo
      document.querySelectorAll(".filtro-dropdown").forEach((menu) => {
        if (menu !== dropdown) menu.classList.remove("ativo");
      });
    });
  });

  // Fecha os dropdowns ao clicar fora
  document.addEventListener("click", () => {
    document.querySelectorAll(".filtro-dropdown").forEach((menu) => {
      menu.classList.remove("ativo");
    });
  });
});
