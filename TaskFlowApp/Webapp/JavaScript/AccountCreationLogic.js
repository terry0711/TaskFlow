// Account Registration
document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const pin = document.getElementById("pin").value;
  const confirmPin = document.getElementById("confirm-pin").value;

  if (pin !== confirmPin) {
    alert("PINs do not match!");
    return;
  }

  const userData = { firstName, lastName, email, pin };
  localStorage.setItem("taskFlowUser", JSON.stringify(userData));

  alert("Account created successfully!");
  navigateTo("login-page");
});
