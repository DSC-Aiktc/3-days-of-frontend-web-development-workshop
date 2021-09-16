// Function expression to select elements

const selectElement = (s) => document.querySelector(s);
// queryselector is use for selecting the first mentiond tag

const navLinks = document.querySelectorAll(".nav-link");
// queryselectorAll is use for selecting the all the mentiond tag

console.log(navLinks)

selectElement(".menu-icon").addEventListener("click", () => {
  // Toggle the nav on menu icon click
  selectElement(".nav-list").classList.toggle("active");
  //toggle means remove 

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5)
    }
  });

  //Burger Animation
  selectElement(".menu-icon").classList.toggle("toggle");
});

//close navbar on nav link click

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    selectElement(".menu-icon").classList.toggle("toggle");
  });
});