function atualizarUI(user) {
  const userCircle = document.getElementById("userCircle");
  const authText = document.getElementById("authText");

  if (!userCircle || !authText) return; // evita erro se ainda não carregou

  if (user) {
    const nome = user.displayName || user.email;
    const iniciais = nome.trim().charAt(0).toUpperCase();
    userCircle.textContent = iniciais;
    userCircle.style.display = "flex";
    authText.textContent = "Sair";
    authText.style.display = "inline";
  } else {
    userCircle.style.display = "none";
    authText.textContent = "Entrar";
    authText.style.display = "inline";
  }
}

// aguarda o DOM estar pronto e o header renderizado
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const userCircle = document.getElementById("userCircle");
    const authText = document.getElementById("authText");

    if (userCircle && authText) {
      observer.disconnect(); // para de observar quando o header já apareceu
      onAuthStateChanged(auth, (user) => atualizarUI(user));
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
