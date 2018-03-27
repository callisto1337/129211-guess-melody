const mainPage = document.querySelector(`section.main`);
const templates = document.querySelector(`#templates`);
const pages = templates.content.children;
const lastPage = --pages.length;
let currentPage = 0;

const btnAlt = 18;
const btnLeft = 37;
const btnRight = 39;
let altDown = false;


function showPage(number) {
  const clonePage = pages[number].cloneNode(true);

  mainPage.innerHTML = ``;
  mainPage.appendChild(clonePage);
}

// Главная страница при загрузке
showPage(currentPage);

document.addEventListener(`keydown`, function (e) {
  // Нажата ли кнопка "Alt"
  if (e.keyCode === btnAlt) {
    altDown = true;
  }

  // Нажали ли стрелку влево или вправо
  if (e.keyCode === btnLeft && currentPage - 1 >= 0) {
    e.preventDefault();
    showPage(--currentPage);
  } else if (e.keyCode === btnRight && currentPage + 1 <= lastPage) {
    e.preventDefault();
    showPage(++currentPage);
  }
});

document.addEventListener(`keyup`, function (e) {
  // Отпустили ли кнопку "Alt"
  if (e.keyCode === btnAlt) {
    altDown = false;
  }
});
