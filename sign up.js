document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const date = document.getElementById('date')
        alert('sign up success');
    });
});
