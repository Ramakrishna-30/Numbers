// Select all number elements
const numbers = document.querySelectorAll('.number');

// Update count function
const updateCount = (el) => {
  const value = parseInt(el.dataset.value); // Target value
  const increment = Math.ceil(value / 1000); // Increment value
  let initialValue = 0; // Start value

  // Function to increment the value over time
  const increaseCount = setInterval(() => {
    initialValue += increment;
    
    if (initialValue > value) {
      el.textContent = `${value}+`; // Set final value
      clearInterval(increaseCount); // Stop the interval
      return;
    }
    el.textContent = `${initialValue}+`; // Incremental value
  }, 1); // Speed of the counter
};

// Apply updateCount to each number element
numbers.forEach((span) => {
  updateCount(span);
});
