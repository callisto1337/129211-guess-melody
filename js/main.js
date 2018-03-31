import renderTemplate from './renderTemplate';

console.log(renderTemplate(`<h1>Hello, World!</h1>`));

const mainPage = document.querySelector(`section.main`);
const templates = document.querySelector(`#templates`);
const pages = templates.content.children;

let currentPage = 0;
const lastPage = pages.length - 1;

const BTN_LEFT_KEY = 37;
const BTN_RIGHT_KEY = 39;


function showPage(newPage) {
  if (newPage === currentPage) {
    return;
  }
  newPage = newPage || 0;
  const clonePage = pages[newPage].cloneNode(true);

  mainPage.innerHTML = ``;
  mainPage.appendChild(clonePage);

  currentPage = newPage;
}

document.addEventListener(`keydown`, function (e) {
  if (!e.altKey) {
    return;
  }

  const newPage = {
    [BTN_LEFT_KEY]: Math.max(0, currentPage - 1),
    [BTN_RIGHT_KEY]: Math.min(currentPage + 1, lastPage)
  }[e.keyCode];

  if (newPage !== undefined) {
    e.preventDefault();
    showPage(newPage);
  }
});

// Главная страница при загрузке
showPage();
