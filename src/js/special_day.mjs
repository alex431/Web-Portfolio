// Function to determine the target year based on the current date
export function get_target_year() 
{

  // Get the current date
  const current_date = new Date();
  
  // Get the current year
  const current_year = current_date.getFullYear();

  // Set the target month and day
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

  // Get the target year using the get_target_year function
  const target_year = get_target_year();

  // Create a Date object for the target date
  const target_date = new Date(target_year, 6, 14);

  // Use the provided date or the current date if none is provided
  const current_date = selected_date || new Date();

  // Calculate the time difference between the target and current dates
  const time_difference = target_date - current_date;
  
  // Calculate the remaining days
  const days_remaining = Math.ceil(time_difference / (1000 * 60 * 60 * 24));

  // Update the content of the element with the ID 'countdown_display'
  document.getElementById('countdown_display').textContent = `${days_remaining} days remaining`;
}