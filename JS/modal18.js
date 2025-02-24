document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("ageVerificationModal");
  const confirmButton = document.getElementById("confirmAge");
  const denyButton = document.getElementById("denyAge");

  modal.style.display = "flex";

  confirmButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Se o usuário negar ou for menor de idade
  denyButton.addEventListener("click", function () {
    alert("Você será redirecionado para a página inicial.");
    window.location.href = "index.html";
  });
});
