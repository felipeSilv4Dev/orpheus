const body = document.querySelector("body");
const btnTheme = document.getElementById("tema");
const imgLight = document.getElementById("imgHome");
const imgContibution = document.getElementById("imgContribution");

const lightClass = "light";
const darkClass = "dark";
const srcLightPrincipal = "./img/section-1/principal-light.png";
const srcLightContribution = "./img/section-2/img-4-light.png";

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

btnTheme.addEventListener("click", activeTheme);
