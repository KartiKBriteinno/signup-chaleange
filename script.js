document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');
    const form = document.getElementById('signupForm');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    form.addEventListener('submit', handleSubmit);

    function validateEmail() {
        const email = emailInput.value;
        if (email.length < 3) {
            emailSuccess.style.display = 'none';
            emailError.style.display = 'block';
            emailError.textContent = 'Email must be at least 3 characters!';
        } else if (email.length > 3 && email.includes('@') && email.includes('.')) {
            emailError.style.display = 'none';
            emailSuccess.style.display = 'block';
            emailSuccess.textContent = 'Email looks good!';
        } else {
            emailSuccess.style.display = 'none';
            emailError.style.display = 'block';
            emailError.textContent = 'Invalid email!';
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length > 8) {
            passwordError.style.display = 'none';
            passwordSuccess.style.display = 'block';
            passwordSuccess.textContent = 'Password looks good!';
        } else {
            passwordSuccess.style.display = 'none';
            passwordError.style.display = 'block';
            passwordError.textContent = 'Password must be at least 8 characters!';
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const emailValid = emailInput.value.length > 3 && emailInput.value.includes('@') && emailInput.value.includes('.');
        const passwordValid = passwordInput.value.length > 8;

        if (emailValid && passwordValid) {
            if (confirm('Do you want to submit the form?')) {
                alert('Successful signup!');
                form.reset();
                emailSuccess.style.display = 'none';
                passwordSuccess.style.display = 'none';
            }
        } else {
            alert('Signup failed, please check your inputs.');
            emailInput.value = '';
            passwordInput.value = '';
            emailSuccess.style.display = 'none';
            passwordSuccess.style.display = 'none';
        }
    }
});
