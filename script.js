document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform simple validation
    if (username === 'Sharik' && password === '2005') {
      // Redirect to homepage
      window.location.href = 'ielts.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });