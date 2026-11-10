
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".video-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const match = title.includes(query);

    card.hidden = !match;

    if (match) visible++;
  });

  noResults.hidden = visible !== 0;
});

cards.forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("player")
      .scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("menuBtn")
  .addEventListener("click", () => {
    document.getElementById("videos")
      .scrollIntoView({ behavior: "smooth" });
  });

console.log("VexaPlay loaded successfully!");
