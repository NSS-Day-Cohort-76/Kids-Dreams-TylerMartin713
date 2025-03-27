import { getChildren } from "./database.js";

const children = getChildren();

export const Kids = () => {
  let html = "<ul>";

  for (const child of children) {
    html += `<li 
                data-id="${child.id}" 
                data-type="child" 
                data-wish="${child.wish}"
                >${child.name}</li>`;
  }

  html += "</ul>";
  return html;
};

document.addEventListener("click", function (clickEvent) {
  // target the specific DOMString element
  const itemClicked = clickEvent.target;
  // Listen for a click that ONLY targets the DOM element with a CHILD data-type
  if (itemClicked.dataset.type === "child") {
    // parse the DOMString id = "1" to id = 1
    const kidId = parseInt(itemClicked.dataset.id);
    // Loop over the children array
    for (const kid of children) {
      // ex. if the DOM element clicked with the data-id:1 === children.id: 1
      if (kidId === kid.id) {
        // alert
        window.alert(`${kid.name}'s wish is ${kid.wish}`);
      }
    }
  }
});
