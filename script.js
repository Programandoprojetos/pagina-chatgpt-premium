const countdownEl = document.querySelector("#countdown");

const pad = (value) => String(value).padStart(2, "0");

function renderCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const diff = Math.max(0, end.getTime() - now.getTime());
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);

  if (countdownEl) {
    countdownEl.textContent = `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }
}

renderCountdown();
setInterval(renderCountdown, 1000);

const checkoutForm = document.querySelector("#pedido");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(checkoutForm);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();

    const message = [
      "Quero garantir meu acesso ao ChatGPT Premium por R$30,00.",
      "",
      `Nome: ${nome}`,
      `E-mail de acesso: ${email}`,
      `WhatsApp: ${telefone}`,
    ].join("\n");

    const url = `https://wa.me/5564981084172?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
