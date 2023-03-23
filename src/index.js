document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const tasksOutput = document.getElementById("tasks");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const toDo = taskInput.value;
    const task = document.createElement("li");
    task.innerHTML = `${toDo} <button id=delBtn>X</button>`;
    tasksOutput.appendChild(task);
    taskInput.value = "";

    const delBtn = task.querySelector("#delBtn");

    delBtn.addEventListener("click", () => {
      delBtn.parentNode.remove();
    });
  });
});
