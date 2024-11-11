const travelForm = document.getElementById('travelForm');
const successMessage = document.getElementById('successMessage');

// Form submit event listener
travelForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  if (validateCollegeForm()) {
    // Show success message
    successMessage.style.display = 'block';
    
    // Optionally, you can reset the form
    travelForm.reset();
    
    // Hide the success message after a few seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }
});

// College form validation function
function validateCollegeForm() {
  const collegeName = document.getElementById('collegeName').value.trim();
  const tripCoordinator = document.getElementById('tripCoordinator').value.trim();
  const coordinatorEmail = document.getElementById('coordinatorEmail').value.trim();
  const coordinatorPhone = document.getElementById('coordinatorPhone').value.trim();
  const studentName = document.getElementById('studentName').value.trim();
  const tripStartDate = document.getElementById('tripStartDate').value;
  const tripEndDate = document.getElementById('tripEndDate').value;

  // Check required fields
  if (!collegeName || !tripCoordinator || !coordinatorEmail || !coordinatorPhone || !studentName || !tripStartDate || !tripEndDate) {
    alert('Please fill in all required fields.');
    return false;
  }

  // Validate email format
  if (!validateEmail(coordinatorEmail)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Validate phone number format (basic check for 10 digits)
  if (!/^\d{10}$/.test(coordinatorPhone)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  return true;
}

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
