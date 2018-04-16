const mainPage = document.querySelector(`section.main`);

export default (template) => {
  mainPage.innerHTML = ``;
  mainPage.appendChild(template);
};
