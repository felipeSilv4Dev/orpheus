export default function menuMobile() {
  const body = document.querySelector("body");
  const btnMenu = document.getElementById("menu");
  const menuList = document.getElementById("menuList");
  const listLi = document.querySelectorAll("#menuList li");
  const listA = document.querySelectorAll("#menuList li a");
  const tema = document.getElementById("tema");
  const eventos = ["click", "touchstart"];
  const acttiveclass = "active";

  if (btnMenu) {
    listA.forEach((a) => {
      eventos.forEach((eventos) => {
        btnMenu.addEventListener(eventos, () => {
          a.classList.add(acttiveclass);
          return a;
        });
      });
    });

    listLi.forEach((li) => {
      eventos.forEach((eventos) => {
        btnMenu.addEventListener(eventos, () => {
          li.classList.add(acttiveclass);
          return li;
        });
      });
    });

    function openMenu({ target }) {
      if (target == "click") {
        target.preventDefault();
      }
      target.classList.toggle(acttiveclass);
      menuList.classList.toggle(acttiveclass);
      tema.classList.add(acttiveclass);
    }

    function bodyClick({ target }) {
      if (target == "click") {
        target.preventDefault();
      }
      if (!target.classList.contains(acttiveclass)) {
        menuList.classList.remove(acttiveclass);
        btnMenu.classList.remove(acttiveclass);
      }
    }

    eventos.forEach((eventos) => {
      btnMenu.addEventListener(eventos, openMenu);
      body.addEventListener(eventos, bodyClick);
    });
  }
}
