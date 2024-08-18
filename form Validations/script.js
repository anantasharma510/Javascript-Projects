document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateForm() {
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    // Full Name validation
    if (fullName === "") {
        document.getElementById('nameError').textContent = "Full Name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters long and include at least one number and one special character.";
        isValid = false;
    }

    return isValid; // Return true if all validations passed
}
