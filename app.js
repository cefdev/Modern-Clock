const hoursHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");

setDate = () => {
  // Get full date
  const now = new Date();

  /* For Seconds Hand */
  // Get seconds
  const seconds = now.getSeconds();

  // Change seconds to degree
  const secondsDeg = (seconds / 60) * 360 + 90;

  // Apply styling to seconds hand
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  /* For Minutes Hand */
  // Get minutes
  const minutes = now.getMinutes();

  // Change minutes to degree
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

  // Apply styling to minutes hand
  minsHand.style.transform = `rotate(${minutesDeg}deg)`;

  /* For Hours Hand */
  // Get hour
  const hours = now.getUTCHours();

  // Change Hours to degree
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  // Apply styling to hours hand
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
};

// Run setDate() each second
setInterval(setDate, 1000);
