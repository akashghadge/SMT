document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "/media_files/hidden.png"; // Path to the "Hide Password" logo
      eyeIcon.alt = "Hide Password";
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "/media_files/view.png"; // Path to the "Show Password" logo
      eyeIcon.alt = "Show Password";
    }
  });
