function displayBundles(data) {
  const bundlesDiv = document.getElementById("bundles");
  data.bundles.forEach((bundle) => {
    const bundleDiv = document.createElement("div");
    bundleDiv.classList.add("card");
    bundleDiv.innerHTML = `
      <img src="${bundle.header_image}" alt="${bundle.Nome}">
      <div class="card-content">
        <h3>${bundle.Nome}</h3>
        <p>${bundle.description}</p>
        <div class="preco-btn-container">
          <p class="preco">R$ ${bundle.cost}</p>
          <a href="${bundle.Link}" target="_blank" rel="noopener noreferrer">Ver na Steam</a>
        </div>
      </div>
    `;
    bundlesDiv.appendChild(bundleDiv);
  });
}

export { displayBundles };
