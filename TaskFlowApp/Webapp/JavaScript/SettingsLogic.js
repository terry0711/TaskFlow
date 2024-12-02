// Settings Logic
document.getElementById("settings-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("update-name").value;
  const email = document.getElementById("update-email").value;
  const notifications = document.getElementById("notifications-toggle").checked;

  localStorage.setItem("settings", JSON.stringify({ name, email, notifications }));
  alert("Settings updated!");
});

// Event Listeners for Menu Buttons
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-btn[onclick=\"navigateTo('task-list')\"]").addEventListener("click", displayTaskList);
});
