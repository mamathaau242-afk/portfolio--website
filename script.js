function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !mobile || !message) {
    alert("All fields are required.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile number must be exactly 10 digits.");
    return false;
  }

  return true;
}

// Dynamic welcome message
const welcome = document.getElementById("welcome");
if (welcome) {
  setTimeout(() => {
    welcome.style.opacity = 1;
  }, 500);
}

// Dynamic date and time
const datetime = document.getElementById("datetime");
if (datetime) {
  datetime.textContent = "Current Date & Time: " + new Date().toLocaleString();
}
