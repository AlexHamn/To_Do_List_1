function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const taskInput = 'mockTask';
const LOCAL_STORAGE_TASKS_KEY = 'tasks.list';
/* eslint-disable import/no-mutable-exports */
let tasks = [];

function createTask(task) {
  return {
    id: Date.now().toString(), task, complete: false, overwrite: false,
  };
}

const updateStatus = (e) => {
  if (e) { e.preventDefault(); }
  const task = taskInput;
  if (task == null || task === '') return;
  const newTask = createTask(task);
  tasks.push(newTask);
};

export const updateTask = (e) => {
  const task = e.target.children[0].value;
  tasks = tasks.filter((task) => task);
  if (task !== null || task !== '') {
    const newTask = createTask(task);
    tasks.push(newTask);
  }
};

export function clearCompleted() {
  tasks = tasks.filter((task) => !task.complete);
}

export function clearOverwrite() {
  tasks = tasks.filter((task) => !task.overwrite);
}

export function resetTasks() {
  tasks = [];
}

module.exports = {
  clearElement, createTask, updateStatus, taskInput, tasks,
};