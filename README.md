# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

```js
document.addEventListener("click", function (clickEvent) {
  // target the DOM element
  const itemClicked = clickEvent.target;
  // Listen for a click that ONLY targets the DOM element with a CHILD data-type
  if (itemClicked.dataset.type === "child") {
    // parse the DOMString id = "1" to id = 1
    const kidId = parseInt(itemClicked.dataset.id);
    // Loop over the children array
    for (const kid of children) {
      // ex. if the DOM element clicked with the data-id:1 === children.id: 1
      if (kidId === kid.id) {
        // show state
        window.alert(`${kid.name}'s wish is ${kid.wish}`);
      }
    }
  }
});
```

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > the findCelebrityMatch(kid, celebrities) gives us access to the celebrities array so that we dont get undefined in the window alert when we interpolate kidsStar.name and kidsStar.sport
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

```js
document.addEventListener("click", function (clickEvent) {
  // targeting our click
  const itemClicked = clickEvent.target;
  // if the item clicked === a DOMString with the data-type "celebrity"
  if (itemClicked.dataset.type === "celebrity") {
    //parse the DOMString id = "1" to id = 1
    const celebId = parseInt(itemClicked.dataset.id);

    for (const celeb of celebrities) {
      // IF the celebrities.id === the id of the element we clicked in the DOM
      // ex. if celebrities.id = 1 && the DOMString that we parsed also === 1
      if (celeb.id === celebId) {
        // then we alert that celebs name and their sport
        window.alert(`${celeb.name} is a ${celeb.sport} star`);
      }
    }
  }
});
```

4. Can you describe, in detail, the algorithm that is in the `main` module?
   >

```js
// assigning mainContainer to the container ID
const mainContainer = document.querySelector("#container");
// constructed our HTML string that we want in the main element
// We interpolate the kids(),celebrities(), and pairings() functions into that HTML string
const applicationHTML = `
    <h1 class="header-main">Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`;
//
mainContainer.innerHTML = applicationHTML;
```
