
const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");
const menuBtn = document.getElementById("menuBtn");
const noResults = document.getElementById("noResults");

// Search videos
searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase().trim();
  let visibleCount = 0;

  videoCards.forEach(function (card) {
    const title = card.dataset.title.toLowerCase();
    const matches = title.includes(searchText);

    card.style.display = matches ? "block" : "none";

    if (matches) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
});

// Menu button
menuBtn.addEventListener("click", function () {
  document.getElementById("videos").scrollIntoView({
    behavior: "smooth"
  });
});

// Open video details page
videoCards.forEach(function (card) {
  card.style.cursor = "pointer";

  card.addEventListener("click", function () {
    const title = card.dataset.title;

    window.location.href =
      "video.html?title=" + encodeURIComponent(title);
  });
});
