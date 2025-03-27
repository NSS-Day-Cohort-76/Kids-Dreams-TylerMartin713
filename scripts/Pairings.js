import { getCelebrities, getChildren } from "./database.js";

const kids = getChildren();
const celebrities = getCelebrities();

export const findCelebrityMatch = (kidObject, celebrityArray) => {
  let celebrity = null;

  for (const celeb of celebrityArray) {
    if (celeb.id === kidObject.celebrityId) {
      celebrity = celeb;
    }
  }
  return celebrity;
};

export const Pairings = () => {
  let html = "";
  html = "<ul>";

  for (const kid of kids) {
    const kidsStar = findCelebrityMatch(kid, celebrities);
    html += `
            <li>
                ${kidsStar.name} will be making memories with ${kid.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `;
  }

  html += "</ul>";

  return html;
};
