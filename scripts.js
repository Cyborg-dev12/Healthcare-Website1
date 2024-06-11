document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for contacting us, ' + name + '!');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }


    const signupForm = document.querySelector('form.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const passwordPattern = /^(?!\s)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{5,}$/;

            if (!passwordPattern.test(password)) {
                alert('Password must have at least 5 characters, a special character, a number, and no spaces at the beginning.');
                return;
            }

            alert('Account created successfully! Redirecting to your account...');
        });
    }
});
