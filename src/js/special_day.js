// Function to determine the target year based on the current date
export function getTargetYear() 
{
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const targetMonth = 6;
  const targetDay = 14;

  // Check if the current date is on or after July 14
  if (currentDate.getMonth() > targetMonth || (currentDate.getMonth() === targetMonth && currentDate.getDate() >= targetDay)) 
  {
    // If true, return the next year
    return currentYear + 1;
  }
  else 
  {
    // Otherwise, return the current year
    return currentYear;
  }
}

// Function to update the countdown display based on a selected date
export function updateCountdown(selectedDate) 
{
  const targetYear = getTargetYear();
  const targetDate = new Date(targetYear, 6, 14);

  // Use the provided date or the current date if none is provided
  const currentDate = selectedDate || new Date();
  const timeDifference = targetDate - currentDate;
  // Calculate the remaining days
  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById('countdown-display').textContent = `${daysRemaining} days remaining`;
}