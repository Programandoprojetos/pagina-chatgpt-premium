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
