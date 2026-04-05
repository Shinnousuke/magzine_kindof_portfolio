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
    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

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
// ===== RESPONSIVE AUTO SCROLL =====

const projectsSection = document.querySelector("#projects");
const projectsContainer = document.querySelector(".projects-right");

let autoScroll;
let userStopped = false;

function startAutoScroll() {
  if (autoScroll || userStopped) return;

  autoScroll = setInterval(() => {

    // 📱 MOBILE → Horizontal scroll
    if (window.innerWidth <= 768) {

      if (
        projectsContainer.scrollLeft + projectsContainer.clientWidth
        >= projectsContainer.scrollWidth
      ) {
        projectsContainer.scrollLeft = 0;
      } else {
        projectsContainer.scrollLeft += 1;
      }

    }

    // 💻 DESKTOP → Vertical scroll
    else {

      if (
        projectsContainer.scrollTop + projectsContainer.clientHeight
        >= projectsContainer.scrollHeight
      ) {
        projectsContainer.scrollTop = 0;
      } else {
        projectsContainer.scrollTop += 1;
      }

    }

  }, 20);
}

// Detect when section is visible
window.addEventListener("scroll", () => {
  const rect = projectsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    startAutoScroll();
  }
});

// Stop when user interacts
["wheel", "mousedown", "touchstart"].forEach(event => {
  projectsContainer.addEventListener(event, () => {
    userStopped = true;
    clearInterval(autoScroll);
  });
});
