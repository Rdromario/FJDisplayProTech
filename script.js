// ============================================================
// FJ DisplayPro Tech — LP moderna (tema claro)
// ============================================================

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll("[data-compare]").forEach((panel) => {
  const range = panel.querySelector('input[type="range"]');
  if (!range) return;
  panel.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", () => {
    panel.style.setProperty("--pos", range.value + "%");
  });
});
