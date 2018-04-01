const mainPage = document.querySelector(`section.main`);

export default function showPage(template) {
  mainPage.innerHTML = ``;
  mainPage.appendChild(template);
}
