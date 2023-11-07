function getTargetYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const targetMonth = 6;
  const targetDay = 14;

  if (currentDate.getMonth() > targetMonth || (currentDate.getMonth() === targetMonth && currentDate.getDate() >= targetDay)) {
    return currentYear + 1;
  }
  else {
    return currentYear;
  }
}

// // Set the target event date (Year, Month (0-11), Day)
// const targetDate = new Date(2023, 11, 31);

function updateCountdown() {
  const targetYear = getTargetYear();
  const targetDate = new Date(targetYear, 6, 14);

  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysRemaining > 0) {
    document.getElementById('countdown-display').textContent = `${daysRemaining} days remaining`;
  }
}

// Call the updateCountdown function to initially display the countdown
updateCountdown();

// Update the countdown every second (you can adjust the interval as needed)
setInterval(updateCountdown, 1000);
