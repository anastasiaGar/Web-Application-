document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userRegistrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
  });

  function validateForm() {
    const fullname = document.getElementById("fullname");

    // Password validation
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");
    // Check for password length
    if (password.value.length < 8) {
      alert(
        "Ο κωδικός πρόσβασης πρέπει να έχει περισσότερου από 8 χαρακτήρες."
      );
      password.focus();
      return false;
    }
    // Check for password match
    if (password.value !== confirm_password.value) {
      alert("Οι κωδικοί πρόσβασης δεν ταιριάζουν.");
      confirm_password.focus();
      return false;
    }

    // Age validation
    const birthdate = document.getElementById("birthdate");
    if (!isValidAge(birthdate.value)) {
      alert("Πρέπει να είστε τουλάχιστον 18 ετών για να εγγραφείτε.");
      birthdate.focus();
      return false;
    }

    return true;
  }

  function isValidAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 18;
  }
});
