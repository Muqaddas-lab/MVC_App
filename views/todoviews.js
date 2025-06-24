function renderTodos(res, todos) {
  res.json({ status: 'success', data: todos });
}

function renderError(res, code, msg) {
  res.status(code).json({ status: 'error', message: msg });
}

module.exports = { renderTodos, renderError };
