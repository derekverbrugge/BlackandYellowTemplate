document.addEventListener("DOMContentLoaded", () => {

  /*
   * Load header
   */

  fetch("header.html")
    .then(response => response.text())
    .then(data => {

      const header = document.getElementById("header");

      if (header) {
        header.innerHTML = data;
      }

      initializeNavigation();

    })
    .catch(error => {
      console.error("Unable to load header:", error);
    });


  /*
   * Load footer
   */

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {

      const footer = document.getElementById("footer");

      if (footer) {
        footer.innerHTML = data;
      }

      const year = document.getElementById("copyright-year");

      if (year) {
        year.textContent = new Date().getFullYear();
      }

    })
    .catch(error => {
      console.error("Unable to load footer:", error);
    });


  /*
   * More topics button
   */

  const moreButton = document.getElementById("more-button");
  const moreTopics = document.getElementById("more-topics");

  if (moreButton && moreTopics) {

    moreButton.addEventListener("click", () => {

      const isVisible =
        moreTopics.classList.toggle("is-visible");

      moreButton.setAttribute(
        "aria-expanded",
        String(isVisible)
      );


      const buttonText =
        moreButton.querySelector("span:first-child");

      const arrow =
        moreButton.querySelector(".more-arrow");


      if (isVisible) {

        buttonText.textContent = "Less";

        arrow.textContent = "↑";

      } else {

        buttonText.textContent = "More";

        arrow.textContent = "↓";

      }

    });

  }

});


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
   * Close mobile menu after clicking a link
   */

  mainNav.querySelectorAll("a").forEach(link => {

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
