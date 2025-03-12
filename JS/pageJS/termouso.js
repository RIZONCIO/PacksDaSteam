document.addEventListener("DOMContentLoaded", function () {
  const termosContainer = document.getElementById("termouso-container");

  if (termosContainer) {
    termosContainer.innerHTML = `
        <section class="termos">
          <h1>Termos de Uso</h1>
          <p>Bem-vindo aos nossos Termos de Uso. Leia atentamente antes de utilizar nossos serviços.</p>
          
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar nosso site, você concorda com estes Termos de Uso.</p>
          
          <h2>2. Uso do Site</h2>
          <p>Você concorda em utilizar nosso site de forma responsável e em conformidade com as leis aplicáveis.</p>
          
          <h2>3. Modificações</h2>
          <p>Reservamo-nos o direito de modificar estes termos a qualquer momento sem aviso prévio.</p>
          
          <h2>4. Contato</h2>
          <p>Se tiver dúvidas sobre estes termos, entre em contato conosco.</p>
        </section>
      `;
  }
});
