const menuButton = document.querySelector(".header__menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const pageTopButton = document.querySelector(".page-top");

if (menuButton && mobileMenu) {
  const closeMobileMenu = () => {
    document.body.classList.remove("is-menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
    mobileMenu.setAttribute("aria-hidden", "true");
  };

  const openMobileMenu = () => {
    document.body.classList.add("is-menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "メニューを閉じる");
    mobileMenu.setAttribute("aria-hidden", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) closeMobileMenu();
  });
}

if (pageTopButton) {
  const togglePageTopButton = () => {
    pageTopButton.classList.toggle("is-visible", window.scrollY >= 300);
  };

  pageTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", togglePageTopButton);
  togglePageTopButton();
}

document.querySelectorAll(".faq details").forEach((details) => {
  const summary = details.querySelector("summary");

  if (!summary) return;

  summary.addEventListener("click", (event) => {
    if (!details.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (details.dataset.animating === "true") return;

    event.preventDefault();
    details.dataset.animating = "true";

    const isOpen = details.open;
    const startHeight = `${details.offsetHeight}px`;

    if (!isOpen) details.open = true;

    const endHeight = isOpen ? `${summary.offsetHeight}px` : `${details.scrollHeight}px`;
    const animation = details.animate(
      { height: [startHeight, endHeight] },
      { duration: 240, easing: "ease-out" }
    );

    details.style.overflow = "hidden";

    animation.onfinish = () => {
      details.open = !isOpen;
      details.style.height = "";
      details.style.overflow = "";
      details.dataset.animating = "false";
    };

    animation.oncancel = () => {
      details.style.height = "";
      details.style.overflow = "";
      details.dataset.animating = "false";
    };
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
  });
});
