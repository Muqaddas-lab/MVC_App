const model = require('../models/todomodels');
const view = require('../views/todoviews');

exports.getTodos = (req, res) => {
  const todos = model.getAllTodos();
  view.renderTodos(res, todos);
};

exports.createTodo = (req, res) => {
  const { task } = req.body;
  if (!task) return view.renderError(res, 400, 'Task is required');
  const newTodo = model.addTodo(task);
  view.renderTodos(res, [newTodo]);
};
