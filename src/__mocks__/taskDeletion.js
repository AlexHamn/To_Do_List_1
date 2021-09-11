let tasks = [];

function clearCompleted() {
  tasks = [{
    complete: true, id: '1631390015514', overwrite: true, task: 'mockTask',
  }];
  tasks = tasks.filter((task) => !task.complete);
}

function clearOverwrite() {
  tasks = [{
    complete: true, id: '1631390015514', overwrite: true, task: 'working',
  }];
  tasks = tasks.filter((task) => !task.overwrite);
}

function resetTasks() {
  tasks = [{
    complete: true, id: '1631390015514', overwrite: true, task: 'working',
  }];
  tasks = [];
}

module.exports = {
  tasks,
  clearCompleted,
  clearOverwrite,
  resetTasks,
};