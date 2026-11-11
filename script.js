
const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");
const menuBtn = document.getElementById("menuBtn");
const noResults = document.getElementById("noResults");

// Search
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    let count = 0;

    videoCards.forEach(function (card) {
      const title = card.dataset.title.toLowerCase();
      const matches = title.includes(query);

      card.style.display = matches ? "block" : "none";
      if (matches) count++;
    });

    if (noResults) {
      noResults.hidden = count !== 0;
    }
  });
}

// Menu
if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    document.getElementById("videos")?.scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Video details page
videoCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const title = card.dataset.title;

    window.location.href =
      "video.html?title=" + encodeURIComponent(title);
  });
});
