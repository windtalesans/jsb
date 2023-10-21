document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        alert('order success');
    });
});
