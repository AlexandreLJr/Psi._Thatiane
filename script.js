// Aguarda o carregamento do DOM antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach(card => {
    // Efeito no desktop: abrir ao passar o mouse
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });

    // Efeito no mobile: abrir ao clicar
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});
