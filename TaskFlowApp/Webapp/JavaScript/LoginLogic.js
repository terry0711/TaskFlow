// Login Logic
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const pin = document.getElementById("login-pin").value;
  const storedUser = JSON.parse(localStorage.getItem("taskFlowUser"));

  if (storedUser && storedUser.email === email && storedUser.pin === pin) {
    alert("Login successful!");
    navigateTo("main-menu");
  } else {
    alert("Invalid email or PIN!");
  }
});