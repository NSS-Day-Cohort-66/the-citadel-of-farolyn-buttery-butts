import { getSchools, getArchetypes } from "./database.js";

const schools = getSchools()
const archetypes = getArchetypes()

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    let detailsHtml = `
      <div>
        <h4>Description:</h4>
        <p>${schoolClicked.dataset.description}</p>
        <h4>Disclaimer:</h4>
        <p>${schoolClicked.dataset.disclaimer}</p>
        <h4>Currently accepting the following Magician Types:</h4>
        <ul>`;
        for (const archetype of archetypes) {
          if (archetype.schoolId === parseInt(schoolClicked.dataset.id)) {
            detailsHtml += `<li>${archetype.name}</li>`
          }
        }
    detailsHtml += "</ul> </div>"
    let parentTag = document.querySelector("#message")
    parentTag.innerHTML = detailsHtml
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>`;
  headerHtml += "<ul>"
  for (const school of schools) {
    headerHtml += `<li data-type="school" 
    data-description="${school.description}" 
    data-disclaimer="${school.disclaimer}" 
    data-id="${school.id}">${school.name}</li>`
    }
    
    headerHtml += "</ul>"
  headerHtml += `</div>`;
  return headerHtml;
};
