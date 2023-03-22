export default function ThemeButton() {
  const body = document.querySelector("body");
  const btnTheme = document.getElementById("tema");
  const imgLight = document.getElementById("imgHome");
  const imgContibution = document.getElementById("imgContribution");

  const lightClass = "light";
  const darkClass = "dark";
  const srcLightPrincipal = "./img/section-1/principal-light.png";
  const srcLightContribution = "./img/section-2/img-4-light.png";

  if (btnTheme) {
    function activeTheme() {
      const bodyLight = body.classList.toggle(lightClass);

      if (bodyLight) {
        body.classList.remove(darkClass);
        btnTheme.src = "./img/section-1/lua.svg";
        imgLight.src = srcLightPrincipal;
        imgContibution.src = srcLightContribution;
      } else removeTheme();
    }

    function removeTheme() {
      body.classList.add(darkClass);
      btnTheme.src = "./img/section-1/sol.svg";
      imgLight.src = "./img/section-1/principal-dark.png";
      imgContibution.src = "./img/section-2/img-4-dark.png";
    }

    function activeHover() {
      if (body.classList.contains(darkClass)) {
        this.src = "./img/section-1/sol-2.svg";

        this.addEventListener("mouseleave", onMouseleave);

        function onMouseleave() {
          if (body.classList.contains(darkClass)) {
            this.src = "./img/section-1/sol.svg";
          }
        }
      } else if (body.classList.contains(lightClass)) {
        this.src = "./img/section-1/lua-2.svg";

        this.addEventListener("mouseleave", onMouseleave);

        function onMouseleave() {
          if (body.classList.contains(lightClass)) {
            this.src = "./img/section-1/lua.svg";
          }
        }
      }
    }

    btnTheme.addEventListener("mouseover", activeHover);
    btnTheme.addEventListener("click", activeTheme);
  }
}
