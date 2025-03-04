document.addEventListener("DOMContentLoaded", function () {
  // Container onde será inserido o botão
  const container = document.getElementById("theme-toggle-container");

  // Criando o HTML do botão dinamicamente
  container.innerHTML = `
      <label for="theme" class="theme">
        <span class="theme__toggle-wrap">
          <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark">
          <span class="theme__fill"></span>
          <span class="theme__icon">
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
          </span>
        </span>
      </label>
    `;

  const toggleSwitch = document.getElementById("theme");
  const body = document.body;

  // Função para trocar tema
  function switchTheme() {
    if (toggleSwitch.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }

  // Evento de mudança no switch
  toggleSwitch.addEventListener("change", switchTheme);

  // Verifica o tema salvo no localStorage ao carregar a página
  if (localStorage.getItem("theme") === "dark") {
    toggleSwitch.checked = true;
    body.classList.add("dark-mode");
  }
});
