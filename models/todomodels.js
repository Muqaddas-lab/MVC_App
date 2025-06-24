let todos = [
    { id: 1, task: "Study", done: false }
];

function getAllTodos() {
  return todos;
}

function addTodo(task) {
  const newTodo = {
    id: todos.length + 1,
    task,
    done: false,
  };
  todos.push(newTodo);
  return newTodo;
}

module.exports = { getAllTodos, addTodo };
