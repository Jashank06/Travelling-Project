document.getElementById("trip-form").addEventListener("submit", function(e) { 
    e.preventDefault();
    
    const formData = new FormData(this);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    if (validateSchoolForm()) {
        console.log(formValues); // Log form data for review
        alert("Your registration has been submitted successfully!");
        this.reset();
    }
});

// School form validation function
function validateSchoolForm() {
    const schoolName = document.getElementById('schoolName').value.trim();
    const contactPerson = document.getElementById('contactPerson').value.trim();
    const contactEmail = document.getElementById('contactEmail').value.trim();
    const contactPhone = document.getElementById('contactPhone').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    const tripDate = document.getElementById('tripDate').value;

    // Check required fields
    if (!schoolName || !contactPerson || !contactEmail || !contactPhone || !studentName || !tripDate) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Validate email format
    if (!validateEmail(contactEmail)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number format (basic check for 10 digits)
    if (!/^\d{10}$/.test(contactPhone)) {
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
