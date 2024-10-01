const drop = document.querySelector(".drop");
const show = document.querySelector("b");
const men = document.querySelector(".inf");
const info = document.querySelector(".info");
const scroll = document.querySelector(".scroll");
const xmark = document.querySelector(".info i");
///////////////////////////////////////////////////////////////////////////////////////////////////////////
show.addEventListener("click", () => {
  z();
});

function z() {
  show.classList.toggle("be1");
  drop.classList.toggle("be");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
info.onclick = function () {
  men.classList.toggle("men");

  const isopen = men.classList.contains("men");
  xmark.classList = isopen ? "fa-solid fa-xmark" : "fas fa-info";
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onscroll = function () {
  const val = scrollY;
  if (val >= 480) {
    scroll.style.bottom = "30px";
  } else {
    scroll.style.bottom = "-100%";
  }
};
