// Animação leve nos produtos quando aparecem
document.addEventListener("DOMContentLoaded", () => {
  const produtos = document.querySelectorAll(".produto");
  produtos.forEach((produto, i) => {
    produto.style.opacity = "0";
    produto.style.transform = "translateY(30px)";
    setTimeout(() => {
      produto.style.transition = "all 0.6s ease";
      produto.style.opacity = "1";
      produto.style.transform = "translateY(0)";
    }, i * 200);
  });
});
