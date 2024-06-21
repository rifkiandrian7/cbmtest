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

document.addEventListener('DOMContentLoaded', function() {
    var triggerTabList = [].slice.call(document.querySelectorAll('#nav-tab a'))
    triggerTabList.forEach(function(triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', function(event) {
        event.preventDefault()
        tabTrigger.show()
      })
    })
})

