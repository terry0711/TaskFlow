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
