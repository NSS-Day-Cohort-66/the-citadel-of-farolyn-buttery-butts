import { getArchetypes, getSchools, getBooks } from "./database.js";

const archetypes = getArchetypes();
const schools = getSchools();
const books = getBooks();

const findSchool = (archetype, allSchools) => {
  return allSchools.find((school) => school.id === archetype.schoolId);
};

const findBook = (archetype, allBooks) => {
  return allBooks.find((book) => book.id === archetype.schoolId);
};

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    const greeting = typeClicked.dataset.greeting;
    let detailsHtml = "";

    for (const type of archetypes) {
      const schoolMatch = findSchool(type, schools);
      const bookMatch = findBook(type, books);
      if (type.id === parseInt(typeClicked.dataset.id)) {
        detailsHtml = `
        <div>
          <h4>Greeting:</h4>
          <p>${greeting}</p>
          <h4>School:</h4>
          <p>${schoolMatch.name}</p>
          <h4>Study Book:</h4>
          <p>${bookMatch.name}</p>
        </div>`;
      }
    }
    const parentTag = document.querySelector("#message");
    parentTag.innerHTML = detailsHtml;
  }
});

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;
  headerHtml += `<ul>`;
  for (const type of archetypes) {
    headerHtml += `
    <div id="archetypes_card">
      <li data-type="type" 
      data-id="${type.id}" 
      data-greeting="${type.greeting}"> 
        ${type.name}
      </li>
    </div>`;
  }
  headerHtml += `</div>`;
  return headerHtml;
};
