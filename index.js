// template id = template_r8j66r7
// service id = service_nygorjh
// public key = l86GM9hvaMZ7D8Fu-

let contrastToggle = false;
const scaleFactor = 1 / 20;
const scaleFactorMobile = 1 / 10;

function moveBackground(x, y) {
  const shapes = document.querySelectorAll(".shape");

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px )`;
  }
}

window.addEventListener("mousemove", (event => {
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  moveBackground(x, y)

}));

window.addEventListener("touchmove", (event) => {
  if (event.touches.length === 0) return;
  const touch = event.touches[0];
  const x = touch.clientX * scaleFactorMobile;
  const y = touch.clientY * scaleFactorMobile;
  moveBackground(x, y);
});

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }

  const logo = document.getElementById("personal-logo");
  const isDark = document.body.classList.contains("dark-theme");

  logo.src = isDark
    ? "./assets/assets/JBlogo_inverted.png"
    : "./assets/assets/JBlogo.png";
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm("service_nygorjh", "template_r8j66r7", event.target)
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailable.");
    });
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
