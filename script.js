document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankYouMessage').style.display = 'block';
    this.reset();
});
