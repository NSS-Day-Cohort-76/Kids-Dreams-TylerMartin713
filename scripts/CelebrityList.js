import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

export const Celebrities = () => {
  let html = "<ul>";

  for (const celeb of celebrities) {
    html += `<li 
                data-id="${celeb.id}" 
                data-type="celebrity"
                data-sport="$star.sport}"
                id="star--${celeb.id}"
                >${celeb.name}</li>`;
  }

  html += "</ul>";
  return html;
};

document.addEventListener("click", function (clickEvent) {
  // targeting our click
  const itemClicked = clickEvent.target;
  // if the item clicked === a DOMString with the data-type "celebrity"
  if (itemClicked.dataset.type === "celebrity") {
    //parse the DOMString id = "1" to id = 1
    const celebId = parseInt(itemClicked.dataset.id);

    for (const celeb of celebrities) {
      if (celeb.id === celebId) {
        window.alert(`${celeb.name} is a ${celeb.sport} star`);
      }
    }
  }
});
