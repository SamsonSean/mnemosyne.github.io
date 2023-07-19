
const dayContainer = document.getElementById("days");
const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
// Update the countdown every second
const countdown = setInterval(function() {
  // Get the current date and time
  const bdate = new Date(targetDate);
  const currentDate = new Date();
  // Find the difference between now and the target date
  const diff = (bdate - currentDate) / 1000;
  
  // Calculate the duration in days, hours, minutes, and seconds
  //const duration = Math.floor(diff / 3600 / 24);
  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor(diff / 3600 ) % 24;
  const minutes = Math.floor(diff / 60) % 60;
  const seconds = Math.floor(diff) % 60;
  

  dayContainer.innerHTML = days
  hoursContainer.innerHTML = hours
  minutesContainer.innerHTML = minutes
  secondsContainer.innerHTML = seconds

  // Display the countdown in the console or on a webpage
  
  // Check if the countdown is finished
  if (diff < 0) {
    clearInterval(countdown);
    console.log("Happy Birthday");
    // You can perform any other actions here when the countdown is finished
  }
}, 1000);
