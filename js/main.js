let btnResponsive = document.querySelector(".header__head i");
let plans = document.querySelectorAll(".plan__card");

const toggleNav = () => {
  let nav = document.querySelector(".header__nav");
  nav.classList.toggle("visible");
};

btnResponsive.addEventListener("click", toggleNav);

for (let i = 0; i < plans.length; i++) {
  plans[i].addEventListener("mouseover", () => {
    plans[i].style.borderColor = "#f53838";

    let btn = plans[i].querySelector("a span");
    btn.style.backgroundColor = "#f53838";
    btn.style.color = "#fff";
  });
}

for (let i = 0; i < plans.length; i++) {
  plans[i].addEventListener("mouseout", () => {
    plans[i].style.borderColor = "#ddd";

    let btn = plans[i].querySelector("a span");
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#f53838";
  });
}
