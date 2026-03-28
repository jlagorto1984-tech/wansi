
const toggle = document.getElementById("theme-toggle");


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}


toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});


function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


const sections = document.querySelectorAll(".card-section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
const indicator = document.getElementById("scrollIndicator");
const text = document.getElementById("scrollText");
const icon = document.getElementById("scrollIcon");

let atBottom = false;

indicator.addEventListener("click", () => {
  if (atBottom) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    document.getElementById("skills").scrollIntoView({
      behavior: "smooth"
    });
  }
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight - 10) {
    
    atBottom = true;
    text.textContent = "back to top";
    icon.src = "website/assets/up.svg";
  } else {
    
    atBottom = false;
    text.textContent = "scroll down";
    icon.src = "assets/icons/down.svg";
  }
});
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero"); 

window.addEventListener("scroll", () => {
  const heroBottom = hero.getBoundingClientRect().bottom;
  const navHeight = nav.offsetHeight;

  
  if (heroBottom <= navHeight + 20) {
    nav.classList.add("glass");
  } else {
    nav.classList.remove("glass");
  }
});
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark");
}
