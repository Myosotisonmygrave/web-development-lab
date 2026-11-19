window.addEventListener("load", () => {
  document.querySelector(".loader")?.classList.add("loader--hidden");
});

const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const dark = matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.dataset.theme || (dark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.querySelectorAll(".card__toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const on = card.classList.toggle("card--flipped");
    btn.setAttribute("aria-pressed", on);
  });
});
