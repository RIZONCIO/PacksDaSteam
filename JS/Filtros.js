document.addEventListener("DOMContentLoaded", () => {
  const filtroContainer = document.querySelector(".filtro-container");

  // Criando o cabeçalho de resultados e o filtro "Listar por"
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

  // Criando os filtros principais
  const filtros = [
    "Plataforma",
    "Ativação",
    "Sistema",
    "Tipo",
    "Categorias",
    "Distribuidor",
    "Preço",
  ];
  const filtrosWrapper = document.createElement("div");
  filtrosWrapper.className = "filtros-wrapper";

  filtros.forEach((filtro) => {
    const filtroDiv = document.createElement("div");
    filtroDiv.className = "filtro-item";
    filtroDiv.innerHTML = `
            <select>
                <option value="">Selecionar ${filtro}</option>
            </select>
        `;
    filtrosWrapper.appendChild(filtroDiv);
  });

  filtroContainer.appendChild(filtrosWrapper);
});
