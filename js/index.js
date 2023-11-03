// Assuming newsData is already loaded via a <script> tag in your HTML before index.js
// The newsData variable should be available globally

// Function to create and append news cards
function createNewsCards(newsItems) {
  const newsGrid = document.querySelector(".news-grid");
  newsGrid.innerHTML = ""; // Clear existing content

  newsItems.forEach((newsItem) => {
    const card = document.createElement("div");
    card.className = "news-card";

    const image = document.createElement("img");
    image.src = newsItem.img_src;
    image.alt = "News image";
    card.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.className = "news-text";

    const title = document.createElement("h3");
    title.textContent = newsItem.title;
    textContainer.appendChild(title);

    const text = document.createElement("p");
    text.textContent = newsItem.text;
    textContainer.appendChild(text);

    card.appendChild(textContainer);

    newsGrid.appendChild(card);
  });
}

function createVideoCards(videoItems) {
  const videoGrid = document.querySelector(".video-grid");
  videoGrid.innerHTML = ""; // Clear existing content

  videoItems.forEach((videoItem) => {
    const card = document.createElement("div");
    card.className = "video-card";

    const image = document.createElement("img");
    image.src = videoItem.img_src;
    image.alt = "Video image";
    card.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.className = "video-text";

    const title = document.createElement("h3");
    title.textContent = videoItem.title;
    textContainer.appendChild(title);

    const text = document.createElement("p");
    text.textContent = videoItem.text;
    textContainer.appendChild(text);

    card.appendChild(textContainer);

    videoGrid.appendChild(card);
  });
}

// Scroll event listener for the sticky header effect
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header-nav");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(18, 18, 18, .65)";
  } else {
    header.style.backgroundColor = "rgba(18, 18, 18, 1)";
  }
});

// DOMContentLoaded event to ensure the DOM is fully loaded before manipulating it
window.addEventListener("DOMContentLoaded", (event) => {
  createNewsCards(newsData); // Call the function to create news cards
  createVideoCards(videoData); // Call the function to create video cards
});
