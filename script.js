
// Untuk menampilkan dan menyembunyikan icon mata di password input
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

// Fungsi untuk menu tab, menampilkan dan menyembunyikan konten
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

// Fungsi untuk menggeser baris pada tabel
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.move-up').forEach(button => {
    button.addEventListener('click', () => {
      let row = button.closest('tr');
      if (row.previousElementSibling && row.previousElementSibling.tagName === 'TR') {
        row.parentNode.insertBefore(row, row.previousElementSibling);
      }
    });
  });

  document.querySelectorAll('.move-down').forEach(button => {
    button.addEventListener('click', () => {
      let row = button.closest('tr');
      if (row.nextElementSibling && row.nextElementSibling.tagName === 'TR') {
        row.parentNode.insertBefore(row.nextElementSibling, row);
      }
    });
  });
});

