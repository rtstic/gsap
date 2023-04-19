const container = document.getElementById("container");
let currentSectionIndex = 0;

container.addEventListener("scroll", (event) => {
  event.preventDefault();
  const direction = event.deltaY > 0 ? 1 : -1;
  const sections = document.querySelectorAll(".section");
  const sectionCount = sections.length;

  currentSectionIndex = currentSectionIndex - direction;
  currentSectionIndex = Math.max(0, currentSectionIndex);
  currentSectionIndex = Math.min(sectionCount - 1, currentSectionIndex);

  const currentSection = sections[currentSectionIndex];
  currentSection.scrollIntoView({ behavior: "smooth" });
});