export default function renderTemplate(template) {
  const element = document.createElement(`template`);

  element.innerHTML = template;
  return element.content.firstChild;
}
