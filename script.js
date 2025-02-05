function toggleForms() {
    var loginContainer = document.getElementById('loginContainer');
    var registerContainer = document.getElementById('registerContainer');
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    window.location.href = 'dashboard.html';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var newUsername = document.getElementById('newUsername').value;
    var email = document.getElementById('emailRegister').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    console.log('Usuário:', newUsername);
    console.log('Email:', email);
    console.log('Senha:', newPassword);
    console.log('Confirmar Senha:', confirmPassword);

    window.location.href = 'dashboard.html';
});