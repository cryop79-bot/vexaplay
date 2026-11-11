
const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");
const menuBtn = document.getElementById("menuBtn");

// Search videos
searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();

  videoCards.forEach(function (card) {
    const title = card.dataset.title.toLowerCase();

    card.style.display = title.includes(searchText)
      ? "block"
      : "none";
  });
});

// Menu button
menuBtn.addEventListener("click", function () {
  document.getElementById("videos").scrollIntoView({
    behavior: "smooth"
  });
});
