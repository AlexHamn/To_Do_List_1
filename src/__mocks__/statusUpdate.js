function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const taskInput = 'mockTask';
const tasks = [];

function createTask(task) {
  return {
    id: Date.now().toString(), task, complete: true, overwrite: true,
  };
}

const updateStatus = (e) => {
  if (e) { e.preventDefault(); }
  const task = taskInput;
  if (task == null || task === '') return;
  const newTask = createTask(task);
  tasks.push(newTask);
};

module.exports = {
  clearElement,
  createTask,
  updateStatus,
  taskInput,
  tasks,
};