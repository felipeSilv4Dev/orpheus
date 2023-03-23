export default function menuMobile() {
  const body = document.querySelector("body");
  const btnMenu = document.getElementById("menu");
  const menuList = document.getElementById("menuList");
  const listLi = document.querySelectorAll("#menuList li");
  const listA = document.querySelectorAll("#menuList li a");
  const tema = document.getElementById("tema");

  const eventos = ["click", "touchstart"];
  const activeclass = "active";

  function openMenu(event) {
    if (event.type === "click") {
      event.preventDefault();
    } else {
      this.classList.toggle(activeclass);
      menuList.classList.toggle(activeclass);
      tema.classList.add(activeclass);

      listA.forEach((a) => {
        a.classList.toggle(activeclass);
        return a;
      });

      listLi.forEach((li) => {
        li.classList.toggle(activeclass);
        return li;
      });
    }
  }

  function bodyClick({ target }) {
    if (!target.classList.contains(activeclass)) {
      menuList.classList.remove(activeclass);
      btnMenu.classList.remove(activeclass);
    }
  }

  eventos.forEach((eventos) => {
    btnMenu.addEventListener(eventos, openMenu);
    body.addEventListener(eventos, bodyClick);
  });
}
