const mainPage = document.querySelector(`section.main`);
const templates = document.querySelector(`#templates`);
const pages = templates.content.children;

let currentPage = 0;
const lastPage = --pages.length;

const btnLeft = 37;
const btnRight = 39;

function showPage(number) {
  const clonePage = pages[number].cloneNode(true);

  mainPage.innerHTML = ``;
  mainPage.appendChild(clonePage);
}

function switchPage(e, next) {
  e.preventDefault();

  if (next && currentPage < lastPage) {
    showPage(++currentPage);
    return;
  }

  if (currentPage > 0 && !next) {
    showPage(--currentPage);
  }
}

document.addEventListener(`keydown`, function (e) {
  if (e.keyCode === btnRight && e.altKey) {
    switchPage(e, true);
  }

  if (e.keyCode === btnLeft && e.altKey) {
    switchPage(e);
  }
});

// Главная страница при загрузке
showPage(currentPage);
