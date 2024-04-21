function checkPassword() {
  var password = document.getElementById("password").value;

  // Define passwords and their corresponding HTML files
  var passwords = {
    "gockelhahn": "gockelhahn.html",
    "yaraxtendo": "yaraxtendo.html",
    "bulachi": "bulachi.html"
  };

  // Check if the entered password exists in the passwords object
  if (passwords.hasOwnProperty(password)) {
    // If the password is correct, open the corresponding HTML file
    window.location.href = passwords[password];
  } else {
    // If the password is incorrect, display an error message
    document.getElementById("wrongPassword").style.display = "block";
  }
}
