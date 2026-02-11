const sections = document.querySelectorAll("section");

const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      sec.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

document.querySelectorAll(".contents-list li").forEach(item => {
  item.addEventListener("click", () => {
    const targetClass = item.getAttribute("data-target");
    const targetSection = document.querySelector("." + targetClass);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Skills dropdown toggle
document.querySelectorAll(".dropdown").forEach(drop => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("active");
  });
});
// Certificates Accordion
document.querySelectorAll(".cert-header").forEach(header => {
  header.addEventListener("click", () => {
    const dropdown = header.parentElement;

    // Close others (accordion style)
    document.querySelectorAll(".cert-dropdown").forEach(item => {
      if (item !== dropdown) {
        item.classList.remove("active");
      }
    });

    dropdown.classList.toggle("active");
  });
});
