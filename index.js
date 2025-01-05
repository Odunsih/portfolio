AOS.init();

const compliment = () => {
  setTimeout(function thanks() {
    let popup = document.querySelector(".popup");
    popup.classList.add("pop");
    popup.classList.remove("popup");
    setTimeout(() => {
      popup.classList.remove("pop");
      popup.classList.add("popup");
    }, 6000);
  }, 2000);
};

const topo = () => {
  let top = document.getElementById("up");
  top.classList.remove("upArrow");
  top.classList.add("up");
};

let footer = document.querySelector(".year");
const date = new Date().getFullYear();
footer.innerText = date;
