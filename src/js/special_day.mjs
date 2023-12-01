// Function to determine the target year based on the current date
export function get_target_year() 
{
  const current_date = new Date();
  const current_year = current_date.getFullYear();

  const target_month = 6;
  const target_day = 14;

  // Check if the current date is on or after July 14
  if (current_date.getMonth() > target_month || (current_date.getMonth() === target_month && current_date.getDate() >= target_day)) 
  {
    // If true, return the next year
    return current_year + 1;
  }
  else 
  {
    // Otherwise, return the current year
    return current_year;
  }
}

// Function to update the countdown display based on a selected date
export function update_countdown(selected_date) 
{
  const target_year = get_target_year();
  const target_date = new Date(target_year, 6, 14);

  // Use the provided date or the current date if none is provided
  const current_date = selected_date || new Date();
  const time_difference = target_date - current_date;
  // Calculate the remaining days
  const days_remaining = Math.ceil(time_difference / (1000 * 60 * 60 * 24));

  document.getElementById('countdown_display').textContent = `${days_remaining} days remaining`;
}