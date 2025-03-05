document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.querySelector(".footer-container");

  const footerContent = document.createElement("div");
  footerContent.classList.add("footer-content");

  const devOne = createSocialBlock("Matheus Coelho", [
    { href: "https://github.com/matheus-fsc", icon: "fa-brands fa-github" },
    {
      href: "https://www.instagram.com/matheus.fsc/",
      icon: "fa-brands fa-instagram",
    },
    {
      href: "https://steamcommunity.com/id/Link_The_Hero/",
      icon: "fa-brands fa-steam",
    },
  ]);

  const separator = document.createElement("div");
  separator.classList.add("separator");

  const devTwo = createSocialBlock("RIZONCIO", [
    { href: "https://github.com/RIZONCIO", icon: "fa-brands fa-github" },
    {
      href: "https://www.instagram.com/ckt_rv/",
      icon: "fa-brands fa-instagram",
    },
    {
      href: "https://steamcommunity.com/profiles/76561198171340573/",
      icon: "fa-brands fa-steam",
    },
  ]);

  const siteLinks = document.createElement("div");
  siteLinks.classList.add("site-links");
  siteLinks.innerHTML = `
        <a href="#">Sobre</a>
        <a href="#">Termos de Licença</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Contato</a>
    `;

  const company = document.createElement("div");
  company.classList.add("company");
  company.innerHTML = "© 2025 Nome da Empresa. Todos os direitos reservados.";

  footerContent.appendChild(devOne);
  footerContent.appendChild(separator);
  footerContent.appendChild(devTwo);
  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(siteLinks);
  footerContainer.appendChild(company);
});

function createSocialBlock(title, links) {
  const block = document.createElement("div");
  block.classList.add("social-block");

  const heading = document.createElement("h3");
  heading.textContent = title;
  block.appendChild(heading);

  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons");

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.innerHTML = `<i class="${link.icon}"></i>`;
    iconsContainer.appendChild(anchor);
  });

  block.appendChild(iconsContainer);
  return block;
}
