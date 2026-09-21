/*
 * Motorists
 * Main site JavaScript
 */

async function loadComponents() {

  const headerContainer =
    document.getElementById("site-header");

  const footerContainer =
    document.getElementById("site-footer");


  /*
   * Load header
   */

  if (headerContainer) {

    try {

      const response =
        await fetch("./header.html");

      if (!response.ok) {
        throw new Error(
          `Header returned ${response.status}`
        );
      }

      headerContainer.innerHTML =
        await response.text();

    } catch (error) {

      console.error(
        "Unable to load header.html:",
        error
      );

    }

  }


  /*
   * Load footer
   */

  if (footerContainer) {

    try {

      const response =
        await fetch("./footer.html");

      if (!response.ok) {
        throw new Error(
          `Footer returned ${response.status}`
        );
      }

      footerContainer.innerHTML =
        await response.text();

    } catch (error) {

      console.error(
        "Unable to load footer.html:",
        error
      );

    }

  }


  /*
   * Components now exist in the DOM,
   * so initialize their functionality.
   */

  initializeNavigation();
  initializeMoreTopics();
  initializeCopyright();

}


/*
 * Mobile navigation
 */

function initializeNavigation() {

  const menuToggle =
    document.getElementById("menu-toggle");

  const mainNav =
    document.getElementById("main-nav");


  if (!menuToggle || !mainNav) {
    return;
  }


  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mainNav.classList.toggle(
          "is-open"
        );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    }
  );


  mainNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mainNav.classList.remove(
            "is-open"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
          );

        }
      );

    });

}


/*
 * More topics
 */

function initializeMoreTopics() {

  const moreButton =
    document.getElementById("more-button");

  const moreTopics =
    document.getElementById("more-topics");


  if (!moreButton || !moreTopics) {
    return;
  }


  moreButton.addEventListener(
    "click",
    () => {

      const isVisible =
        moreTopics.classList.toggle(
          "is-visible"
        );


      moreButton.setAttribute(
        "aria-expanded",
        String(isVisible)
      );


      const buttonText =
        moreButton.querySelector(
          "span:first-child"
        );

      const arrow =
        moreButton.querySelector(
          ".more-arrow"
        );


      if (isVisible) {

        buttonText.textContent = "Less";
        arrow.textContent = "↑";

      } else {

        buttonText.textContent = "More";
        arrow.textContent = "↓";

      }

    }
  );

}


/*
 * Copyright year
 */

function initializeCopyright() {

  const year =
    document.getElementById(
      "copyright-year"
    );


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

}


/*
 * Start
 */

loadComponents();
