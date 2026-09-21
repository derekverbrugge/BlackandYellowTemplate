document.addEventListener("DOMContentLoaded", () => {

  loadHeader();
  loadFooter();
  initializeMoreTopics();

});


/*
 * Load header
 */

function loadHeader() {

  fetch("header.html")

    .then(response => {

      if (!response.ok) {
        throw new Error(
          `Header request failed: ${response.status}`
        );
      }

      return response.text();

    })

    .then(data => {

      const header =
        document.getElementById("header");

      if (!header) {
        return;
      }

      header.innerHTML = data;

      initializeNavigation();

    })

    .catch(error => {

      console.error(
        "Unable to load header:",
        error
      );

    });

}


/*
 * Load footer
 */

function loadFooter() {

  fetch("footer.html")

    .then(response => {

      if (!response.ok) {
        throw new Error(
          `Footer request failed: ${response.status}`
        );
      }

      return response.text();

    })

    .then(data => {

      const footer =
        document.getElementById("footer");

      if (!footer) {
        return;
      }

      footer.innerHTML = data;

      const year =
        document.getElementById("copyright-year");

      if (year) {
        year.textContent =
          new Date().getFullYear();
      }

    })

    .catch(error => {

      console.error(
        "Unable to load footer:",
        error
      );

    });

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


  menuToggle.addEventListener("click", () => {

    const isOpen =
      mainNav.classList.toggle("is-open");


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

  });


  /*
   * Close the mobile navigation
   * when a navigation link is selected.
   */

  mainNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

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


  moreButton.addEventListener("click", () => {

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

  });

}
