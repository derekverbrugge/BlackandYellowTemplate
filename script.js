/*
 * Motorists
 * Main site JavaScript
 *
 * Loaded with:
 * <script src="./script.js" defer></script>
 */


/* ================================
   HEADER
   ================================= */

const headerContainer =
  document.getElementById("site-header");


if (headerContainer) {

  fetch("./header.html")

    .then(response => {

      if (!response.ok) {
        throw new Error(
          `Could not load header.html (${response.status})`
        );
      }

      return response.text();

    })

    .then(html => {

      headerContainer.innerHTML = html;

      initializeNavigation();

    })

    .catch(error => {

      console.error(
        "Header loading error:",
        error
      );

    });

}


/* ================================
   FOOTER
   ================================= */

const footerContainer =
  document.getElementById("site-footer");


if (footerContainer) {

  fetch("./footer.html")

    .then(response => {

      if (!response.ok) {
        throw new Error(
          `Could not load footer.html (${response.status})`
        );
      }

      return response.text();

    })

    .then(html => {

      footerContainer.innerHTML = html;

      const year =
        document.getElementById(
          "copyright-year"
        );

      if (year) {

        year.textContent =
          new Date().getFullYear();

      }

    })

    .catch(error => {

      console.error(
        "Footer loading error:",
        error
      );

    });

}


/* ================================
   MOBILE NAVIGATION
   ================================= */

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


/* ================================
   MORE TOPICS
   ================================= */

const moreButton =
  document.getElementById("more-button");

const moreTopics =
  document.getElementById("more-topics");


if (moreButton && moreTopics) {

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
