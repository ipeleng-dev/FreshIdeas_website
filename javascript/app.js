//variables
const header = document.getElementById("header");
const main = document.getElementById("main");
const nav = document.getElementById("nav");
const links = document.getElementById("links");
const logo__menu = document.getElementById("logo__menu");
const circle = document.getElementById("circle");
const position = document.getElementById("position");
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");

//images hover
new hoverEffect({
  parent: document.querySelector(".img1"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
  image2:
    "https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
});

//menu navigation
function openMenu() {
  header.style.display = "none";
  main.style.display = "none";

  nav.style.display = "flex";
  links.style.display = "flex";
  logo__menu.style.display = "flex";
}

function closeMenu() {
  header.style.display = "flex";
  main.style.display = "flex";

  nav.style.display = "none";
  links.style.display = "none";
  logo__menu.style.display = "none";
}

//mouse follower
function pos(e) {
  // Get x and y positions
  let x = e.clientX;
  let y = e.clientY;
  let position = "X: " + x + " Y: " + y;
  let element = document.querySelector("#circle");
  let compStyle = window.getComputedStyle(element);
  // Get height and width of circle  to center it
  let h = compStyle.getPropertyValue("height");
  let w = compStyle.getPropertyValue("width");
  // Set top and left positions of circle
  element.style.top = y - parseInt(h) / 2 + "px";
  element.style.left = x - parseInt(w) / 2 + "px";
}

//background
