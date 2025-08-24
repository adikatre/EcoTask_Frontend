window.onload = async () => {
  const tasks = await apiGet("/tasks");
  if (tasks.length > 0) {
    const task = tasks[0]; // Just pick first for simplicity
    document.getElementById("taskTitle").innerText = task.title;

    document.getElementById("completeBtn").onclick = async () => {
      const res = await apiPost("/completions", { task_id: task._id });
      document.getElementById("msg").innerText = res.msg || "Task done!";
    };
  }
};
