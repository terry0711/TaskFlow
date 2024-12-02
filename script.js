// Navigation logic
function navigateTo(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

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

// Create Task Logic
document.getElementById("task-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = {
    name: document.getElementById("task-name").value,
    date: document.getElementById("task-date").value,
    start: document.getElementById("task-start").value,
    end: document.getElementById("task-end").value,
    priority: document.getElementById("task-priority").value,
    description: document.getElementById("task-desc").value,
    status: "InProgress",
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task added successfully!");
  document.getElementById("task-form").reset();
});

// Display Task List
function displayTaskList() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const container = document.getElementById("task-list-container");
  container.innerHTML = tasks
    .map(task => `<div><h3>${task.name}</h3><p>${task.description}</p></div>`)
    .join("");
}

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
