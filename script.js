function scrollSection(button, direction) {
      const section = button.closest("section");
      const container = section.querySelector(".horizontal-scroll");
      const scrollAmount = 320; // larghezza item + gap
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
      });
    }