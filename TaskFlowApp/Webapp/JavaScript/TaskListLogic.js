// Display Task List
function displayTaskList() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const container = document.getElementById("task-list-container");
  container.innerHTML = tasks
    .map(task => `<div><h3>${task.name}</h3><p>${task.description}</p></div>`)
    .join("");
}
