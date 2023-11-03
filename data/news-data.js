const todaysDate = new Date();

var newsData = [
  {
    img_src: `https://source.unsplash.com/random/300x200?warcraft&sig=${Math.random()}`,
    title: "Update 9.2.5",
    text: "The Shadowlands saga continues...",
  },
  {
    img_src: `https://source.unsplash.com/random/300x200?warcraft&sig=${Math.random()}`,
    title: "Update 9.3",
    text: `PvP arenas coming on ${todaysDate.toLocaleDateString()}`,
  },
  {
    img_src: `https://source.unsplash.com/random/300x200?warcraft&sig=${Math.random()}`,
    title: "Update 9.3.5",
    text: `New raid coming in days!`,
  },
];

var videoData = [
  {
    img_src: `https://source.unsplash.com/random/300x200?warcraft&sig=${Math.random()}`,
    title: "Cinematic Trailer 1",
  },
  {
    img_src: `https://source.unsplash.com/random/300x200?warcraft&sig=${Math.random()}`,
    title: "Cinematic Trailer 2",
  },
  {
    img_src: `https://source.unsplash.com/random/300x200?warcraft&sig=${Math.random()}`,
    title: "Cinematic Trailer 3",
  },
];

// Function to calculate the difference between two dates
function calculateCountdown(endDate) {
  const now = new Date();
  const distance = endDate - now;
  if (distance < 0) {
    clearInterval(countdownTimer); // Stop the countdown if the date has passed
    return "Countdown has ended!";
  }

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

// Set the date we're counting down to
const countdownToDate = new Date("2023-12-25T00:00:00");

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Calculate the countdown
  const countdownText = calculateCountdown(countdownToDate);

  // Update the third news item's text with the countdown
  newsData[2].text = `New raid coming in ${countdownText}!`;
  videoData[0].text = `Test the countdown ${countdownText}!`;
  // you would update its innerHTML or textContent here.
}, 1000);

// Initial call to set the text right away
newsData[2].text = `New raid coming in ${calculateCountdown(countdownToDate)}!`;
