export default function animaScroll() {
  const scroll = document.querySelectorAll(".js-scroll");
  const windowMetade = innerHeight * 0.7;
  if (scroll) {
    function animaScroll() {
      scroll.forEach((scrolls) => {
        const scrollsTop = scrolls.getBoundingClientRect().top;
        const isScrolls = scrollsTop - windowMetade < 0;
        if (isScrolls) {
          scrolls.classList.add("active");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
