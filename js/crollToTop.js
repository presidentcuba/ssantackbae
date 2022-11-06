(function scrollTopTop() {
  const buttonBackToTop = document.getElementById("backToTop");
  if (buttonBackToTop) {
    window.addEventListener("scroll", () => {
      const cx = document.documentElement.scrollTop || document.body.scrollTop;
      if (cx > 350) {
        buttonBackToTop.classList.add("active");
      } else {
        buttonBackToTop.classList.remove("active");
      }
    });

    buttonBackToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
