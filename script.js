function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordIcon = document.getElementById('passwordIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('bi-eye-slash');
        passwordIcon.classList.add('bi-eye');
    } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('bi-eye');
        passwordIcon.classList.add('bi-eye-slash');
    }
}

function toggleColumn() {
    var leftColumn = document.getElementById('leftColumn');
    var rightColumn = document.getElementById('rightColumn');

    if (leftColumn.style.display !== 'none') {
        leftColumn.style.display = 'none';
        rightColumn.classList.remove('col-lg-4');
        rightColumn.classList.add('col-lg-12');
    } else {
        leftColumn.style.display = 'block';
        rightColumn.classList.remove('col-lg-12');
        rightColumn.classList.add('col-lg-4');
    }
}

