// ============================================================
// FJ DisplayPro Tech — Landing Page (Google Ads)
// ============================================================

// Ano no rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Slider "antes/depois"
document.querySelectorAll("[data-compare]").forEach((panel) => {
  const range = panel.querySelector('input[type="range"]');
  if (!range) return;
  panel.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", () => {
    panel.style.setProperty("--pos", range.value + "%");
  });
});

// ------------------------------------------------------------
// CASE VIEWER — troca de caso via abas
// ------------------------------------------------------------
const CASES = [
  {
    before: "img1.jpg",
    after: "img2.jpg",
    title: "TV com linhas verticais",
    desc: "Falha na placa de conexão do display — recuperada com solda e reforço de trilha, sem trocar a tela.",
    fail: "linhas verticais / falha na conexão",
    fix: "solda de precisão + reforço de trilha"
  },
  {
    before: "img3.jpg",
    after: "img4.jpg",
    title: "Display com riscos e falha de COF",
    desc: "Recuperado na máquina ACF — colagem profissional do COF sem deixar marca visível.",
    fail: "riscos na tela / COF solto",
    fix: "colagem em máquina ACF"
  },
  {
    before: "img5.jpg",
    after: "img6.jpg",
    title: "Imagem escura e manchada",
    desc: "Reativação de moléculas — técnica avançada que devolve o brilho original da tela.",
    fail: "imagem escura / manchada",
    fix: "reativação de moléculas"
  }
];

const caseTabs = document.querySelectorAll(".case-tab");
const caseBefore = document.getElementById("caseBefore");
const caseAfter = document.getElementById("caseAfter");
const caseTitle = document.getElementById("caseTitle");
const caseDesc = document.getElementById("caseDesc");
const caseFail = document.getElementById("caseFail");
const caseFix = document.getElementById("caseFix");
const compareRange = document.querySelector('#antes-depois [data-compare] input[type="range"]');
const comparePanel = document.querySelector("#antes-depois [data-compare]");

caseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const data = CASES[Number(tab.dataset.case)];
    if (!data) return;
    caseTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    caseBefore.src = data.before;
    caseAfter.src = data.after;
    caseTitle.textContent = data.title;
    caseDesc.textContent = data.desc;
    caseFail.textContent = data.fail;
    caseFix.textContent = data.fix;
    if (compareRange) {
      compareRange.value = 50;
      comparePanel.style.setProperty("--pos", "50%");
    }
  });
});
