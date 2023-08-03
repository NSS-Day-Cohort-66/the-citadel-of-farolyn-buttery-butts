document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description:</h4>
        <p>${schoolClicked.dataset.description}</p>
        <h4>Disclaimer:</h4>
        <p>${schoolClicked.dataset.disclaimer}</p>
        <h4>Currently accepting the following Magician Types:</h4>
        <ul>`;
        for (const archetype of archetypes) {
          if (archetype.schoolId === parseInt(schoolClicked.dataset.id)) {
            detailsHtml += `<li>${archetype.name}`
          }
        }
    detailsHtml += "</ul> </div>"
    return detailsHtml
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>`;

  headerHtml += `</div>`;
  return headerHtml;
};
